import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Nav from "./Components/Nav";
import CartList from "./Pages/CartList";

const Routes = () => {
  useEffect(() => {
    console.log("Routes render");
  });

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <ProductList />} />
        <Route exact path="/cart" component={() => <CartList />} />
      </Switch>
    </Router>
  );
};

export default Routes;
