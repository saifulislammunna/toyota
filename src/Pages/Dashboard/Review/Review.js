import React from 'react';
import { useForm } from 'react-hook-form'; 
 
 
 
import useAuth from '../../../hooks/useAuth';
 
 
import './Review.css';
const Review = (props ) => {
  

    const { register, handleSubmit,reset,   formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
     

        fetch(' https://fierce-sands-31991.herokuapp.com/reviews', {
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
                   alert('Review proccessed successfully')  
                   
                  /*  setBookingSuccess(true);   */
                    reset();
            }
        })

        console.log(data)
    };
    return (
        <div>
            <div>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
       
      <input defaultValue={user.displayName}  {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>} 
       
      <textarea {...register("description")} placeholder="Description" />
      
      <input type="submit"/> 
    </form>
        </div>
     
        
        </div>
    );
};

export default Review;