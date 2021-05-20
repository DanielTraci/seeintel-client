import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";
import {Typography, Button, makeStyles} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
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
    }
  });

class SavedNote extends Component {
    
    state = {
        savedNote: [],
        fetchNote: true
    }

    componentDidMount () {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                    this.setState({ 
                        savedNote: response.data, 
                        fetchNote: false
                    })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }
   
    render() {
        const {savedNote, fetchNote} = this.state
        const {onDeleteNote} = this.props
        const {classes} = this.props
        
        if(fetchNote) {
            return <p>Loding ...</p>
        }
        
        return (
            <div>
                
                <Typography variant="h3">Your note</Typography>
                <Typography variant="body1">{savedNote.myNote}</Typography>
                <div className={classes.root}>
                    <Link to={`/notes/${savedNote._id}/edit`}><Button variant="contained">Edit</Button></Link>
                    <Button variant="contained" onClick={() => {onDeleteNote(savedNote)}}>Delete note</Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SavedNote)
