import React from "react";
import { PaymentContainer, PaymentTitle } from "./style/payment";

const Payment = () => {
  return (
    <PaymentContainer>
      <div className="Payment-content">
        <PaymentTitle>Resument del pedido:</PaymentTitle>
        <div className="Payment-button">Boton de pago con Paypal</div>
      </div>
      <div />
    </PaymentContainer>
  );
};

export default Payment;
