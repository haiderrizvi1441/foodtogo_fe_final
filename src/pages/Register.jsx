import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    var txt; // to give message after adding
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(role);
        const user = {username,email,password,role}
        console.log(user);
        fetch("http://localhost:9054/api/auth/signup", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
        }).then(()=>{
          txt="User is successfully registered"
        })
        window.alert(`${username} is successfully registered`)
        navigate("/")
    }
  return (
    <div className='auth-form-container'>
    <h2 className='form-title'>Register</h2>
    <form onSubmit={handleSubmit} className='register-form' >

        <label htmlFor="username" > Full Name / Username</label>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type='name' placeholder='Your Full Name' id='name' name='username' />

        <label htmlFor="email" > Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Your Email' id='email' name='email' />

        <label htmlFor="password" > Password</label>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/>

        <label htmlFor="role" > Role</label>
        <input value={role} onChange={(e)=> setRole(e.target.value)} type='text' placeholder='Roles : user,mod,admin' id='role' name='role'/>
        <button className='form-btn' onClick={handleSubmit} >Sign Up</button>
        <p>{txt}</p>
    </form>

    <button className='link-btn' onClick={()=> props.onFormSwitch('login')} > Existing User ? Login Here</button>
    </div>
  )
}

export default Register