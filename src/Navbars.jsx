import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar ,Nav} from 'react-bootstrap';

const Navbars=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

       
                <Navbar bg="light" expand="lg" fixed="top" >
                  <div className="container">
        <Navbar.Brand href="/">Rajneesh Anand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="service">Service</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
</div>
</div>
</div>
     </>   
    );
}
export default Navbars;

 
