import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Typography, TextField, Input, Button, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

class SearchBar extends Component {

    handleSearch = (e) => {
        e.preventDefault()
        let domain = e.target.website.value
        this.props.history.push(`/search/${domain}`)
    }

    render() {
        const classes = {}
        return (
            <div>

                <Box><Typography variant="h4">Browse cyber threat intelligence</Typography>
                    <form onSubmit={this.handleSearch}>
                        <div>
                            <Input type="text" name="website" placeholder="Enter a domain name" inputProps={{ 'aria-label': 'description' }} />
                        </div>

                        <div>
                            <Button variant="contained" type="submit" color="black">Search</Button>
                        </div>
                    </form>
                </Box>

            </div>
        )
    }
}

export default withRouter(SearchBar)
