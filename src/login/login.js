import React from 'react'

function Login() {
    return (
        <div>
        <form>
        <div>
            <div id="container">
                <label for= "username">Username</label>
                <input type="text" placeholder='Enter Username'/>

                <label type="password">Password</label>
                <input for="password" placeholder='Enter Password'/>

                <button type="submit">Login</button>
            </div>
        </div>
        </form>
        </div>
    )
}

export default Login;
