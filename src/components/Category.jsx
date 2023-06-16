import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
import { GiNoodles, GiChopsticks} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Category() {
  return (
    <List>
        <SLink to={"cuisine/Italian" }>
            <FaPizzaSlice size={"2rem"}/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"cuisine/American"}>
            <FaHamburger size={"2rem"}/>
            <h4>American</h4>
        </SLink>
        <SLink to={"cuisine/Thai"}>
            <GiNoodles size={"2rem"}/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"cuisine/Japanese"}>
            <GiChopsticks size={"2rem"}/>
            <h4>Japanese</h4>
        </SLink>
        

    </List>
  )
}

const List = styled.div`
display:flex;
justify-content:center;
margin: 2rem 0rem;
`
// Styling Navlink
const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:3rem;
text-decoration:none;
background-color:gray;
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.7);

h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:1.5 rem;
}
&.active{
    background:linear-gradient(to right, #f27121, #e94057);

    svg{
        color:white;
    }
    h4{
        color:white;
    }
}

`

export default Category;
