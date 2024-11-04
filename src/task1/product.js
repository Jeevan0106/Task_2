// Product.js
import React from 'react';

const Product = ({ name, price, inStock }) => {
  return (
    <div style={styles.container}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      {price > 1000 && <p style={{color:'gold'}}>Premium Product</p>}
      {price < 1000 && <p style={{color:'green'}}>cheap Product</p>}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '10px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Product;
