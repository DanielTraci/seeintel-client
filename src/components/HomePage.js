import { Button } from '@material-ui/core'
import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {Typography, makeStyles, Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  }

}));

function HomePage() {
  const classes = useStyles();
  return (
    <div >
      <Box className={classes.hero}>
        <Box><Typography variant="h3">SEEINTEL is your one-stop source to access cyber threat intelligence from multiple origins</Typography>
        
        <Link to="/signin"><Button color="inherit">Sign in</Button></Link>

        <Link to="/signup"><Button color="inherit">Sign Up</Button></Link></Box>

      </Box>
    </div>
  );
}
export default HomePage;