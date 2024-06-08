import React, { useState } from 'react';
import NavBar from './NavBar';
import MusicStore from './MusicStore';
import Cart from './Cart';

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
    }
  };
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };
  const alertHandler=()=>{
    if(cartItems == 0){
      alert('You have Nothing in Cart , Add some products to purchase !');
    }
    else{
      alert('Thank you for the purchase');
      setCartItems([]);
    }
  }
  return (
    <>
    {cartVisible && (
        <Cart 
        onHide={cartHideHandler} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        onAlert={alertHandler}
        />
      )}
      <NavBar onShow={cartShowHandler} cartItems={cartItems}/>
      <MusicStore addToCart={addToCart} onShow={cartShowHandler}/>
      
    </>
  );
};

export default App;
