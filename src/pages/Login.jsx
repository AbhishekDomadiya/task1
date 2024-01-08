import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {findUserInLocalStorage} from '../utils';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        
        if( username === 'admin' && password === 123) {
            localStorage.setItem('activeUser', 'rolesadmin')
            localStorage.setItem('rolesadmin', JSON.stringify({"username":"admin","password":"123","role":{"page1":true,"page2":true,"page3":true,"page4":true}}))
            navigate("/");
        } else {
            const matchedUser = findUserInLocalStorage(username, password);
            if (matchedUser) {
                localStorage.setItem('activeUser', matchedUser.key)
                navigate("/");
            } else {
                alert("Wrong User Details")
            }   
        }
    }
    return (
        <form className="login-form" action="#" method="post">
            <h2>Login</h2>
            <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e)=> setUserName(e.target.value)} 
                required />
            <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
                required />
            <input type="submit" value="Login" onClick={handleClick}/>
        </form>
    )
}

export default Login