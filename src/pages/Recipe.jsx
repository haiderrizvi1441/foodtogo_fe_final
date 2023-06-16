// To show after a tile is clicked

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router';


function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});

    // To set active buttons once clicked
    const [activeTab, setActiveTab] = useState('instuctions'); // setting "instructions" default active tab

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=34a5e7bee2634840b9d8f80ea26f203c`)

        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(()=>{
        fetchDetails();
    }, [params.name])

    return (
        <DetailWrapper>
            <div>
                <h3>{details.title}</h3>
                <img src={details.image} alt="" />
            </div>

            <Info>

                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab("instructions")} >Instructions</Button>

                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>{setActiveTab("ingredients")}} >Ingredients</Button>
            </Info>
        </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom : 5rem;
display : flex;
.active {
  background:linear-gradient(35deg, #494949, #313131);
  color :white;
}
h2{
  margin-bottom: 2rem;
}

li{
  font-size : 1.2rem;
  line-height : 2.5rem;
}
ul{
  margin-top : 2rem;

}
h3{
  font-size: 15px;
}

`
const Button = styled.button`
padding: 1rem 2rem;
color:#313131;
border : 2px solid black;
margin-right: 2rem;
font-weight : 600;
transform:scale(0.8);

`

const Info = styled.div`
margin-left:10rem;
`

export default Recipe