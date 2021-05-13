import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Nav from "./Components/Nav";
import CartList from "./Pages/CartList";
import { CART_ITEM } from "./Data/CartData";

const Routes = () => {
  const [cartItems, setCartItems] = useState(CART_ITEM);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const filterItem = (idx) => {
    setCartItems(
      cartItems.filter((_, i) => {
        return i !== idx;
      })
    );
  };

  useEffect(() => {
    console.log("Routes render");
  });

  return (
    <Router>
      <Nav itemCount={cartItems.length} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <ProductList addToCart={addToCart} />}
        />
        <Route
          exact
          path="/cart"
          component={() => (
            <CartList cartItems={cartItems} filterItem={filterItem} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
