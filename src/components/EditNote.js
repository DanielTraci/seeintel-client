import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'


export default class EditNote extends Component {

    state = {
        savedResult: {},
        //fetchNote: true
    }

    componentDidMount () {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                    this.setState({ 
                        savedResult: response.data, 
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
        const { savedResult } = this.state
        let cloneSavedResult = JSON.parse(JSON.stringify(savedResult))

        cloneSavedResult.name = updatedNote

        this.setState({
            savedResult: cloneSavedResult
        })
    }



    render() {
        const {savedResult} = this.state
        const {onEdit} = this.props
        return (
            <div>
                <h1>.</h1>
                <h1>.</h1>
                <h1>Edit note</h1>
                <form>
                    <input onChange={this.handleEditNote} type="text" value={savedResult.myNote} />
                    <button onClick={() => {onEdit(savedResult)}}>Save note</button>
                </form>
            </div>
        )
    }
}
