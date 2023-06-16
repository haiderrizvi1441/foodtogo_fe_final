import React from 'react';
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";



function Food(){

    useEffect(()=>{
        getFoods();
    },[])
    const [foods, setFoods] = useState([]);

    const getFoods = async() => {
        const check = localStorage.getItem("foods");
    if(check){
        setFoods(JSON.parse(check));
    }
    else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e9ac5bcbb20d43bca12edaff25a698ef&number=10&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem("foods", JSON.stringify(data.recipes));
        setFoods(data.recipes);
        console.log("Here are the recipes");
        console.log(data.recipes);
    }
    }
    
    function createFoodCard(recipe){
        return(
            <SplideSlide key={recipe.id}>
                <Link to={"recipe/" + recipe.id}>
                <Card>

                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} loading="lazy"/>
                    <p className='price'>Price: ₹{recipe.pricePerServing}</p>
                    <Gradient />
                    
                </Card>
                </Link>
            </SplideSlide>
        )
    }
    return(
        <Wrapper>
            <h2>🔥 Trending Foods 🔥</h2>
            <Splide options={{perPage:4, drag:"free"}}>
                {foods.map(createFoodCard)}
            </Splide>
        </Wrapper>
    );
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

export default Food;