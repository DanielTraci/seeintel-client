import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {Typography, makeStyles, Box} from '@material-ui/core'

const styles = theme => ({
    hero: {
      backgroundImage: `url('./covers/01-red-min.png')`,
      height: "700px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4rem",
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    
  });

class UserDashboard extends Component {
    
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
        const {classes} = this.props
        const {notes, domains} = this.state

        return (
            <div>
            <Box className={classes.hero}>               
            <Box>
            <Typography variant="h5">Welcome to your dashboard</Typography>
            <SearchBar/>                
            <Typography variant="h5">Your saved search results:</Typography>              
                <Typography variant="body1">
                    {
                        domains.map((domain) => {
                            return (
                                <div key={domain._id}>
                                    <li><Link to={`/domains/${domain._id}`}>{domain.myDomain}</Link></li>
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

export default withStyles(styles)(UserDashboard)