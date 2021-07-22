import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Navigation from "./components/Navigation";
import ProductDisplayPage from "./components/ProductDisplayPage";

export default function App() {
  const [globalbolean, setglobalbolean] = useState(false);
  function changebolean() {
    setglobalbolean(!globalbolean);
  }

  return (
    <Router>
      <React.Fragment>
        <Navigation globalbolean={changebolean} />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/pdp">
            <ProductDisplayPage variable={globalbolean} />
          </Route>
          <Route exact path="/">
            <ProductList variable={globalbolean} />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
