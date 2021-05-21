import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import { Typography, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url('./covers/06_00000-min.png')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",

  },
  pageTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    textAlign: "center",
    padding: "200px 120px 0 120px",
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "80px",
    flexDirection: "row",
    
  }

}));

function HomePage() {
  const classes = useStyles();
  return (
    <div >
      <Box >
        <Box className={classes.hero}>
          <Box className={classes.pageTitle}>
            <Typography variant="h3">SEEINTEL is your one-stop source to access cyber threat intelligence from multiple origins</Typography>
          </Box>
          <Box className={classes.btns}>
            <Link to="/signin"><Button className='margin' variant="contained">Sign in</Button></Link>
            <Link to="/signup"><Button className='margin' variant="contained">Sign Up</Button></Link>
          </Box>
        </Box>
      </Box>

    </div>
  );
}
export default withRouter(HomePage);

