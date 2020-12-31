import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button";
import AppContext from "../../context/AppContext";
import { PaymentContainer, PaymentTitle } from "./style/payment";

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  // const { history } = useHistory();

  const paypalOtions = {
    clientId:
      "ASuvUK54mNg5zQ-_OfoyEEDNK4TITPELTM0tY5X-UasLXLm72qwYA3bKeEmMfdAOkTZHDkj-4f39r65D",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <PaymentContainer>
      <div className="Payment-content">
        <PaymentTitle>Resument del pedido:</PaymentTitle>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{`$ ${item.price}`}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </PaymentContainer>
  );
};

export default Payment;
