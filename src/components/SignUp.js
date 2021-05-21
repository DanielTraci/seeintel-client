
import React from 'react';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "100px",
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  hero: {
    backgroundImage: `url('./covers/red08_00000-min.png')`,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
}));

function SignUp(props) {
    const { onSignUp } = props
    const classes = useStyles();

  return (
    <Box className={classes.hero}>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign up to SEEINTEL
        </Typography>
        <form onSubmit={onSignUp} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                className='formBackground'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className='formBackground'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className='formBackground'
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="ffffff"
            className={classes.submit}
          >
            SIGN UP
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </Box>
  );
}

export default withRouter(SignUp)


/*
import React from 'react'
import { Typography, Button, makeStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `url('./covers/red02_00200-min.png')`,
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

function SignUp(props) {
    const { onSignUp } = props
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.hero}>
                <form onSubmit={onSignUp}>
                    <Typography variant="h3">Sign up to SEEINTELL</Typography>
                    <div>
                        <label>Username</label>
                        <input type="text" name='username' />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' />
                    </div>
                    <button type="submit">Sing up</button>
                </form>
            </Box>
        </div>
    )
}

export default withRouter(SignUp)

////


<TextField
required
id="filled-required"
label="Username required"
variant="filled"
/>
</div>
<div>
      <TextField
required
id="filled-required"
label="Email required"
variant="filled"

/>
</div>
<div>
      <TextField
required
id="filled-required"
label="Password required"
variant="filled"
/>
</div>

      <Button type="submit" variant="contained">Sing up</Button> */