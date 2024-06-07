import React, { useState } from 'react';
import NavBar from './NavBar';
import Cart from './Cart';
import MusicStore from './MusicStore';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const cartShowHandler = () => {
    setCartVisible(true);
  }

  const cartHideHandler = () => {
    setCartVisible(false);
  }

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <>
      <NavBar onShow={cartShowHandler} />
      <MusicStore addToCart={addToCart} onShow={cartShowHandler}/>
      {cartVisible && (
        <Cart onHide={cartHideHandler} cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
    </>
  );
};

export default App;
