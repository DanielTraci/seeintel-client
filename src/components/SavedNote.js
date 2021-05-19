import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";

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

        if(fetchNote) {
            return <p>Loding ...</p>
        }
        
        return (
            <div>
                <h2>Edit your note</h2>
                <h3>{savedNote.myNote}</h3>
                <Link to={`/notes/${savedNote._id}/edit`}><button>Edit</button></Link>
                <button onClick={() => {onDeleteNote(savedNote)}}>Delete note</button>
            </div>
        )
    }
}

export default withRouter(SavedNote)
