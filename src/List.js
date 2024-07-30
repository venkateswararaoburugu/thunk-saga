import React, { useState } from 'react'

const List = () => {
const[items,setItems] = useState(["Item 1", "Item 2"]);

const addItem = () =>{
    const newItem  = `item ${items.length + 1}`;
    setItems([...items,newItem]);
}
  return (
    <div>
      <ul>
        {items.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  )
}

export default List
