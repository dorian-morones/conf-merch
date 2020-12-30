/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const PaymentContainer = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

export const PaymentBack = styled.div`
  margin: 10px 0 0 0;
`;

export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaymentButon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const PaymentElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const PaymentTitle = styled.h3`
  margin: 0;
`;
