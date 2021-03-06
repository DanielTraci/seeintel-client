import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import AddNote from './AddNote';
import SearchBar from './SearchBar'
import { Link, withRouter } from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, makeStyles, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        marginTop: theme.spacing(10)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    hero: {
        backgroundImage: `url('./covers/08_00000-min.png')`,
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
    },
    paper: {
        backgroundColor: "#FFFFFF"
    },


}));


class SavedDomain extends Component {


    state = {
        savedDomain: [],
        fetchDomain: true,
        notes: [],
        savedNote: [],
        fetchNote: true
    }

    fetchDetails = () => {
        let domainId = this.props.match.params.domainId
        axios.get(`${config.API_URL}/api/domains/${domainId}`, { withCredentials: true })
            .then((response) => {
                console.log(response.data.myNote)
                this.setState({
                    savedDomain: response.data,
                    fetchDomain: false
                }, () => {
                    console.log(this.state.savedDomain)
                })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }

    componentDidMount() {
        this.fetchDetails()

    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes.length !== this.props.notes.length) {
            this.fetchDetails()
        }
    }

    render() {
        const { savedDomain, notes, savedNote, fetchNote } = this.state
        const { myNote = [] } = savedDomain
        const { onAdd, onDeleteNote } = this.props
        const { onDeleteDomain } = this.props
        const classes = {}


        if (!savedDomain.data) {
            return <Typography variant="h3">LOADING...</Typography>
        }

        let parsedData
        if (savedDomain.data) {
            parsedData = JSON.parse(savedDomain.data)
        }

        let categories = Object.keys(parsedData.attributes.categories)
        let lastAnalysisResults = Object.keys(parsedData.attributes.last_analysis_results)
        return (
            <div >
                <div className="padding">
                    <div className={classes.hero}>
                        <SearchBar />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h4" align="center">SEEINTEL for {parsedData.id}</Typography>
                    <br />
                    <br />
                    <Button variant="contained" onClick={() => { onDeleteDomain(savedDomain) }}>Delete from dashboard</Button>
                    <br />
                    <Grid container spacing={6} >
                        <Grid item xs={8}>

                            <Typography variant="body1">
                                <p><b>ID:</b> {parsedData.id}</p>
                                <p><b>Type:</b> {parsedData.type}</p>
                                <p><b>Registrar:</b> {parsedData.attributes.registrar}</p>
                                <p><b>Categories</b>. Cyber security companies' APIs list {parsedData.id} in the following categories:</p>
                                {
                                    categories.map((category) => {
                                        return (
                                            <div>
                                                <ul>
                                                    <li><i>{parsedData.attributes.categories[category]}</i></li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                                <p><b>JARM:</b> {parsedData.attributes.jarm}</p>
                                <p><b>Creation_date:</b> {parsedData.attributes.creation_date}</p>
                                <p><b>Last_modification_date:</b> {parsedData.attributes.last_modification_date}</p>
                                <p><b>Last_https_certificate_date:</b> {parsedData.attributes.last_https_certificate_date}</p>
                                <p><b>Last_update_date:</b> {parsedData.attributes.last_update_date}</p>

                            </Typography>
                            <div className={classes.root}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}><b>Whois</b> details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <p><b>Whois_date:</b> {parsedData.attributes.whois_date}</p>
                                            {parsedData.attributes.whois}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className={classes.heading}><b>Last analysis results</b> provided by cyber security companies</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {
                                                lastAnalysisResults.map((singleResult) => {
                                                    return (
                                                        <div>
                                                            <li><b>{singleResult}</b></li>
                                                            <p>Category: <i>{parsedData.attributes.last_analysis_results[singleResult].category}</i></p>
                                                            <p>Result: <i>{parsedData.attributes.last_analysis_results[singleResult].result}</i></p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        </Grid>


                        <Grid item xs={4} >

                            <AddNote onAdd={onAdd} domainId={savedDomain._id} />
                            <br />
                            <br />
                            <br />
                            <Typography variant="h6">Notes shall be displayed below</Typography>

                            <Typography variant="body1">
                                {
                                    myNote.map((note) => {
                                        return (
                                            <List key={note._id}>
                                                <ListItem >
                                                    <ListItemIcon>
                                                        <CreateIcon color="error" />
                                                    </ListItemIcon>
                                                    {note.myNote}

                                                </ListItem>
                                                <div>
                                                    <Link to={`/notes/${note._id}`}><Button className='margin' variant="contained">See more</Button></Link>
                                                    <Button className='margin' variant="contained" onClick={() => { onDeleteNote(note) }}>Delete note</Button>
                                                </div>
                                            </List>


                                        )
                                    })
                                }
                            </Typography>

                        </Grid>

                    </Grid>


                </div>
            </div>
        )
    }
}


export default withRouter(SavedDomain)
