import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import config from '../config'

class SingleDomain extends Component {
    state = {
        domainDetails: null
    }

    fetchData = () => {
        console.log('hello')
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

        if (!domainDetails) {
            return <h2>Loading...</h2>;
        }
        console.log(domainDetails)
        
        {/*
        let analysisResults = Object.keys(domainDetails.attributes.last_analysis_results)
        
        let analysisStats = Object.keys(domainDetails.attributes.last_analysis_stats)
        let lastHttpsCert = Object.keys(domainDetails.attributes.last_https_certificate)
        */}
        return (
            <div>
                <h1>.</h1>
                <h1>.</h1>
                <button type="submit">Save to my dashboard</button>
                <p><b>ID:</b> {domainDetails.id}</p>
                <p><b>Type:</b> {domainDetails.type}</p>
                <p><b>Registrar:</b> {domainDetails.attributes.registrar}</p>
                <p><b>JARM:</b> {domainDetails.attributes.jarm}</p>
                <p><b>Creation_date:</b> {domainDetails.attributes.creation_date}</p>
                <p><b>Last_dns_records_date:</b> {domainDetails.attributes.last_dns_records_date}</p>
                <p><b>Last_https_certificate_date:</b> {domainDetails.attributes.last_https_certificate_date}</p>
                <p><b>Last_modification_date:</b> {domainDetails.attributes.last_modification_date}</p>
                <p><b>Last_update_date:</b> {domainDetails.attributes.last_update_date}</p>
                <p><b>Whois:</b> {domainDetails.attributes.whois}</p>
                <p><b>Whois_date:</b> {domainDetails.attributes.whois_date}</p>
                
                {/*//////////////
                {
                    analysisStats.map((singleStat) => {
                        return (
                            <div>
                                <p><b>{singleStat}</b></p>
                            </div>
                        )
                    })
                }

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
                    analysisResults.map((singleResult) => {
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
