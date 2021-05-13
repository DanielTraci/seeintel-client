import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    const classes = {}
    const {user, onLogout, onSignUp, onSignIn} = props
    return (
        <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                .
                </Typography>
                {
                    user ? (
                    <Button onClick={onLogout} color="inherit">Logout</Button>
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
