import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// styles
import "../styles/global.css";

// Layout
import Layout from "../components/Layout";

import Home from "../views/Home";
import Checkout from "../views/Checkout";
import Information from "../views/Information";
import Payment from "../views/Payment";
import Success from "../views/Success";
import NotFound from "../views/NotFound";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
