import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Typography, TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    color: "#FFFFFF",
    borderColor: '#FFFFFF'
  },
}));

class AddNote extends Component {
  render() {
    const { onAdd, domainId } = this.props
    const classes = {}
    return (
      <div>
        <Typography variant="h5">Add notes to keep track of things</Typography>
        <form onSubmit={(event) => { onAdd(event, domainId) }} className={classes.root} noValidate autoComplete="off">
          <TextField className='formBackground' id="outlined-multiline-static" multiline
            rows={2} variant="outlined" type="text" name="myNote" fullWidth margin="normal"
            InputProps={{ className: classes.input }} />
          <br />
          <div>
            <br />
            <Button type="submit" variant="contained">Save</Button>
          </div>

        </form>
      </div>
    )
  }
}

export default withRouter(AddNote)