import React from 'react';

const Product = ({ id, image, name, description, price, addToCart }) => {
  return (
    
      // styles at index.css
      <div className='mainbox' > 
      <img className ="image"  src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>${price.toFixed(2)}</h3>
          <button className = 'addtocartbtn ' onClick={() => addToCart({ id, name, price, image })}>
            Add to Cart
          </button>
        </div>
      </div>
    
   
  );
};

export default Product;
