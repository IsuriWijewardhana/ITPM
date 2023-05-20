import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Product

import EditProduct from "./components/Product/edit-Product.component";
import CreateProduct from "./components/Product/create-Product.component";
import ProductList from "./components/Product/Product-list.component";
import ProductRepost from "./components/Product/Report";


import Footer from "./components/navbar.component";

import StoreHome from "./components/Store/StoreHome";
import Navigator from "./components/Navigator/Navigator"
import Vegetable from "./components/NewStore/Vegetable";
import Cart from "./components/NewStore/Cart";
import Cartlist from "./components/NewStore/Cartlist";
import Payment from "./components/NewStore/Payment";
import Storeorderadmin from "./components/NewStore/Storeorderadmin";
import Storepaymentadmin from "./components/NewStore/Storepaymentadmin";
import Fruit from "./components/NewStore/Fruit";
import Cartfruit from "./components/NewStore/Cartfruit";

function App() {

    return (<Router >
        <Navigator />
       
       
        <br/>
       
        <Route path = "/" exact component = { StoreHome}/>

        <Route path = "/store" component = { StoreHome }/>
        <Route path = "/vegetables"  component = {Vegetable}/> 
        <Route path = "/Fruits"  component = {Fruit}/> 
        <Route path = "/Cart/:id" component = { Cart }/>
        <Route path = "/Cartfruit/:id" component = { Cartfruit }/>
        <Route path = "/Cartlist" component = { Cartlist }/>
        <Route path = "/Storeadmin" component = { Storeorderadmin }/>
        <Route path = "/Storepaymentadmin" component = { Storepaymentadmin }/>
        <Route path = "/Payment/:id" component = { Payment }/>

        <Route path = "/Product-add/" component = { CreateProduct }/>
        <Route path = "/Product/"  component = { ProductList }/> 
        <Route path = "/Product-Edit/:id" component = { EditProduct }/>
        <Route path = "/Product-Report/" component = { ProductRepost }/>
        
        
         <Footer/> </Router>
    );
}

export default App;