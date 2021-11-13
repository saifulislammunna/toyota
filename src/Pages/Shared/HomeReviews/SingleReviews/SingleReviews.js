import React from 'react';
import {   Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt,faStar   } from '@fortawesome/free-solid-svg-icons'
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
                  <h4>{email}</h4>
                < p className="text-start"> {description}</p>
                   <div  >
                   <FontAwesomeIcon  style={{color:"#FFC014"}}   icon={ faStar  } />
                   <FontAwesomeIcon  style={{color:"#FFC014"}}  icon={ faStar  } />
                   <FontAwesomeIcon style={{color:"#FFC014"}}   icon={ faStar  } />
                   <FontAwesomeIcon style={{color:"#FFC014"}}   icon={ faStar  } />
                   <FontAwesomeIcon  style={{color:"#FFC014"}}  icon={ faStarHalfAlt } />
                   
                   </div>
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

