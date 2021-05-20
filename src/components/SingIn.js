import React from 'react'
import {Typography, Button, makeStyles} from '@material-ui/core'
import {withRouter} from 'react-router-dom'

function SignIn(props){
    const { onSignIn, error } = props
    
    return (
        <form onSubmit={onSignIn}>
            <Typography variant="h3">Sign up to SEEINTELL</Typography>
            <div>
                <label for="email">Email</label>
                <input type="email" name='email'/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name='password'/>
            </div>
            <button type="submit">Sing in</button>
        </form>
    )
}

export default withRouter(SignIn)



/* 

<div>
      <TextField
required
id="filled-required"
label="Email required"
variant="filled"

/>
</div>
<div>
      <TextField
required
id="filled-required"
label="Password required"
variant="filled"
/>
</div>
      
      <Button type="submit" variant="contained">Sing up</Button> */