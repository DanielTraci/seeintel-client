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



class App extends Component {
  state = {
    user: null,
    error: null,
    fetchingUser: true,
  }
  
  handleSignUp = (e) => {
    e.preventDefault()
    let{username, email, password}=e.target
    let newUser = {
        username: username.value,
        email: email.value,
        password: password.value
      } 
    console.log(newUser)
      
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

  render() {
    const{error, user, notes} = this.state
    return (
      <div>
        <NavBar onLogout={this.handleLogout} user={user}/>
        
        <Switch>

          <Route exact path="/" component={HomePage} />
          {/*<Route path="/user" component={UserDashboard}/>*/}
          <Route path="/user"  render={(routeProps) => {
            return  <UserDashboard notes={notes} {...routeProps}  />}}/>
          <Route path="/search/:result" render={(routeProps) => {
            return <SingleDomain {...routeProps} />}}/>
          <Route path="/signin" error={error} render={(routeProps) => {
            return  <SignIn onSignIn={this.handleSignIn} {...routeProps}  />}}/>
          <Route path="/signup"  render={(routeProps) => {
            return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />}}/>
          <Route path="/notes/:noteId"  render={(routeProps) => {
            return <SavedResultDetail {...routeProps}/> }}/>

          
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
