import React, { useEffect, useState } from 'react';
import { Button , Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
 

const MyOrders = () => {
    const {user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
   

    useEffect(()=>{
        const url = `https://fierce-sands-31991.herokuapp.com/orders?email=${user.email}`
        /* console.log(url); */
        fetch(url)
        .then(res => res.json())
        .then(data =>  setMyOrders(data));
    },[]);

    const handleDelete = _id => {
      const url =  `https://fierce-sands-31991.herokuapp.com/orders/${_id}`
      fetch(url,{
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data); 
         if(data.deletedCount){
              alert('Are you sure')
              const remaining = myOrders.filter(service => service._id !== _id);
              setMyOrders(remaining);

        } 
       
      })
  };
     
    return (
        <div>
            <h2>My Orders : {myOrders.length}</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
       
      <th>Name</th>
      <th>Email Address</th>
      <th>Product Id</th>
      <th>Deleting Order</th>
    </tr>
  </thead>
  <tbody>
      {myOrders.map((order)=> (  
        
      <tr key={order._id}>
      
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order._id}</td>
      <td><Button  onClick={ () => handleDelete(order._id)} className="bg-danger">Delete</Button ></td>
    </tr>))}
   
   
    
     
  </tbody>
</Table>
        </div>
    );
};

export default MyOrders;