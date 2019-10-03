import React, {Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/HomePage";
import About from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import Product from './Pages/ProductPage';
import SingleProduct from './Pages/SingleProductPage';
import Cart from "./Pages/CartPage";
import Default from './Pages/Default';

import {Route, Switch} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SideCart from "./Components/SideCart";  
import Footer from "./Components/Footer";   



class App extends Component {
  render() { 
  return (
    <>
    {/* navbar, sidebar,footer */}
    <Navbar />
    <Sidebar />
    <SideCart />


    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route path="/product" exact component={Product} />
      <Route path="/product/:id"  component={SingleProduct} />
      <Route path="/cart"  component={Cart} />
      <Route   component={Default} />
      
    </Switch>
    <Footer />

    </>
  );
}
}

export default App;
