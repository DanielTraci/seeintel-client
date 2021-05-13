import React, {Component} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import config from './config';
import axios from 'axios';
import SignUp from "./components/SignUp";
import SignIn from "./components/SingIn";
import HomePage from "./pages/HomePage";
import UserDashboard from "./components/UserDashboard";
import NavBar from "./components/NavBar";





class App extends Component {
  state = {
    user: null,
    error: null
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
      
      axios.post(`${config.API_URL}/api/signup`, newUser)
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
      
      axios.post(`${config.API_URL}/api/signin`, newUser)
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
          })
        })
        .catch((errorObj) => {
          this.setState({
            error: errorObj.response.data
          })
      })
  }

  render() {
    const{error, user} = this.state
    return (
      <div>
        <NavBar onLogout={this.handleLogout} user={user}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user" component={UserDashboard}/>
          <Route  path="/signin" error={error} render={(routeProps) => {
                  return  <SignIn onSignIn={this.handleSignIn} {...routeProps}  />}}/>
          <Route  path="/signup"  render={(routeProps) => {
                  return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />}}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
