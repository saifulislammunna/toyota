import React, { useEffect, useState } from 'react';
import {   Button  } from 'react-bootstrap';
import { useParams } from 'react-router';
import Shipping from '../../Shared/Shipping/Shipping/Shipping';

const ProductsDetails = () => {
    
    const {_id} = useParams();
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
    
        fetch('https://fierce-sands-31991.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const selected = data.find ( s => s._id == _id)
               console.log(selected) 
               
               setProduct(selected);
        });
    },[]);
    return (
        <div className="service-detail">
      
            
           <div className="service-img p-3">
            <img src={product.img}  alt="" />
            </div>
           
           <div className="d-flex p-3 selected-item align-items-center justify-content-center">
                      <div className=" selected-item   p-5">
         
             
                       <h1 className="pb-2 ">{ product.name} </h1>
                           <p className="p-2 ">{product.description}</p>
                           <Button   className="btn   ">
                  
                  <span className="  "> Book Now</span></Button> 
                       </div >
            
                
           </div>
            
            <div>
               <Shipping
              
               ></Shipping>
            </div>
           
         </div>
     
        
    );
};

export default ProductsDetails;