import React, {Component} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import config from './config';
import axios from 'axios';
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import UserDashboard from "./components/UserDashboard";
import NavBar from "./components/NavBar";
import SingleDomain from "./components/SingleDomain";
import HomePage from "./components/HomePage";
import SavedResultDetail from "./components/SavedResultDetail";
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

  handleAdd = (event) => {
    event.preventDefault()
    let newNote = {
      myNote: event.target.myNote.value
    }
    console.log(newNote)
    axios.post(`${config.API_URL}/api/create`, newNote, {withCredentials: true})
      .then((response) => {
        console.log(response.data)
          this.setState({
            notes: [response.data , ...this.state.notes]
          }, () => {
              this.props.history.push('/user')
          })
      })
      .catch(() => {
        console.log('Add note failed')
      })
  }

  handleDelete = (savedResult) => {
    axios.delete(`${config.API_URL}/api/notes/${savedResult._id}`, { withCredentials: true })
    .then(() => {
        let filterNotes = this.state.notes.filter((note) => {
            return note._id !== savedResult._id
        })
        this.setState({
          notes: filterNotes
        }, () => {
          this.props.history.push('/user')
        })
    })
    .catch(() => {
        console.log('Delete failed')
    })

}

  handleEdit = (savedResult) => {
    axios.patch(`${config.API_URL}/api/notes/${savedResult._id}`, savedResult)
      .then(() => {
          let updatedNotes = this.state.notes.map((note) => {
              if  (note._id == savedResult._id) {
                note.myNote = savedResult.myNote
              }
              console.log(note)
              return note
          })
        this.setState({
          notes: updatedNotes
        }, () => {
          this.props.history.push('/user')
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


    

  render() {
    const{error, user, notes, domains} = this.state
    return (
      <div>
        <NavBar onLogout={this.handleLogout} user={user}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          
          <Route path="/user"  render={(routeProps) => {
            return  <UserDashboard notes={notes} domains={domains} {...routeProps}  />}}/>

          <Route path="/search/:result" render={(routeProps) => {
            return <SingleDomain onSaveDomain={this.handleSaveDomain} {...routeProps} />}}/>
          {/* this was taken out of the route above > onAdd={this.handleAdd} 
              and put below*/}
          <Route path="/domains/:domainId" render={(routeProps) => {
            return <SavedDomain onAdd={this.handleAdd} {...routeProps} />}}/>
          
          <Route path="/signin" error={error} render={(routeProps) => {
            return  <SignIn onSignIn={this.handleSignIn} {...routeProps}  />}}/>

          <Route path="/signup"  render={(routeProps) => {
            return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />}}/>

          <Route exact path="/notes/:noteId"  render={(routeProps) => {
            return <SavedResultDetail onDelete={this.handleDelete} {...routeProps}/> }}/>

          <Route exact path="/notes/:noteId/edit"  render={(routeProps) => {
            return <EditNote onEdit={this.handleEdit} {...routeProps}/> }}/>
          
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
