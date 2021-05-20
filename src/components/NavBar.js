import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from '@material-ui/core'
import { Link, Route } from 'react-router-dom'
import logo from './covers/SEEINTEL white.png'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#1e1e1e"
    },
    logo: {
      maxWidth: 150,
      marginRight: '10px'
    }
  }));

function NavBar(props) {
    const classes = useStyles();
    const {user, onLogout, onSignUp, onSignIn} = props
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                
                <img src={logo} alt="seeintel" className={classes.logo} />

                </Typography>
                {
                    user ? (
                    <>  
                        <Link to="/user">MY DASHBOARD</Link>
                        <Button variant="contained" onClick={onLogout}>Logout</Button>
                    </>
                    ) : (
                    <>  
                        <Link to="/signin"><Button variant="contained" >Sign in</Button></Link>
                        <Link to="/signup"><Button variant="contained" >Sign Up</Button></Link>
                    </>
                    )
                }  
            </Toolbar>
            </AppBar>
        </div>
    )
}


export default withRouter(NavBar)