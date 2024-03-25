import React, { useState } from 'react';

import Sidebars from '../../components/sidebar';


function AddCategory({ addCategory }) {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim() !== '') {
      addCategory(category); // Call the addCategory function passed from App
      console.log(category);
      setCategory('');
    }
  };

  return (
    <>
    <Sidebars/>
    <div className='add-category-container'>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className='category-form'>
        <input
          type="text"
          placeholder="Category Name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className='category-submit'>Add Category</button>
      </form>
    </div>
    </>
  );
}
export default AddCategory;