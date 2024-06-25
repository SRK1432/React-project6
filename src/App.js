import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MusicStore from './components/MusicStore';
import Cart from './components/Cart';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaFacebook, FaSpotify, FaYoutube } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';
import LoginPage from './Pages/LoginPage';

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
        <Route path="/" exact element={<MusicStore addToCart={addToCart} onShow={cartShowHandler} />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
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
          <Nav.Link href="https://www.facebook.com"><FaFacebook size={30} /></Nav.Link>
          <Nav.Link href="https://www.spotify.com"><FaSpotify size={30} /></Nav.Link>
          <Nav.Link href="https://www.youtube.com"><FaYoutube size={30} /></Nav.Link>
        </Container>
      </Navbar>
    </Router>
  );
};

export default App;
