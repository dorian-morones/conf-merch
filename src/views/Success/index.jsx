import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import MapboxGLMap from "../../components/Map";
import { SuccessContainer, SuccessMap } from "./styles/success";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <SuccessContainer>
      <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
      <span>Tu pedido llegara en 3 dias a tu direccion:</span>
      <SuccessMap>
        <MapboxGLMap />
      </SuccessMap>
    </SuccessContainer>
  );
};

export default Success;
