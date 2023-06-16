import React from 'react'
import Appbar from '../components/Appbar'
import Searchbar from '../components/Searchbar'
import Food from '../components/Food';
import Category from '../components/Category'
import {BrowserRouter, NavLink, Link} from 'react-router-dom';
import MyFoods from '../components/MyFoods';


function Home() {
  return (
    <div>  
    <Food/>
    <MyFoods/>
    </div>
  )
}

export default Home