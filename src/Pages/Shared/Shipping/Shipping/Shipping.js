import React from 'react';
import { useForm } from 'react-hook-form'; 
 
import useAuth from '../../../../hooks/useAuth';
import {  getStoredCart } from '../../../../utilities/fakedb';  
 
import './Shipping.css';

const Shipping = (props) => {
    

    const { register, handleSubmit,reset,   formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        
         const savedCart = getStoredCart();
        data.order = savedCart;  

        fetch('https://fierce-sands-31991.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.insertedId){
                    
                 
                    reset();
            }
        })

        console.log(data)
    };

    const onClick = () => {
        alert('submitting successfully') 
        reset(); 
    }
    return (
        <div>
            <div>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
       
      <input defaultValue={user.displayName}  {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>} 
      <input  defaultValue=" " placeholder="Address" {...register("address")} />
      <input placeholder="city" defaultValue=" " {...register("city")} />
      <input placeholder="phone number" defaultValue=" " {...register("phone")} />
      <input onClick={onClick} type="submit"/> 
    </form>
        </div>
     
       
        </div>
    );
};

export default Shipping;