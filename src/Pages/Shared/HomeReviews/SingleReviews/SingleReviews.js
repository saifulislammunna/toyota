import React from 'react';
import {   Card, CardGroup } from 'react-bootstrap';
 
import './SingleReviews.css';
const SingleReviews = ({ product}) => {
      
    const {   name, email, description } = product;
    return (

              
<div>
<div className="single-service">
    {/* card group added */}
       <CardGroup >
         <Card  className=" ">
              
             <Card.Body>
             <Card.Title className="fs-2">   {name}</Card.Title>
                  <h3>{email}</h3>
                < p className="text-start"> {description}</p>
                 
                <div>
                   
             </div>
          </Card.Body>
        </Card>
    </CardGroup>
</div>

</div>
        
        
    );
};

export default SingleReviews;

