import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function Login(props) {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username :: ", username);
        console.log("Pass :: ", pass);
        const olduser = {username,pass}
        fetch("http://localhost:9054/api/auth/signin", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(olduser)
        }).then(()=>{
          window.alert("User logged in successfully");
        })
        window.alert(`${username} is successfully logged in`)
        navigate('/');
    
    }
  return (
    <div className='auth-form-container' >
    <h2 className='form-title'>Login</h2>
    <form onSubmit={handleSubmit} className='login-form' >
        <label htmlFor="email" > Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='Username' id='username' name='username' />
        <label htmlFor="password" > Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/>
        <button className='form-btn' onClick={handleSubmit}>Log In</button>
    </form>

    <button className='link-btn' onClick={() => props.onFormSwitch('register')} >New User, Register Here</button>
    </div>
  )
}

export default Login