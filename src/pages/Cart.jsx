import React, {useState, useEffect} from 'react'
import styled from "styled-components";



function Cart(){
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () =>{
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  }

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const editItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

return (
  <ListContainer>
  {items.map((item, index) => (
    <ListItem key={index}>
      <span>{item}</span>
      <button onClick={() => removeItem(index)}>Remove</button>
      <button onClick={() => editItem(index, prompt('Enter new value'))}>Edit</button>
    </ListItem>
  ))}
  <button onClick={addItem}>Add Item</button>
</ListContainer>
)
}



// Styling 
const ListItem = styled.div`
display:flex;
align-items:center;
padding:10px;

border-radius:5px;
margin-bottom:10px;
`

const ListContainer = styled.div`
display:flex;
flex-direction:column;

align-items:center;
`


export default Cart;