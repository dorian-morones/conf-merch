import React from 'react';
import ProductItem from './ProductItem';

import {
  ProductList
} from './styles/products';

const Products = ({ products }) => {
  console.log("🚀 ~ file: index.jsx ~ line 7 ~ Products ~ products", products)

  return (
    <ProductList>
      {
        products && products.map(item => <ProductItem key={item.id} product={item} />)
      }
    </ProductList>
  )
}

export default Products;