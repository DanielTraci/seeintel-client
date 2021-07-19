import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import config from '../config'
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography, makeStyles, Box } from '@material-ui/core'
import BugReportIcon from '@material-ui/icons/BugReport';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import {
    Link
} from "react-router-dom";
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
        paddingBottom: "75px",

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

                        <Typography gutterBottom variant="h4" align="center">Saved search results shall be displayed below</Typography>


                        <Grid container xs={12} direction="column"
                            justifyContent="flex-start"
                            alignItems="center">
                            <Typography variant="body1">
                                {
                                    domains.map((domain) => {
                                        return (
                                            <List key={domain._id}>
                                                <ListItem >
                                                    <ListItemIcon>
                                                        <BugReportIcon color="error" />
                                                    </ListItemIcon>
                                                    <Link to={`/domains/${domain._id}`}>{domain.myDomain}</Link>
                                                </ListItem>
                                            </List>

                                        )
                                    })
                                }
                            </Typography>

                        </Grid>

                    </div>
                </Box>
            </div>

        )
    }
}

export default withStyles(styles)(UserDashboard)



