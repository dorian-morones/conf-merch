import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
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

  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <CheckoutContainer>
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item, index) => (
          <Item key={index}>
            <Element>
              <Title>{item.title}</Title>
              <Text>{`$${item.price}`}</Text>
            </Element>
            <Delete type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </Delete>
          </Item>
        ))}
      </div>
      {cart.length > 0 && (
        <Sidebar>
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <SidebarButton type="button">Continuar pedido</SidebarButton>
          </Link>
        </Sidebar>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
