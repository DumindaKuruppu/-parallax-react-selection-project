import React from 'react';
import {Product} from "../helpers/productHelper";
import './productCardStyles.css';

const ProductCard = (props: { product: Product; }) => {

  return (
    <div className="product-card">
      <div>
        {/*{props.product.photos.map((photo: string | undefined, index: React.Key | null | undefined) => (*/}
        {/*  // <img key={index} src={photo} alt={`Photo ${index}`}/>*/}
        {/*  <img key={index} src={photo}/>*/}
        {/*))}*/}
        <img src={props.product.photos[0]} alt={`Photo 1`}/>
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
