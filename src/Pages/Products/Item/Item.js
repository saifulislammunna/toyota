import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button , Card, CardGroup } from 'react-bootstrap';

const Item = ({ product}) => {
     
    const { _id, name, price, description, img } = product;
    
    return (
        <div>
        <div className="single-service">
            {/* card group added */}
               <CardGroup >
                 <Card  className=" ">
                      <Card.Img variant="top" src={img} className="  "  width="450" height="350" />
                     <Card.Body>
                     <Card.Title className="fs-2">   {name}</Card.Title>
  
                        < p className="text-start"> {description}</p>
                        <h5>Price: {price}</h5>
                        <div>
                          <Link to={`/products/${_id}`} ><Button> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button> </Link>
                     </div>
                  </Card.Body>
                </Card>
            </CardGroup>
        </div>
  
    </div>
    );
};

export default Item;