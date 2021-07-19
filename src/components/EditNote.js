import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter } from 'react-router-dom'
import { Typography, TextField, Button, makeStyles } from '@material-ui/core'

class EditNote extends Component {

    state = {
        savedNote: {},
        //fetchNote: true
    }

    componentDidMount() {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                this.setState({
                    savedNote: response.data,
                    //fetchNote: false
                })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }

    handleEditNote = (event) => {
        event.preventDefault()
        let updatedNote = event.target.value
        const { savedNote } = this.state
        let cloneSavedNote = JSON.parse(JSON.stringify(savedNote))

        cloneSavedNote.myNote = updatedNote

        this.setState({
            savedNote: cloneSavedNote
        })
    }

    render() {
        const { savedNote } = this.state
        const { onEdit } = this.props
        const classes = {}
        return (
            <div>
                <br />
                <Typography variant="h3">Edit your note</Typography>
                <br />
                <form onSubmit={(event) => { onEdit(event, savedNote) }}>

                    <TextField className='formBackground' id="outlined-multiline-static" onChange={this.handleEditNote} value={savedNote.myNote} multiline
                        rows={2} variant="filled" type="text" name="myNote" fullWidth margin="normal"
                        InputProps={{ className: classes.input }} />
                    <div>
                        <br />
                        <Button type="submit" variant="contained">Save note</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(EditNote)