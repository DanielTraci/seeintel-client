import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import AddNote from './AddNote'
import SavedResultDetail from './SavedResultDetail'


class SingleDomain extends Component {
    state = {
        domainDetails: null
    }

    fetchData = () => {
        let websiteDomain = this.props.match.params.result
        axios.get(`https://www.virustotal.com/api/v3/domains/${websiteDomain}`, {headers: {"x-apikey" : config.API_KEY }})
        .then((response) => {
            this.setState({
                domainDetails: response.data.data
            })
        })
        .catch((err) => {});
    }

    componentDidMount() {
        this.fetchData() 
    }

    render() {
        const {domainDetails} = this.state
        /* const { onAdd } = this.props */
        const { onSaveDomain } = this.props

        if (!domainDetails) {
            return <h2>Loading...</h2>;
        }


        let lastAnalysisStats = Object.keys(domainDetails.attributes.last_analysis_stats)
        let categories = Object.keys(domainDetails.attributes.categories)
        
        
        {/*
        let lastAnalysisResults = Object.keys(domainDetails.attributes.last_analysis_results)
        let lastHttpsCert = Object.keys(domainDetails.attributes.last_https_certificate)
        */}

        return (
            <div>
                <h1>.</h1>
                <h1>.</h1>
                <button onClick={() => {onSaveDomain(domainDetails)}}>Save to my dashboard</button>
                <p><b>ID:</b> {domainDetails.id}</p>
                <p><b>Type:</b> {domainDetails.type}</p>
                <p><b>Registrar:</b> {domainDetails.attributes.registrar}</p>
                <p><b>Categories</b>. Cybersecurity companies' APIs list {domainDetails.id} in the following categories:</p>
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
                <p><b>Creation_date:</b> {domainDetails.attributes.creation_date}</p>
                <p><b>Last_dns_records_date:</b> {domainDetails.attributes.last_dns_records_date}</p>
                <p><b>Last_https_certificate_date:</b> {domainDetails.attributes.last_https_certificate_date}</p>
                <p><b>Last_modification_date:</b> {domainDetails.attributes.last_modification_date}</p>
                <p><b>Last_update_date:</b> {domainDetails.attributes.last_update_date}</p>
                <p><b>Whois:</b> {domainDetails.attributes.whois}</p>
                <p><b>Whois_date:</b> {domainDetails.attributes.whois_date}</p>
            
{/*                 {
                    lastAnalysisStats.map((singleStat) => {
                        return (
                            <div>
                                <p>{domainDetails.attributes.last_analysis_stats[singleStat]}</p>
                            </div>
                        )
                    })
                } */}
                
               
                {/*//////////////

                {
                    lastHttpsCert.map((certDetails) => {
                        return (
                            <div>
                                <p>{certDetails}</p>
                                
                            </div>
                        )
                    })
                }
                
                <p><b>Last_analysis_results:</b></p>
                {
                    lastAnalysisResults.map((singleResult) => {
                        return (
                            <div>
                                <p><b>{singleResult}</b></p>
                                <p>Category: {domainDetails.attributes.last_analysis_results[singleResult].category}</p>
                                <p>Result: {domainDetails.attributes.last_analysis_results[singleResult].result}</p>
                                <p>Method: {domainDetails.attributes.last_analysis_results[singleResult].method}</p>
                            </div>
                    )
                    })
                }
                //////////////*/}
            </div>
        )
    }
}

export default withRouter(SingleDomain)
