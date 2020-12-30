/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ProductList = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
  width: 1200px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-decoration: none;
  box-shadow: 8px 14px 38px rgba(39,44,49,0.06), 1px 3px 8px rgba(39,44,49,0.03);
  border-radius: 5px;
  margin: 0 0 20px 0;
  position: relative;
`;

export const MediaContainer = styled.div`
`;

export const InfoContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0 0;
  object-fit: contain;
`;

export const BuyButton = styled.button`
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  width: 100%;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  border: 0px;
  outline: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
`;