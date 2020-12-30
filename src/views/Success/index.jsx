import React from "react";
import { SuccessContainer, SuccessMap } from "./styles/success";

const Success = () => {
  return (
    <SuccessContainer>
      <div className="Success-content">
        <h2>Dorian, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <SuccessMap>Google Maps</SuccessMap>
      </div>
    </SuccessContainer>
  );
};

export default Success;
