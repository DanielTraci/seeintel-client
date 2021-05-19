import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'
import {Typography, makeStyles, Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
      height: "700px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
    }
  
  }));

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
            <Box className={classes.hero}>               
            <Box>
            <Typography variant="h5">Welcome to your dashboard</Typography>
            <SearchBar/>                
            <Typography variant="h5">Your saved search results</Typography>              
                <Typography variant="body1">
                    {
                        domains.map((domain) => {
                            return (
                                <div key={domain._id}>
                                    <Link to={`/domains/${domain._id}`}>{domain.myDomain}</Link>
                                </div>
                            )
                        })
                    }
                </Typography>
            </Box>
            </Box>
            </div>
        )
    }
}
