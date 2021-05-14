import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import {Link, withRouter} from "react-router-dom"
import axios from 'axios'
import config from '../config'



class SearchBar extends Component {

    handleSearch = (e) => {
        e.preventDefault()
        let domain = e.target.website.value
        this.props.history.push(`/search/${domain}`)
    }

    render() {

        return (
            <>
                <h2>Browse cyber threat intelligence</h2>
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input type="text" name="website" placeholder="Enter a domain name" />
                    </div>
                    <div>
                        <Button type="submit" color="inherit">Search</Button>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(SearchBar)
