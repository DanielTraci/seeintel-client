import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import {TextField, makeStyles} from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'



export default class UserDashboard extends Component {
    
    state = {
        notes: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/api/notes`)
        .then((response) => {
          this.setState({notes: response.data})
        }).catch((err) => {
          
        });   
    }

    render() {
        const classes = {}
        const {notes} = this.state
        return (
            <div>
                <h2>Empty</h2>
                <h2>Welcome to your dashboard</h2>
                <SearchBar/>
                
                <h2>Your saved search results</h2>

                {
                    notes.map((note) => {
                        return (
                        <div key={note._id}>
                            <Link to={`/notes/${note._id}`}>{note.myNote}</Link>
                            <div>
                                <button>Edit</button>
                                <button>Delete note</button>
                            </div>
                        </div>
                        )
                    })
                }
                <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                        id="outlined-multiline-static"
                        label="Add your notes"
                        multiline
                        rows={5}
                        variant="outlined"
                        />
                        <Button type="submit" color="inherit">Add your note</Button> 
                </form>
            </div>
        )
    }
}
