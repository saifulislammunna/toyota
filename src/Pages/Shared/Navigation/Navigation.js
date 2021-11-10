import React from 'react';
import {   Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
 
  import useAuth from './../../../hooks/useAuth';  
   
  const Navigation = () => {

  const {user,logout} = useAuth();    
    return (
        <>
  <Navbar bg="white" sticky="top" collapseOnSelect expand="lg"  variant="white">
    <Container>
         
    <Navbar.Text className=" text-dark">
           Toyota 
      </Navbar.Text>
    <Navbar.Toggle />
    
    <Navbar.Collapse className="justify-content-end">
   
    <Nav.Link className="home text-black"  as={Link}  to="/home">Home</Nav.Link>
        
    <Nav.Link className="home text-black"  as={Link}  to="/products">Products</Nav.Link>
    
       {
        user?.email ? <Button   onClick={logout} className="log-out"  >Log out</Button>
        :
        <Nav.Link className="home text-black"  as={Link}  to="/login">Log in</Nav.Link>}  
       {
        user?.email ? <Nav.Link className="home text-black"  as={Link}  to="/dashboard">Dashboard</Nav.Link>
        :
        ''}  


       
        {/* <Navbar.Text className=" text-dark">
           {user.name}   
      </Navbar.Text> */}   
    </Navbar.Collapse>
     
    </Container>
  </Navbar> 
</>  
    );
};

export default Navigation;