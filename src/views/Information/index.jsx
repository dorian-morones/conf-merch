import React, { useContext, useRef } from "react";
import AppContext from '../../context/AppContext';
import { Link, useHistory } from "react-router-dom";
import {
  InfoContainer,
  InfoButtons,
  InfoSidebar,
  InfoBack,
  InfoItem,
  InfoElement,
  Input,
} from "./styles/Info";

const Information = () => {

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const { history } = useHistory();
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    history.push('/checkout/payment')
  }

  return (
    <InfoContainer>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <Input type="text" placeholder="Nombre completo" name="name" />
            <Input type="text" placeholder="Correo Electronico" name="email" />
            <Input type="text" placeholder="Direccion" name="address" />
            <Input type="text" placeholder="Apto" name="apto" />
            <Input type="text" placeholder="Ciudad" name="city" />
            <Input type="text" placeholder="Pais" name="country" />
            <Input type="text" placeholder="Estado" name="state" />
            <Input type="text" placeholder="Codigo postal" name="cp" />
            <Input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <InfoButtons>
          <Link to="/checkout">
            <InfoBack>Regresar</InfoBack>
          </Link>
          <Link to="/checkout/payment">
            <button type="button" className="Information-next" onClick={handleSubmit}>pagar</button>
          </Link>
        </InfoButtons>
      </div>
      <InfoSidebar>
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <InfoItem>
            <InfoElement>
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </InfoElement>
          </InfoItem>
        ))}
      </InfoSidebar>
    </InfoContainer>
  );
};

export default Information;
