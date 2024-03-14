import React from 'react';
import ProductCard from "./ProductCard";
import sampleProductList from "../helpers/sampleProductList.json"
import {Product} from "../helpers/productHelper";

const ProductList = () => {

  return (
    <div style={{ display: "flex", overflow: "scroll", flexWrap: "wrap", maxHeight: "95%" }}>
      {sampleProductList.map((product: Product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;