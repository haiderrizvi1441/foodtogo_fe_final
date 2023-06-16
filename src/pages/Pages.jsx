// We will do the routing here
// <Route :xyz will be same value as params.xyz in respective component


import React from 'react'
import Home from './Home'
import Searched from './Searched';
import {Route, Routes} from "react-router-dom";
import Food from '../components/Food';
import Recipe from './Recipe';
import Cuisine from './Cuisine';
import Login from './Login';
import Admincenter from './Admincenter';
import Cart from './Cart';
import FormActive from './FormActive';
import Cartnew from './Cartnew';
import Eachmyfood from './Eachmyfood';
function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/cuisine/:type' element={<Cuisine/>} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe/>} />
        <Route path="login/" element={<Login/>}/>
        <Route path="formactive/" element={<FormActive/>} />
        <Route path="Cart/" element={<Cartnew/>} />
        <Route path="admincenter/" element={<Admincenter/>}/> 
        <Route path='foods/' element={<Eachmyfood/>}/>
        
    </Routes>
  )
}

export default Pages