import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx'; 

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity } = useContext(CartContext); 
  const [applyDiscount, setApplyDiscount] = useState(false);

  const originalTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedTotal = applyDiscount ? originalTotalPrice * 0.9 : originalTotalPrice;

  const handleBuyNow = () => {
    alert("Your order has been placed!");
  };

  return (
    <div style={styles.outercart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <button style={styles.buyNowButton} onClick={() => navigate('/')}>
            Buy Products
          </button>
        </>
      ) : (
        <>
          <ul style={styles.cartul}>
            {cart.map((item) => (
              <li key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.productImage} />
                <div style={styles.textdiv}>
                  <h2>{item.name}</h2>
                  <h3>${item.price.toFixed(2)}</h3>
                  <div style={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, -1)} style={styles.button}>-</button>
                    <span style={styles.quantity}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} style={styles.button}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div style={styles.discountContainer}>
            <input
              type="checkbox"
              id="discountCheckbox"
              checked={applyDiscount}
              onChange={() => setApplyDiscount(!applyDiscount)}
            />
            <label htmlFor="discountCheckbox" style={styles.discountLabel}>
              Apply 10% Discount
            </label>
          </div>

          <h2>Total Price: ${discountedTotal.toFixed(2)}</h2>

          <button style={styles.buyNowButton} onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};




const styles = {
  outercart: {
    textAlign: 'center',
    padding: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px auto',
    width: '60%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  cartul: {
    listStyle: 'none',
    padding: '0',
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  textdiv: {
    width: '50%',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  quantity: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buyNowButton: {
    marginTop: '20px',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  discountContainer: {
    marginTop: '15px',
  },
  discountLabel: {
    marginLeft: '10px',
    fontSize: '16px',
  },
};

export default Cart;
