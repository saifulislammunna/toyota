import React from 'react';
import { Button , Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Vehicle.css';
const Vehicle = ({ product}) => {
      
    const { _id, name, price, description, img } = product;
    return (
       
  <div>
      <div className="single-product p-2">
          {/* card group added */}
             <CardGroup >
               <Card  className=" ">
                    <Card.Img variant="top" src={img} className="  "  width="450" height="350" />
                   <Card.Body>
                   <Card.Title className="fs-2">   {name}</Card.Title>

                      < p className="text-start"> {description}</p>
                      <h5>Price: {price}</h5>
                      <div>
                        <Link to={`/products/${_id}`} ><Button> {/* <FontAwesomeIcon icon={faInfo } /> */} Buy Now</Button> </Link>
                   </div>
                </Card.Body>
              </Card>
          </CardGroup>
      </div>

  </div>
    );
};

export default Vehicle;
