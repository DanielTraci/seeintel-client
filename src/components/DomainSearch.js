import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import SearchBar from './SearchBar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

class DomainSearch extends Component {
    state = {
        domainDetails: null
    }

    fetchData = () => {
        let websiteDomain = this.props.match.params.result
        axios.get(`${config.API_URL}/api/domainsearch/${websiteDomain}`, { withCredentials: true })
            .then((response) => {
                this.setState({
                    domainDetails: response.data.data
                })
            })
            .catch((err) => { });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        const { domainDetails } = this.state
        const { onSaveDomain } = this.props
        const classes = {}

        if (!domainDetails) {
            return <Typography variant="h3">LOADING...</Typography>;
        }

        let categories = Object.keys(domainDetails.attributes.categories)
        let lastAnalysisResults = Object.keys(domainDetails.attributes.last_analysis_results)

        return (
            <div>
            <div className="padding">
                <br />
                <SearchBar />
                <br />
                <Button variant="contained" onClick={() => { onSaveDomain(domainDetails) }}>Save to my dashboard</Button>
                <br />
                <Typography>
                    <p><b>ID:</b> {domainDetails.id}</p>
                    <p><b>Type:</b> {domainDetails.type}</p>
                    <p><b>Registrar:</b> {domainDetails.attributes.registrar}</p>
                    <p><b>Categories</b>. Cyber security companies' APIs list {domainDetails.id} in the following categories:</p>
                    {
                        categories.map((category) => {
                            return (
                                <div>
                                    <ul>
                                        <li><i>{domainDetails.attributes.categories[category]}</i></li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <p><b>JARM:</b> {domainDetails.attributes.jarm}</p>
                    <p><b>Creation date:</b> {domainDetails.attributes.creation_date}</p>
                    <p><b>Last dns records date:</b> {domainDetails.attributes.last_dns_records_date}</p>
                    <p><b>Last https_certificate date:</b> {domainDetails.attributes.last_https_certificate_date}</p>
                    <p><b>Last modification date:</b> {domainDetails.attributes.last_modification_date}</p>
                    <p><b>Last update date:</b> {domainDetails.attributes.last_update_date}</p>
                </Typography>

                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><b>Whois</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p><b>Whois date:</b> {domainDetails.attributes.whois_date}</p>
                                {domainDetails.attributes.whois}
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
                                                <p>Category: <i>{domainDetails.attributes.last_analysis_results[singleResult].category}</i></p>
                                                <p>Result: <i>{domainDetails.attributes.last_analysis_results[singleResult].result}</i></p>
                                            </div>
                                        )
                                    })
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(DomainSearch)
