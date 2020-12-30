import React from "react";
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
  console.log("information");

  return (
    <InfoContainer>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
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
          <InfoBack>Regresar</InfoBack>
          <div className="Information-next">pagar</div>
        </InfoButtons>
      </div>
      <InfoSidebar>
        <h3>Pedido:</h3>
        <InfoItem>
          <InfoElement>
            <h4>ITEM Name</h4>
            <span>$10</span>
          </InfoElement>
        </InfoItem>
      </InfoSidebar>
    </InfoContainer>
  );
};

export default Information;
