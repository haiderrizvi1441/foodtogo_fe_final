import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {Link} from "react-router-dom";
import styled from "styled-components";


function Cartnew() {


    const [items, setItems] = useState([]);
    let params = useParams();
    
    const getItems = async () =>{
        const data = await fetch("http://localhost:9054/api/orders");
        const orders = await data.json();
        console.log(orders);
        setItems(orders);
    }

    useEffect(()=>{
        getItems();
    },[])
    return (
    <Grid>
    {items.map((obj)=>{
        return(
            <Link >
                <Card key={obj.id}>
                    <h3>{obj.items}</h3>
                    <p>{obj.order_id}</p>
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

export default Cartnew