import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";

class SavedResultDetail extends Component {

    state = {
        savedResult: [],
        fetchNote: true
    }

    componentDidMount () {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                    this.setState({ 
                        savedResult: response.data, 
                        fetchNote: false
                    })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }
   


    render() {
        const {savedResult, fetchNote} = this.state
        const {onDelete} = this.props

        if(fetchNote) {
            return <p>Loding ...</p>
        }
        
        return (
            <div>
                <h2>empty space</h2>
                <h2>empty space</h2>
                <h2>Saved result details</h2>
                <h3>{savedResult.myNote}</h3>
                <Link to={`/notes/${savedResult._id}/edit`}><button>Edit</button></Link>
                <button onClick={() => { onDelete(savedResult)  }}>Delete note</button>
            </div>
        )
    }
}

export default withRouter(SavedResultDetail)
