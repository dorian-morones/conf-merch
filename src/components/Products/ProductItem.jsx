import React from "react";
import {
  ItemContainer,
  ItemImage,
  MediaContainer,
  InfoContainer,
  Title,
  BuyButton,
} from "./styles/products";

const Products = ({ product, handleAddToCart }) => {

  const { title, image, price, description } = product;
  return (
    <ItemContainer>
      <MediaContainer>
        <ItemImage src={image} alt={title} />
      </MediaContainer>
      <InfoContainer>
        <Title>{`${title} - $${price}`}</Title>
        <Title>{description}</Title>
        <BuyButton type="button" onClick={handleAddToCart(product)}>Comprar</BuyButton>
      </InfoContainer>
    </ItemContainer>
  );
};

export default Products;
