import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class UserDashboard extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to your dashboard</h2>
                <SearchBar/>
            </div>
        )
    }
}
