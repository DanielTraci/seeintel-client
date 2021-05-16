import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter } from "react-router-dom";

class SavedResultDetail extends Component {

    state = {
        savedResult: {}
    }

    componentDidMount () {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                    this.setState({ savedResult: response.data })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }
    

    render() {
        const {savedResult} = this.state

        return (
            <div>
                <h2>empty space</h2>
                <h2>empty space</h2>
                <h2>Saved result details</h2>
                {/*<h3>{savedResult._id}</h3>*/}
                <button>Edit</button>
                <button>Delete note</button>
            </div>
        )
    }
}

export default withRouter(SavedResultDetail)