import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link,/* useLocation,useHistory */ } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';  
  import { Alert,   Spinner } from 'react-bootstrap'; 

const Login = () => {

    const [loginData, setLoginData] = useState({});

     const {user, loginUser,    isLoading, authError}   = useAuth();  

    /* const  location = useLocation();
    const history = useHistory();
 */
    const handleOnChange = e =>{
       const field = e.target.name;
       const value = e.target.value;
         console.log(field,value);  
       const newLoginData = {...loginData};
       newLoginData[field] = value;
       setLoginData(newLoginData);
       console.log(loginData,field,value);
    }

     const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,/*  location, history */); 
        e.preventDefault();
    } 

    
    return (
        <div>
          <form onSubmit={handleLoginSubmit}>  
         
     <h2>Log in</h2>
      <div className="row mb-3">
       <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-3">Email :</label>
       <div className="col-sm-10 pt-3">
       <input   onChange={handleOnChange} required type="email" className="form-control w-50" id="inputEmail3" name="email"  placeholder="Your Email"/>
      </div>
     </div>
    <div className="row mb-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fs-3">Password :</label>
      <div className="col-sm-10  ">
      <input   onChange={handleOnChange}  type="password" className="form-control w-50" name="password" id="inputPassword3" placeholder="Your password"/>
   </div>
   </div>

   
   <div className="row mb-3 text-danger">
  
   </div>
    <div className="d-flex toggle-btn row mb-3">
   <div className="col-sm-8 pt-3">
   
   <button type="submit" className="btn  btn-primary  w-50"> Login</button>
   <Nav.Link className="home text-black"  as={Link}  to="/register">New User? Please Register</Nav.Link>
    
 
   </div>
    
   
   </div>

</form>


  {isLoading && <Spinner animation="border" variant="danger"/>}
 {user?.email && <Alert variant="success">
  <Alert.Heading>Log in successfully</Alert.Heading>
   
</Alert>}
{authError && <Alert variant="danger">
  <Alert.Heading>{authError}</Alert.Heading>
   
</Alert>} 
        </div>
    );
};

export default Login;