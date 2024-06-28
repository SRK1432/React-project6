import React, { useContext, useEffect, useState } from 'react';
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
import AuthContext from './context-api/Auth-context';
import axios from 'axios';

const App = () => {
  const authCtx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  
  useEffect(() => {
    axios.get('https://crudcrud.com/api/7766af6d360941c5aeceb334ab287d08/cart-item')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cartShowHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (isItemInCart) {
      alert('Item is already in the cart');
    } else {
      axios.post('https://crudcrud.com/api/7766af6d360941c5aeceb334ab287d08/cart-item', item)
        .then((response) => {
          setCartItems([...cartItems, response.data]);
          toast.success(`Your Product: ${item.title} is added successfully`, { position: 'bottom-right', theme: 'colored' });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://crudcrud.com/api/7766af6d360941c5aeceb334ab287d08/cart-item/${id}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== id));
        toast.success('Item removed successfully', { position: 'bottom-right', theme: 'colored' });
      })
      .catch((error) => {
        console.log(error);
      });
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
        {authCtx.isLoggedIn && <Route path="/" element={<MusicStore addToCart={addToCart} onShow={cartShowHandler} />} />}
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
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
        <Container>
          <Navbar.Brand style={{ fontSize: 50, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>The Generics</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://www.facebook.com"><FaFacebook size={30} /></Nav.Link>
            <Nav.Link href="https://www.spotify.com"><FaSpotify size={30} /></Nav.Link>
            <Nav.Link href="https://www.youtube.com"><FaYoutube size={30} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Router>
  );
};

export default App;
