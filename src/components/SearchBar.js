import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import {withRouter} from "react-router-dom"

import {Typography, makeStyles, Box} from '@material-ui/core'


class SearchBar extends Component {

    handleSearch = (e) => {
        e.preventDefault()
        let domain = e.target.website.value
        this.props.history.push(`/search/${domain}`)
    }

    render() {
        const classes = {}
        return (
            <>
                
                <Box><Typography variant="h4">Browse cyber threat intelligence</Typography>
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input type="text" name="website" placeholder="Enter a domain name" />
                    </div>
                    <div>
                        <Button type="submit" color="inherit">Search</Button>
                    </div>
                    </form>
                </Box>
                
            </>
        )
    }
}

export default withRouter(SearchBar)
