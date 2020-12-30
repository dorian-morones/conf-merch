import React from "react";
import {
  CheckoutContainer,
  Item,
  Element,
  Sidebar,
  SidebarButton,
  Delete,
  Title,
  Text,
} from "./styles/checkout";

const Checkout = () => {
  console.log("checkout");

  return (
    <CheckoutContainer>
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <Item>
          <Element>
            <Title>ITEM name</Title>
            <Text>$10</Text>
          </Element>
          <Delete type="button">Eliminar</Delete>
        </Item>
      </div>
      <Sidebar>
        <h3>Precio Total: $10</h3>
        <SidebarButton type="button">Continuar pedido</SidebarButton>
      </Sidebar>
    </CheckoutContainer>
  );
};

export default Checkout;
