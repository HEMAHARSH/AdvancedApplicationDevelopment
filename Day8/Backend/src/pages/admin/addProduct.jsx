import React, { useState } from 'react';


import Sidebars from '../../components/sidebar';

function AddProduct({ categories }) {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() !== '' && selectedCategory.trim() !== '' && price.trim() !== '' && imageUrl.trim() !== '') {
      // Here you can add logic to handle adding the product, for now just console log it
      console.log("Product Name:", productName);
      console.log("Category:", selectedCategory);
      console.log("Price:", price);
      console.log("Image URL:", imageUrl);
      setProductName('');
      setSelectedCategory('');
      setPrice('');
      setImageUrl('');
      setSuccessMessage('Product added successfully!');
      setErrorMessage('');
    } else {
      setSuccessMessage('');
      setErrorMessage('Please fill out all fields.');
    }
  };

  return (
    <>
    <Sidebars/>
   
    <div className='add-product-container'>
    
      <h2>Add Product</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className='product-formgroup'>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} className='select-category'
        >
          <option value="" className='add-product-option'>Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit" className='add-product-button'>Add Product</button>
      </form>
    </div>
    </>
  );
}

export default AddProduct;