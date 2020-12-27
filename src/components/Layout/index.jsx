import React from 'react';
import {
  MainContainer,
  Header,
  Checkout,
  Title,
  Body,
  Footer,
  FooterItem
} from './styles/layout';

const Layout = ({ children }) => {

  console.log(children);

  return (
    <MainContainer>
      <Header>
        <Title>Conf Merch</Title>
        <Checkout>Checkout</Checkout>
      </Header>
      <Body>
        {children}
      </Body>
      <Footer>
        <FooterItem>Official Conference Merch</FooterItem>
        <FooterItem>All rights reserved</FooterItem>
      </Footer>
    </MainContainer>
  )
}

export default Layout;