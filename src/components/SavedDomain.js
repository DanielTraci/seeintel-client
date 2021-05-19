import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import AddNote from './AddNote';
import SearchBar from './SearchBar'
import {Link, withRouter} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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

    componentDidMount () {
       this.fetchDetails()

    }

    componentDidUpdate (prevProps) {
        if(prevProps.notes !== this.props.notes){
            this.fetchDetails()
        }
    }




    render() {
        const { savedDomain, notes, savedNote, fetchNote } = this.state
        const { myNote } = savedDomain
        const { onAdd, onDeleteNote } = this.props
        const { onDeleteDomain } = this.props
        const classes = {}

        if (!savedDomain.data) {
            return <h2>Loading...</h2>;
        }
        
        let parsedData 
        if(savedDomain.data){
            parsedData = JSON.parse(savedDomain.data)
        }
        
        let categories = Object.keys(parsedData.attributes.categories)
        let lastAnalysisResults = Object.keys(parsedData.attributes.last_analysis_results)
        return (
            <div>
                <SearchBar/>  
                <h3>SEEINTEL for {parsedData.id}</h3> 
                <button onClick={() => {onDeleteDomain(savedDomain)}}>Delete this search result</button>
                <h3>Your notes:</h3>
                {
                    myNote.map((note) => {
                        return (
                        <div key={note._id}>
                            {note.myNote}
                            <div>
                            <Link to={`/notes/${note._id}`}><button>See more</button></Link>
                            <button onClick={() => {onDeleteNote(note)}}>Delete note</button>
                            </div>
                        </div>
                        )
                    })
                }
                <AddNote onAdd={onAdd} domainId={savedDomain._id}/>
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
                <p><b>Whois_date:</b> {parsedData.attributes.whois_date}</p>
                <div className={classes.root}>
                <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Whois</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
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
                    <Typography className={classes.heading}>Last analysis results provided by cyber security companies</Typography>
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
            </div>
        )
    }
}


export default withRouter(SavedDomain)



/* 
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

*/


/* 
            <div>
                <h3>Your Intel</h3>
                <SearchBar/>  
                <h3>SEEINTEL for {parsedData.id}</h3> 
                <button onClick={() => {onDeleteDomain(savedDomain)}}>Delete this search result</button>
                <h3>Your notes:</h3>
                {
                    myNote.map((note) => {
                        return (
                        <div key={note._id}>
                            <Link to={`/notes/${note._id}`}>{note.myNote}</Link>
                            <div>
                            <Link to={`/notes/${note._id}/edit`}><button>Edit</button></Link>
                            <button onClick={() => {onDeleteNote(note)}}>Delete note</button>
                            </div>
                        </div>
                        )
                    })
                }
                <AddNote onAdd={onAdd}/>
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
                <p><b>Whois_date:</b> {parsedData.attributes.whois_date}</p>
                <p><b>Whois:</b> {parsedData.attributes.whois}</p>
                <p><b>Last analysis results</b> provided by cyber security companies:</p>
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
            </div>
*/