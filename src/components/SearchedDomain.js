import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config'
import SearchBar from './SearchBar'


class SearchedDomain extends Component {
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

        let categories = Object.keys(domainDetails.attributes.categories)
        let lastAnalysisResults = Object.keys(domainDetails.attributes.last_analysis_results)
        
        {/*
        let lastAnalysisStats = Object.keys(domainDetails.attributes.last_analysis_stats)
        let lastHttpsCert = Object.keys(domainDetails.attributes.last_https_certificate)
        */}

        return (
            <div>
                <h1>.</h1>
                <h1>.</h1>
                <SearchBar/>
                <button onClick={() => {onSaveDomain(domainDetails)}}>Save to my dashboard</button>
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
                <p><b>Whois:</b> {domainDetails.attributes.whois}</p>
                <p><b>Whois date:</b> {domainDetails.attributes.whois_date}</p>
                <p><b>Last analysis results provided by cyber security companies:</b></p>
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
            
                {/*                 
                {
                    lastAnalysisStats.map((singleStat) => {
                        return (
                            <div>
                                <p>{domainDetails.attributes.last_analysis_stats[singleStat]}</p>
                            </div>
                        )
                    })
                } 
                */}
                
               
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
                

                //////////////*/}
            </div>
        )
    }
}

export default withRouter(SearchedDomain)
