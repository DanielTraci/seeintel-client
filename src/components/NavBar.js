import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from '@material-ui/core'
import { Link, Route } from 'react-router-dom'
import UserDashboard from './UserDashboard'

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
  }));

export default function NavBar(props) {
    const classes = useStyles();
    const {user, onLogout, onSignUp, onSignIn} = props
    return (
        <div>
            <AppBar >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                <Link to="/">HOME</Link>

                </Typography>
                {
                    user ? (
                    <>  
                        <Link to="/user">MY DASHBOARD</Link>
                        <Button onClick={onLogout} color="inherit">Logout</Button>
                    </>
                    ) : (
                    <>  
                        <Link to="/signin"><Button color="inherit">Sign in</Button></Link>
                        <Link to="/signup"><Button color="inherit">Sign Up</Button></Link>
                    </>
                    )
                }  
            </Toolbar>
            </AppBar>
        </div>
    )
}
