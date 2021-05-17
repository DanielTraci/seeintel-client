import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";
import AddNote from './AddNote';

export default class SavedDomain extends Component {

    state = {
        savedDomain: [],
        fetchDomain: true
    }
    

    componentDidMount () {
        let domainId = this.props.match.params.domainId
        axios.get(`${config.API_URL}/api/domains/${domainId}`, { withCredentials: true })
            .then((response) => {
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

    render() {
        const { savedDomain } = this.state
        const { onAdd } = this.props
        if (!savedDomain.data) {
            return <h2>Loading...</h2>;
        }
        let parsedData 
        console.log(savedDomain.myNote)
        if(savedDomain.data){
            parsedData = JSON.parse(savedDomain.data)
            console.log(parsedData.attributes.last_dns_records)
        }

        let categories = Object.keys(parsedData.attributes.categories)
        return (
            <div>
                <h3>Your Intel</h3>  
                <h3>SEEINTEL for {parsedData.id}</h3> 
                <AddNote onAdd={onAdd}/>
                <p><b>ID:</b> {parsedData.id}</p>
                <p><b>Type:</b> {parsedData.type}</p>
                <p><b>Registrar:</b> {parsedData.attributes.registrar}</p>
                <p><b>Categories</b>. Cybersecurity companies' APIs list {parsedData.id} in the following categories:</p>
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
                <p><b>Whois_date:</b> {parsedData.attributes.whois_date}</p>
                <p><b>Whois:</b> {parsedData.attributes.whois}</p>

                
{/*                                   
                
                <p><b>Whois_date:</b> {savedDomain.whois_date}</p> */}
            </div>
        )
    }
}