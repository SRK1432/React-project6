import React, { useState } from 'react';
import NavBar from './NavBar';
import MusicStore from './MusicStore';
import Cart from './Cart';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

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
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (isItemInCart) {
      alert('Item is already in the cart');
    } else {
      setCartItems([...cartItems, item]);
      toast.success('Your Product: ' + item.title + ' is added successfully', { position: 'bottom-right', theme: 'colored' });
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
    toast.success('Item removed successfully', { position: 'bottom-right', theme: 'colored' });
  };

  const alertHandler = () => {
    if (cartItems.length === 0) {
      alert('You have Nothing in Cart, Add some products to purchase!');
    } else {
      alert('Thank you for the purchase');
      setCartItems([]);
    }
  };

  return (
    <Router>
      <NavBar onShow={cartShowHandler} cartItems={cartItems} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<MusicStore addToCart={addToCart} onShow={cartShowHandler} />} />
      </Routes>
      {cartVisible && (
        <Cart
          onHide={cartHideHandler}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onAlert={alertHandler}
        />
      )}
      <ToastContainer />
    </Router>
  );
};

export default App;
