import { Button } from '@material-ui/core'
import React, {Component} from 'react'
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div >
      <h2>empty</h2>
      <h1>SEEINTEL is your one-stop source to access cyber threat intelligence from multiple origins</h1>
      <Link to="/signin"><Button color="inherit">Sign in</Button></Link>
      <Link to="/signup"><Button color="inherit">Sign Up</Button></Link>
    </div>
  );
}
export default HomePage;