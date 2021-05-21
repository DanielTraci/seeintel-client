import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography, makeStyles, Box } from '@material-ui/core'

const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    pageTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
        textAlign: "center",
        padding: "100px 120px 0 120px",
    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "100px",

    },
});

class UserDashboard extends Component {

    state = {
        notes: [],
        domains: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/api/domains`, { withCredentials: true })
            .then((response) => {
                this.setState({ domains: response.data })
            }).catch((err) => {
            });
    }

    render() {
        const { classes } = this.props
        const { notes, domains } = this.state

        return (
            <div>
            
                <Box>
                <div className="padding">
                    <Box >
                        <Box className={classes.pageTitle}>
                            <Typography variant="h3">Welcome to your dashboard</Typography>
                        </Box>
                        <Box className={classes.search}>
                            <SearchBar />
                        </Box>
                    </Box>
                    <Box>
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
                    </div>
                </Box>
            </div>
            
        )
    }
}

export default withStyles(styles)(UserDashboard)



