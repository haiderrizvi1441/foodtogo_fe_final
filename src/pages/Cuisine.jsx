import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion"; // for animations
import {Link, useParams} from "react-router-dom"; // to pull the keyword from the browser links
import {useEffect, useState} from 'react';


function Cuisine() {
    
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=34a5e7bee2634840b9d8f80ea26f203c&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
        console.log("recipes:  ", recipes);
        console.log("recipes.result:  ", recipes.results);
    }
    useEffect(()=>{
        getCuisine(params.type) // italian , american etc . it eill be connected to Category Component
        console.log(params.type);
    },[params.type])
    return (
        <Grid>
            {cuisine.map((obj)=>{
                return(
                    <Link to={"/recipe/" + obj.id}>
                    <Card key={obj.id}>
                        <img src={obj.image} alt="loading" />
                        <h3>{obj.title}</h3>
                    </Card></Link>
                )
            })}
        </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns : repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 2rem;
`

const Card = styled.div`
transform:scale(0.7);
img{
    width:100%;
    border-radius : 2rem;
    ${'' /* height:200px;
    width:300px; */}
}
a{
    text-decoration: none;
}
h3{
    text-align:center;
    padding: 1rem;
}


`;
export default Cuisine;