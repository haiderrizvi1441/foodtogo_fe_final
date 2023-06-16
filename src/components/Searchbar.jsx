import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {FcReading} from 'react-icons/fc'
function Searchbar() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    }
  return (
    <div style={{display: "flex"} }>
 
    <FormStyle onSubmit={submitHandler}>
        
        <div>

            <FaSearch/>
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle></div>
  )
}

const FormStyle = styled.form`
margin :2rem 33rem;
div{
    position:relative;
    width:100%;
}
input{
    border:none;
    background: linear-gradient(35deg, #7FFFD4, #FF80AA);
    font-size: 1rem;
    color: white;
    padding : 1rem 3rem;
    border: 2px solid white;
    border-radius : 1rem;
    outline: none;
    width:150%;
    height:8px;

}
svg{
    position : absolute;
    top:50%;
    left:0%;
    transform:translate(100%, -50%);
    color: white;
}
`
export default Searchbar