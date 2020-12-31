import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import {
  MainContainer,
  Header,
  Checkout,
  Title,
  Body,
  Footer,
  FooterItem,
} from "./styles/layout";

const Layout = ({ children }) => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <MainContainer>
      <Header>
        <Link to="/">
          <Title>Conf Merch</Title>
        </Link>
        <Checkout>
          <Link to="/checkout">
            <i className="fas fa-shopping-basket" />
            {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
          </Link>
        </Checkout>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <FooterItem>Official Conference Merch</FooterItem>
        <FooterItem>All rights reserved</FooterItem>
      </Footer>
    </MainContainer>
  );
};

export default Layout;
