import React from 'react';
import { Button } from 'react-bootstrap';
 
import './Connect.css';
const Connect = () => {

    return (
        <div className= "p-5  touch">
              
       <div    className="p-5 d-flex justify-content-center align-items-center rounded-3">
      <div>
        <h1>Let's Stay In Contact</h1>
        <p className="p-2">Get updates on news, specials and more</p>
        <input  className="form-control" type="text" placeholder="Your Email"/>
        <br/>
        <Button type="submit" >Submit</Button >
 
        
      </div>
       </div>

        </div>
    );
};

export default Connect;