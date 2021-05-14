import React from 'react'

function SignIn(props){
    const { onSignIn, error } = props
    return (
        <form onSubmit={onSignIn}>
            <h2>Sign in to SEEINTELL</h2>
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

export default SignIn
