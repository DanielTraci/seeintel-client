import { Button } from '@material-ui/core'
import React, {Component} from 'react'
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div >
      <h1>SEEINTEL is your one-stop source to access cyber threat intelligence from multiple origins</h1>
      <h2>home page</h2>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}
export default HomePage;