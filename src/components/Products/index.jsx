import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import AppContext from '../../context/AppContext';
import { ProductList } from "./styles/products";

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <ProductList>
      {products && products !== undefined &&
        products.map((item) => <ProductItem key={item.id} product={item} handleAddToCart={handleAddToCart} />)}
    </ProductList>
  );
};

export default Products;
