import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  
  return (
    <header>
      <nav>
        <ul style={styles.list}>
          <li style={styles.homebutton}><Link to="/">Home</Link></li>
          <li style={styles.cartbutton}><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {

  list: {
    listStyle:'none',
    display:'flex',
  },
  homebutton:{
    margin:'10px',
  },
  cartbutton:{
    margin:'10px',
  },
};

export default Header;
