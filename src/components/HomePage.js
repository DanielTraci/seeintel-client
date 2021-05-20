import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import { Typography, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url('./covers/01-red-min.png')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }

}));

function HomePage() {
  const classes = useStyles();
  return (
    <div >
      <Box className={classes.hero}>
      <Box>
        <Typography variant="h3">SEEINTEL is your one-stop source to access cyber threat intelligence from multiple origins</Typography>
        </Box>
        <Box className={classes.btns}>
          <Link to="/signin"><Button  variant="contained">Sign in</Button></Link>
          <Link to="/signup"><Button variant="contained">Sign Up</Button></Link>
        </Box>
      </Box>
      <Box>
      </Box>
    </div>
  );
}
export default withRouter(HomePage);