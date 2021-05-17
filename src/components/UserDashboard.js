import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'
import SingleDomain from './SingleDomain'


export default class UserDashboard extends Component {
    
    state = {
        notes: [],
        domains: []
    }

/*     componentDidMount() {
        axios.get(`${config.API_URL}/api/notes`)
        .then((response) => {
          this.setState({notes: response.data})
        }).catch((err) => { 
        });   
    } */

    componentDidMount() {
        axios.get(`${config.API_URL}/api/domains`)
        .then((response) => {
          this.setState({domains: response.data})
        }).catch((err) => { 
        });  

        axios.get(`${config.API_URL}/api/notes`)
        .then((response) => {
          this.setState({notes: response.data})
        }).catch((err) => { 
        });
    }

    render() {
        const classes = {}
        const {notes, domains} = this.state
        return (
            <div>
                
                <h2>Welcome to your dashboard</h2>
                <SearchBar/>
                
                <h2>Your searched domains</h2>
                
                {
                    domains.map((domain) => {
                        return (
                            <div key={domain._id}>
                                <Link to={`/domains/${domain._id}`}>{domain.myDomain}</Link>
                            </div>
                        )
                    })
                }
                
                <h2>Notes (will be deleted from here)</h2>
                {
                    notes.map((note) => {
                        return (
                        <div key={note._id}>
                            <Link to={`/notes/${note._id}`}>{note.myNote}</Link>
                        </div>
                        )
                    })
                }

            </div>
        )
    }
}
