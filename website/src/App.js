import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./components/category/Category";
import SingleProduct from "./components/product_details/SingleProduct";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";
import Confirmation from "./components/confirmation/Confirmation";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import NotFound from "./components/common/NotFound";
import Header from "./components/common/Header";

import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/category" render={() => <Category />} />
          <Route
            exact
            path="/product-details"
            render={() => <SingleProduct />}
          />
          <Route exact path="/checkout" render={() => <Checkout />} />
          <Route exact path="/cart" render={() => <Cart />} />
          <Route exact path="/confirmation" render={() => <Confirmation />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Registration />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
