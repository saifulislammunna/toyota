import React, { useState } from 'react';
import { Alert, Button  } from 'react-bootstrap';
import './MakeAdmin.css';


const MakeAdmin = () => {

   const [email, setEmail] = useState('');
   const [success,setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://fierce-sands-31991.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                 
                setSuccess(true);
            }
            
        })
        e.preventDefault();
    }
    return (
        <div className="admin">
            <h2>Make An admin</h2>
            <form onSubmit={ handleAdminSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fs-3">Email :</label>
            <div className="col-sm-10 pt-3">
              <input   onBlur={handleOnBlur}  required type="email" className="make-admin" id="inputEmail3"  placeholder="Your Email"/>
              
           </div>
           
          </div>
          <Button type="submit" >Make Admin</Button >
            </form>
            {success && <Alert variant="success">
  <Alert.Heading>Made Admin successfully</Alert.Heading>
   
</Alert>}
        </div>
    );
};

export default MakeAdmin;