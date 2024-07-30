import React, { useState } from 'react';

function App() {
  // Initial state
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editItemValue, setEditItemValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  // Handle form submission for adding a new item
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now(), value: newItem }]);
      setNewItem('');
    }
  };

  // Handle delete item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Handle edit item
  const handleEdit = (item) => {
    setEditItem(item);
    setEditItemValue(item.value);
  };

  // Handle edit input change
  const handleEditInputChange = (event) => {
    setEditItemValue(event.target.value);
  };

  // Handle update item
  const handleUpdate = (event) => {
    event.preventDefault();
    if (editItemValue.trim() !== '') {
      setItems(items.map((item) =>
        item.id === editItem.id ? { ...item, value: editItemValue } : item
      ));
      setEditItem(null);
      setEditItemValue('');
    }
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Add a new item"
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editItem && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editItemValue}
            onChange={handleEditInputChange}
            placeholder="Edit item"
          />
          <button type="submit">Update Item</button>
        </form>
      )}
    </div>
  );
}

export default App;
