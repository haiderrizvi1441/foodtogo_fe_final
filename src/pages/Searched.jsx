import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {Link} from "react-router-dom";
import styled from "styled-components";


function Searched() {

    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async (name) =>{
        const data = await fetch (`https://api.spoonacular.com/food/menuItems/search?query=${name}&number=10&apiKey=e9ac5bcbb20d43bca12edaff25a698ef`)
        
        const recipes = await data.json();
        console.log("The way" ,recipes);
        setSearched(recipes.menuItems);
        console.log("Searched Componrny", recipes.menuItems);
    }
    
    useEffect(()=>{
        getSearched(params.search);
    
    },[params.search]); // triggers when params.search changes


  return (
    <Grid>

        {searched.map((obj)=>{
            return(
                <Link to={"/recipe/" + obj.name}>
                <Card key={obj.id} >
                    <img src={obj.image} alt=""/>
                    <h3>{obj.title}</h3>
                    
                </Card>

                </Link>
            )
        })}
    </Grid>
  )
}


// Styling 

const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 1.5rem;

`

const Card = styled.div`
transform:scale(0.8);
img{
    ${'' /* width:100%; */}
    width:400px;
    height:400px;
    
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h3{
    text-align:center;
    padding:1rem;
}


`
export default Searched;