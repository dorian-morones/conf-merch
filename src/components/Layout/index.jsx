import React from "react";
import { Link } from 'react-router-dom';
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
  console.log(children);

  return (
    <MainContainer>
      <Header>
        <Link to="/"><Title>Conf Merch</Title></Link>
        <Checkout><Link to='/checkout'><i class="fas fa-shopping-basket" /></Link></Checkout>
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
