import React, { Component } from 'react'
import {TextField, makeStyles} from '@material-ui/core'
import { Button } from '@material-ui/core'


export default class UserDashboard extends Component {
    
    render() {
        const classes = {}
        return (
            <div>
                <h2>Empty</h2>
                <h2>Add a note</h2>
                <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                        id="outlined-multiline-static"
                        label="Add your notes"
                        multiline
                        rows={5}
                        variant="outlined"
                        />
                        <Button type="submit" color="inherit">Search</Button>
                </form>
            </div>
        )
    }
}
