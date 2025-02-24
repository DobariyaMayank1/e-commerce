import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product.jsx';
import { CartContext } from '../context/CartContext.jsx';
import smartwatchimg from '../imagess/smartwatch.jpg'; 
import wirelessheadphoneimg from '../imagess/wirelessheadphone.jpg';
import bluetoothspeakerimg from '../imagess/bluetoothspeaker.jpg'

const Home = () => {
  const navigate = useNavigate(); 
  const { addToCart } = useContext(CartContext); 

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality noise-canceling wireless headphones.",
      price: 100,
      image: wirelessheadphoneimg,

    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Feature-packed smartwatch with heart rate monitor.  Feature-packed smartwatch with heart rate monitor.",
      price: 50,
      image: smartwatchimg,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 75,
      image: bluetoothspeakerimg,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 20,
      image: bluetoothspeakerimg,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 21,
      image:bluetoothspeakerimg,
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 22,
      image: bluetoothspeakerimg,
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 23,
      image: bluetoothspeakerimg,
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 24,
      image: bluetoothspeakerimg,
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 25,
      image: bluetoothspeakerimg,
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      description: "Portable speaker with powerful bass and long battery life.",
      price: 26,
      image: bluetoothspeakerimg,
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <div style={styles.outerbox} >
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            addToCart={addToCart} 
          />
        ))}
      </div>

      <button style={styles.cartButton} onClick={() => navigate('/cart')}>
        Go to Cart
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
  },
  outerbox:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'14px',
    flexWrap:'wrap',
    backgroundColor: 'white',
  },
  cartButton: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#007bff',
    color: 'white',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
};

export default Home;


