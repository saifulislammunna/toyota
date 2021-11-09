import React from 'react';
import { /* Button, */ Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
 
/* import useAuth from '../../../hooks/useAuth'; */
const Navigation = () => {
 /*  const {user,logout} = useAuth(); */
    return (
        <>
  <Navbar bg="white" sticky="top" collapseOnSelect expand="lg"  variant="white">
    <Container>
         {/* <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /> </Navbar.Brand> */}
         {/* <Navbar.Brand href="#home"><img   className="logo" src={logo} alt="" /> </Navbar.Brand> */} 
   {/*  <Navbar.Text className=" text-black">
         jerins-parlour
      </Navbar.Text> */}
   
    <Navbar.Toggle />
    
    <Navbar.Collapse className="justify-content-end">
   
    <Nav.Link className="home text-black"  as={Link}  to="/home">Home</Nav.Link>
     <Nav.Link className="home text-black"  as={Link}  to="/login">Login</Nav.Link>  
    <Nav.Link className="home text-black"  as={Link}  to="/appointment">Appointment</Nav.Link>
      {/*  {
        user.email ? <Button   onClick={logout} className="log-out"  >Log out</Button>
        :
        <Nav.Link className="home text-black"  as={Link}  to="/login">Log in</Nav.Link>}  */}
     {/*  <Nav.Link  className="home text-white" as={Link}  to="/aboutbgh">About BGH</Nav.Link>
      <Nav.Link  className="home text-white" as={Link}  to="/latestnews">Latest News</Nav.Link> */}
      {/* <Navbar.Text className=" text-white">
         {user.displayName}  
      </Navbar.Text> */}
    </Navbar.Collapse>
     
    </Container>
  </Navbar> 
</>  
    );
};

export default Navigation;