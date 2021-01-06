import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar ,Nav} from 'react-bootstrap';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch ,Route, Redirect} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import './contact.css';
import Service from './Service';
import Navbars from './Navbars';
import Footer from './Footers';
const APPL=()=>{
    return(
        <>
        <Navbars />
        <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/about" component={About}/>
            <Route  exact path="/service" component={Service}/>
            <Route  exact path="/contact" component={Contact}/>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
        </>

    );
}
export default APPL;