import React, { useState } from 'react';
import NavBar from './NavBar';
import MusicStore from './MusicStore';
import Cart from './Cart';
import { Navbar,Container } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, updateCartVisible] = useState(false);

  const cartShowHandler = () => {
    updateCartVisible(true);
  };

  const cartHideHandler = () => {
    updateCartVisible(false);
  };

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
      <Navbar bg="info" expand="lg" variant="dark" className="p-3 mt-1">
        <Container >
          <Navbar.Brand style={{ fontSize: 50, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>The Generics</Navbar.Brand>
        </Container>
      </Navbar>
    </Router>
  );
};

export default App;
