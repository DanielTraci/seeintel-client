import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import {withRouter} from 'react-router-dom'


class EditNote extends Component {

    state = {
        savedNote: {},
        //fetchNote: true
    }

    componentDidMount () {
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
        const {savedNote} = this.state
        const {onEdit} = this.props
        return (
            <div>
                <h1>Edit note</h1>
                <form onSubmit={(event) => {onEdit(event, savedNote)}}>
                    <textarea onChange={this.handleEditNote} type="text" value={savedNote.myNote} />
                    <div>
                    <button>Save note</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(EditNote)