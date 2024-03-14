import React, {useEffect, useState} from 'react';
import {Product} from "../helpers/productHelper";
import './productCardStyles.css';

const ProductCard = (props: { product: Product; }) => {

  const [currentIndex, setCurrentIndex] = useState(0); // Initial image index

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.product.photos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [props.product.photos.length]);

  return (
    <div className="product-card">
      <div>
        <img key={currentIndex} src={props.product.photos[currentIndex]} alt={`Photo ${currentIndex}`}/>
      </div>
      <div className="product-info">
        <h4 className="product-title">{props.product.name}</h4>
        <p className="product-data">Brand: {props.product.brand}</p>
        <p className="product-data">Price: ${props.product.price.toFixed(2)}</p>
        <p className="product-data">Quantity: {props.product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
