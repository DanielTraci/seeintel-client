import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Typography, TextField, Input, Button, makeStyles, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(50)

    },
    textField: {
        padding: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',

    },
    search: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        

    },
    pageTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
        textAlign: "center",
        padding: "100px 120px 0 120px",
    },
    input: {
        color: "#FFFFFF",
        borderColor: '#FFFFFF'
    },
}));

class SearchBar extends Component {

    handleSearch = (e) => {
        e.preventDefault()
        let domain = e.target.website.value
        this.props.history.push(`/search/${domain}`)
    }

    /* handleDomainSearch = (e) => {
        e.preventDefault()
        let domain = e.target.website.value
        this.props.history.push(`/domainsearch/${domain}`)
    } */

    render() {
        const classes = {}
        return (
            <div className={classes.root}>
                <div className='center'>
                    <Box className={classes.pageTitle}>
                        <Typography className="searchBarText" variant="h4">Browse domain threat intel</Typography>
                    </Box>
                </div>
                <br/>
                <div className='center'>
                    <Box className={classes.search}>
                        <form onSubmit={this.handleSearch}>
                            <div>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="text"
                                    name="website"                                    
                                    className='formBackground'
                                    
                                />
                                </Grid>
                            </div>
                                <br/>
                            <div className='center'>
                                <Button variant="contained" type="submit" color="black">Search</Button>
                            </div>
                        </form>
                    </Box>
                </div>
               {/*  
                <div className='center'>
                    <Box className={classes.search}>
                        <form onSubmit={this.handleDomainSearch}>
                            <div>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    type="text"
                                    name="website"
                                    label="experiment"
                                    className='formBackground'
                                />
                                </Grid>
                            </div>
                                <br/>
                            <div className='center'>
                                <Button variant="contained" type="submit" color="black">Search</Button>
                            </div>
                        </form>
                    </Box>
                </div>
 */}
            </div>
        )
    }
}

export default withRouter(SearchBar)
