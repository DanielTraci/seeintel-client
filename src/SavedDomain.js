/* import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";

export default class SavedDomain extends Component {

    state = {
        savedDomain: [],
        fetchDomain: true
    }
    
    componentDidMount () {
        let domainId = this.props.match.params.domainId
        axios.get(`${config.API_URL}/api/notes/${domainId}`, { withCredentials: true })
            .then((response) => {
                    this.setState({ 
                        savedDomain: response.data, 
                        fetchDomain: false
                    })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }

    render() {
        const { savedDomain } = this.props
        return (
            <div>
                <h3>{savedDomain.domain}</h3>
            </div>
        )
    }
}
 */