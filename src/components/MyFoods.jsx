import React from 'react';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";
import { Button } from '@mui/material';


function MyFoods() {

    useEffect(()=>{
        getMyfoods();
    },[]);
    // Enable when corss origin allows
    
    const [myfoods, setMyfoods] = useState([]);

    const getMyfoods = async() =>{
        const  api = await fetch("http://localhost:9054/api/foods");
        const data = await api.json();
        setMyfoods(data);
    }

    function createMyfoods(food){
        return(
            <SplideSlide key={food.id}>
                <Link to={"foods/" + food.id}>
                    <Card>
                        <h2>{food.food_name}</h2>
                        <p>{food.food_price}</p>
                        <button>Order this</button>
                    </Card>
                    <Gradient/>
                    

                </Link>
            </SplideSlide>
        )
    }
  return (
    <Wrapper>
        <h2>MyFoods</h2>
        <Splide options={{perPage:4, drag:"free"}}>
            {myfoods.map(createMyfoods)}
        </Splide>
    </Wrapper>
  )
}



// Creating STYLE Components
const Wrapper = styled.div`
margin: 0rem;
h2{
    color:#313;
    transform:scale(1.5);
}
`

const Card = styled.div`
min-height : 25rem;
border-radius : 2rem;
overflow : hidden;
position:relative;
color:blue;


transform:scale(0.8);

img{
    border-radius : 2rem;
    position: absolute;
    left : 0;
    width:100%;
    height:100%;
    object-fit:cover;
    padding:1rem;
}

p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform : translate(-50%, 0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1.5rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    color:black;
}
.price{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform : translate(-50%, 0%);
    color:gold;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
}
`   

const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))

`

export default MyFoods