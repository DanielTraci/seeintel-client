import React from 'react'
import {Typography, Button, makeStyles} from '@material-ui/core'
import {withRouter} from 'react-router-dom'

function SignUp(props){
    const { onSignUp } = props
    return (
        
        <form onSubmit={onSignUp}>
            <Typography variant="h3">Sign up to SEEINTELL</Typography>
            <h2></h2>
                <div>
                    <label>Username</label>
                    <input type="text" name='username'/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name='email'/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" name='password'/>
                </div>
                <button type="submit">Sing up</button>
        </form>
    )
}

export default withRouter(SignUp)



/* 
<TextField
required
id="filled-required"
label="Username required"
variant="filled"
/>
</div>
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