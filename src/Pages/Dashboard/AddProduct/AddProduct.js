import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);

        axios.post('https://fierce-sands-31991.herokuapp.com/products',data)
        .then(res => {
            console.log(res);
              if(res.data.insertedId){
               alert('added successfully');
               reset();
           } 
        })
    }
  


    return (
        <div className="add-product">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
              <textarea {...register("description")} placeholder="Description" />
              <input type="number" {...register("price")} placeholder="Price"/>
              <input {...register("img")} placeholder="image url"/>
              <input type="submit" />
           </form>
        </div>
    );
};

export default AddProduct;