import React from 'react'

function SignUp(props){
    const { onSignUp } = props
    return (
        
        <form onSubmit={onSignUp}>
            <h2>Sign up to SEEINTELL</h2>
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

export default SignUp
