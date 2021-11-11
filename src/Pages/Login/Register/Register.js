import React, { useState } from 'react';
import { Alert, Nav, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
 
  import {  useHistory } from 'react-router-dom';
 
const Register = () => {
    
    const [loginData, setLoginData] = useState({});
     const history = useHistory();
 
     const { user,  registerUser ,isLoading  ,authError    } = useAuth();
  
    const handleOnBlur = e =>{
       const field = e.target.name;
       const value = e.target.value;

        console.log(field,value);  
       const newLoginData = {...loginData};
       newLoginData[field] = value;
          console.log(field, value,newLoginData);     
       setLoginData(newLoginData);
    }
    
    const handleLoginSubmit = e => {
           if(loginData.password !== loginData.password2){
                   alert('Your password did not match');
                   return
           }
            registerUser(loginData.email, loginData.password,   loginData.name  ,history  );  

          /* alert('hello') */
          e.preventDefault();
      }

    return (
       <div>
           {!isLoading && <form onSubmit={handleLoginSubmit}>
        
     <h2>Register</h2>
      <div className="row mb-3">
       <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-3">Name :</label>
       <div className="col-sm-10 pt-3">
       <input   onBlur={handleOnBlur}   className="form-control w-50" id="inputEmail3" name="name" placeholder="Your Name"/>
      </div>
     </div>
      <div className="row mb-3">
       <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-3">Email :</label>
       <div className="col-sm-10 pt-3">
       <input   onBlur={handleOnBlur} required type="email" className="form-control w-50" id="inputEmail3" name="email" placeholder="Your Email"/>
      </div>
     </div>
    <div className="row mb-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fs-3">Password :</label>
      <div className="col-sm-10  ">
      <input   onBlur={handleOnBlur}  type="password" className="form-control w-50" name="password" id="inputPassword3" placeholder="Your password"/>
   </div>
   
   </div>
    <div className="row mb-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fs-3">Confirm Password :</label>
      <div className="col-sm-10  ">
      <input   onBlur={handleOnBlur}  type="password" className="form-control w-50" name="password2" id="inputPassword4" placeholder="Re-type Your password"/>
   </div>

   </div>

   
   <div className="row mb-3 text-danger">
  {/*  {error} */}
   </div>
    <div className="d-flex toggle-btn row mb-3">
   <div className="col-sm-8 pt-3">
   <Nav.Link className="home text-black"  as={Link}  to="/login">Already Registered? Please Login</Nav.Link>
   <button type="submit" className="btn  btn-primary  w-50"> Register</button>
   </div>
 
   </div>

</form> }
   {isLoading && <Spinner animation="border" variant="danger"/>}
   {user?.email && <Alert variant="success">
  <Alert.Heading>User Created successfully</Alert.Heading>
   
</Alert>}  
   {authError && <Alert variant="danger">
  <Alert.Heading>{authError}</Alert.Heading>
   
</Alert>}    
       </div>
    );
};

export default Register;