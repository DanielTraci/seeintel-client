import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from "react-router-dom" 
import logo from "../logo/SEEINTEL white.png"
//importing Link as an alias (RouterLink) because Material-UI(MUI) is using "Link" on line 3, 
//if MUI didn't use it, we could have do --> import Link from "react-router-dom" 



const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#FFFFFF",
    
  },
  footer: {
    marginTop: theme.spacing(6),
  },
  logoDesktop: {
    maxWidth: 125,
  },
  columnSpacing: {
    marginBottom: theme.spacing(2),
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <Divider variant="fullWidth" className={classes.divider} />
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.footer}>

        <Grid item xs={12} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center">
          <img src={logo} alt="iwc logo" className={classes.logoDesktop} />
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center" >
            <Typography color='primary' variant="body2" align="center">Copyright © SEEINTEL</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
