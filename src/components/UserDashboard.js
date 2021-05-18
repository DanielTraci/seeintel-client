import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'
import SearchedDomain from './SearchedDomain'


export default class UserDashboard extends Component {
    
    state = {
        notes: [],
        domains: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/api/domains`, {withCredentials: true})
        .then((response) => {
          this.setState({domains: response.data})
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
                <h2>Your saved search results</h2>                
                {
                    domains.map((domain) => {
                        return (
                            <div key={domain._id}>
                                <Link to={`/domains/${domain._id}`}>{domain.myDomain}</Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
