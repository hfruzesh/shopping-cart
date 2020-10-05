import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import MainNavbar from "./components/MainNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"


//redux
import store from './redux/store'
import { createProductList, updateCartItems, updateData } from './redux/actions'



class App extends Component {

  componentDidMount() {
    store.dispatch(createProductList())
    store.dispatch(updateCartItems())
  }

  render() {
    return (
      <React.Fragment>
        <MainNavbar />
        <button
          disabled={true}
          className="btn btn-info"
          onClick={() => store.dispatch(updateData())}>
          Update Data
          </button>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App
