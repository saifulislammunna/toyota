import React, { useEffect, useState } from 'react';
import { Button , Table } from 'react-bootstrap';
 

const ManageProducts = () => {
  
    const [products, setProducts] = useState([]);
   

    useEffect(()=>{
        const url = `https://fierce-sands-31991.herokuapp.com/products`
        /* console.log(url); */
        fetch(url)
        .then(res => res.json())
        .then(data =>  setProducts(data));
    },[]);

    const handleDelete = _id => {
      const url =  `https://fierce-sands-31991.herokuapp.com/products/${_id}`
      fetch(url,{
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data); 
         if(data.deletedCount){
              alert('Are you sure')
              const remaining = products.filter(product => product._id !== _id);
              setProducts(remaining);

        } 
       
      })
  };
     
    return (
        <div>
            <h2>Manage All   Products : {products.length}</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
       
      <th>Name</th>
      <th>Image</th>
      <th>Product Id</th>
      <th>Deleting Products</th>
    </tr>
  </thead>
  <tbody>
      {products.map((product)=> (  
        
      <tr key={product._id}>
      
      <td>{product.name}</td>
      <td><img src={product.img} alt="" /> </td>
      <td>{product._id}</td>
      <td><Button  onClick={ () => handleDelete(product._id)} className="bg-danger">Delete</Button ></td>
    </tr>))}
   
   
    
     
  </tbody>
</Table>
        </div>
    );
};

export default ManageProducts;