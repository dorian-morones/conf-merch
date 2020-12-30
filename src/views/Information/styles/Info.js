/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const InfoContainer = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
  width: 900px;
`;

export const InfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const InfoSidebar = styled.div`
  margin: 10px 0 0 0;
`;

export const InfoBack = styled.div`
  margin: 10px 0 0 0;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
`

export const Input = styled.input`
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: rgba(0,0,0,0.75);
  display: inline-block;
  font-feature-settings: "tnum";
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0 0 8px 0;
  outline: 0;
  padding: 4px 12px;
  width: 100%;
  box-sizing: border-box;
`
