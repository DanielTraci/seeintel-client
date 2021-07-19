import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'
import { withRouter, Link } from "react-router-dom";
import { Typography, Button, makeStyles, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    hero: {
        backgroundImage: `url('./covers/08_00000-min.png')`,
        height: "200px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
    },
    pageTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 120px 0 120px",
    },

});

class SavedNote extends Component {

    state = {
        savedNote: [],
        fetchNote: true
    }

    componentDidMount() {
        let noteId = this.props.match.params.noteId
        axios.get(`${config.API_URL}/api/notes/${noteId}`, { withCredentials: true })
            .then((response) => {
                this.setState({
                    savedNote: response.data,
                    fetchNote: false
                })
            })
            .catch(() => {
                console.log('Detail fetch failed')
            })
    }

    render() {
        const { savedNote, fetchNote } = this.state
        const { onDeleteNote } = this.props
        const { classes } = this.props

        if (fetchNote) {
            return <p>Loding ...</p>
        }

        return (
            <div>
                <Box>
                    <Box className={classes.hero}>
                        <Typography className={classes.pageTitle} variant="h4">Your note</Typography>
                    </Box>
                    <Typography variant="h6" align="center">{savedNote.myNote}</Typography>
                    <Box display="flex" justifyContent="center">
                        <div className={classes.root}>
                            <Link to={`/notes/${savedNote._id}/edit`}><Button variant="contained">Edit</Button></Link>
                            <Button variant="contained" onClick={() => { onDeleteNote(savedNote) }}>Delete note</Button>
                        </div>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default withStyles(styles)(SavedNote)
