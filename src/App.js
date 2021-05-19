import React, {Component} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import config from './config';
import axios from 'axios';
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import UserDashboard from "./components/UserDashboard";
import NavBar from "./components/NavBar";
import SearchedDomain from "./components/SearchedDomain";
import HomePage from "./components/HomePage";
import SavedNote from "./components/SavedNote";
import EditNote from "./components/EditNote";
import SavedDomain from "./components/SavedDomain";



class App extends Component {
  state = {
    user: null,
    error: null,
    fetchingUser: true,
    notes: [],
    domains: []

  }
  
  handleSignUp = (e) => {
    e.preventDefault()
    let{username, email, password}=e.target
    let newUser = {
        username: username.value,
        email: email.value,
        password: password.value
      }      
      axios.post(`${config.API_URL}/api/signup`, newUser, {withCredentials: true})
      .then((response) => {
        this.setState({
          user: response.data
        }, () => {
          this.props.history.push('/user')
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  
  handleSignIn = (e) => {
    e.preventDefault()
    let{email, password}=e.target
    let newUser = {
        email: email.value,
        password: password.value
      } 
      
      axios.post(`${config.API_URL}/api/signin`, newUser, {withCredentials: true})
      .then((response) => {
        this.setState({
          user: response.data,
          null: null
        }, () => {
          this.props.history.push('/user')
        })
      })
      .catch((errorObj) => {
        this.setState({
          error: errorObj.response.data
        })
      })
  }

  handleLogout = () => {
      axios.get(`${config.API_URL}/api/logout`, {withCredentials: true})
        .then(() => {
          this.setState({
            user: null
          }, () => {
            this.props.history.push('/')
          })
        })
        .catch((errorObj) => {
          this.setState({
            error: errorObj.response.data
          })
      })
  }

  componentDidMount() {
    axios.get(`${config.API_URL}/api/user`, {withCredentials: true}) 
    .then((response) => {
      this.setState({ 
        user: response.data,
        fetchingUser: false,
      })
    })
    .catch((errorObj) => {
      this.setState({
        error: errorObj.response.data,
        fetchingUser: false,
      })
    })
 
  }

  handleAddNote = (event, domainId) => {
    event.preventDefault()

    let newNote = {
      myNote: event.target.myNote.value,
    }
    event.target.myNote.value = ''
    axios.post(`${config.API_URL}/api/create`, newNote, {withCredentials: true})
      .then((response) => {
        console.log(response.data)
          axios.patch(`${config.API_URL}/api/domains/${domainId}`, {myNote: response.data._id} , {withCredentials: true})
          .then((result) => {
            this.setState({
              notes: [response.data , ...this.state.notes],
              domains: [result.data, ...this.state.domains]
            })
          }).catch((err) => { 
          });

      })
      .catch(() => {
        console.log('Add note failed')
      })
      
  }

  handleDeleteNote = (savedNote) => {
    axios.delete(`${config.API_URL}/api/notes/${savedNote._id}`, { withCredentials: true })
    .then(() => {
        let filterNotes = this.state.notes.filter((note) => {
            return note._id !== savedNote._id
        })
        this.setState({
          notes: filterNotes
        })
    }, () => {
      this.props.history.push('/user')
    })
    .catch(() => {
        console.log('Delete failed')
    })

}

  handleEdit = (event, savedNote) => {
    event.preventDefault()
    axios.patch(`${config.API_URL}/api/notes/${savedNote._id}`, savedNote)
      .then(() => {
          let updatedNotes = this.state.notes.map((note) => {
              if  (note._id == savedNote._id) {
                note.myNote = savedNote.myNote
              }
              console.log(note)
              return note
          })
        this.setState({
          notes: updatedNotes
        }, () => {
          console.log('Inside edit note')
          this.props.history.goBack()
        })
      })
      .catch(() =>{
        console.log('Edit crashed')
      })
  }

  handleSaveDomain = (myDomain) => {
    let newDomain = {
      myDomain: myDomain.id,
      data: myDomain
      }      
      axios.post(`${config.API_URL}/api/domains/create`, newDomain, {withCredentials: true})
      .then((response) => {
        this.setState({
          domains: response.data 
        }, () => {
          this.props.history.push('/user')
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }

  handleDeleteDomain = (savedDomain) => {
      axios.delete(`${config.API_URL}/api/domains/${savedDomain._id}`, { withCredentials: true })
      .then(() => {
          let filterDomains = this.state.domains.filter((domain) => {
              return domain._id !== savedDomain._id
          })
          this.setState({
            domains: filterDomains
          }, () => {
            this.props.history.push('/user')
          })
      })
      .catch(() => {
          console.log('Delete failed')
      })
  
  }
    

  render() {
    const{error, user, notes, domains} = this.state
    return (
      <div>
        <NavBar onLogout={this.handleLogout} user={user}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="/user"  render={(routeProps) => {
            return  <UserDashboard domains={domains} {...routeProps}  />}}/>

          <Route path="/search/:result" render={(routeProps) => {
            return <SearchedDomain onSaveDomain={this.handleSaveDomain} {...routeProps} />}}/>

          <Route path="/signin" error={error} render={(routeProps) => {
            return  <SignIn onSignIn={this.handleSignIn} {...routeProps}  />}}/>

          <Route path="/signup"  render={(routeProps) => {
            return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />}}/>

          <Route exact path="/domains/:domainId"  render={(routeProps) => {
            return <SavedDomain notes={notes}  onAdd={this.handleAddNote} onDeleteNote={this.handleDeleteNote} onDeleteDomain={this.handleDeleteDomain} {...routeProps}/> }}/>

          <Route exact path="/notes/:noteId"  render={(routeProps) => {
            return <SavedNote onDeleteNote={this.handleDeleteNote} {...routeProps}/> }}/>

          <Route exact path="/notes/:noteId/edit"  render={(routeProps) => {
            return <EditNote onEdit={this.handleEdit} {...routeProps}/> }}/>
          
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
