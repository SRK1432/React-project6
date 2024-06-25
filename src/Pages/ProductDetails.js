import React from 'react';
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const items = [
    { id: 1, title: 'Album 1', price: 12.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
    { id: 2, title: 'Album 2', price: 14.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
    { id: 3, title: 'Album 3', price: 9.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
    { id: 4, title: 'Album 4', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
    { id: 5, title: 'T-Shirt', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png' },
    { id: 6, title: 'Coffee Cup', price: 6.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png' }
  ];

  const product = items.find(item => item.id === parseInt(params.productId));//parseInt is to convert string to integer

  return (
    <>
      {product ? (
        <div>
          <h1>Product Details Page</h1>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <h3>${product.price}</h3>
          <p>This is a Great Product</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ProductDetails;
