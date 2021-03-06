import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import { Typography, makeStyles, Box } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player/lazy'
import { Grid } from "@material-ui/core";

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
    textAlign: "center",
    padding: "100px 120px 0 120px",
    marginBottom: "50px"
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "80px",
    flexDirection: "row",

  },
  cardProps: {
    backgroundColor: "#2D2D2D",
    maxWidth: 600,
    minWidth: 600,
    marginTop: "20px"
  },

}));

function HomePage() {
  const classes = useStyles();
  return (
    <div >
      <Box >
        <Box className={classes.hero}>
          <Box className={classes.pageTitle}>
            <Typography variant="h4">SEEINTEL capabilities are being moved to csilinux.com</Typography>

          </Box>
          <Box >
            <Typography variant="h4" align="center">SEEINTEL demo</Typography>
          </Box>

          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Card className={classes.cardProps}>
                <CardActionArea>
                  <div className='player-wrapper'>
                    <ReactPlayer controls className='react-player' width='100%'
                      height='100%' url='https://youtu.be/3Q3ocbmw7AU' />
                  </div>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>


          {/* <Box className={classes.btns}>
            <Link to="/signin"><Button className='margin' variant="contained">Sign in</Button></Link>
            <Link to="/signup"><Button className='margin' variant="contained">Sign Up</Button></Link>
          </Box> */}
        </Box>
      </Box>

    </div>
  );
}
export default withRouter(HomePage);

