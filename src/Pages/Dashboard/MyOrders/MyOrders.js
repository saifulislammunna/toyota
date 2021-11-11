import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
    },[])
    return (
        <div>
            <h2>My Orders : {myOrders.length}</h2>
            <Table striped bordered hover>
  <thead>
    <tr>
       
      <th>Name</th>
      <th>Email Address</th>
      <th>Product Id</th>
    </tr>
  </thead>
  <tbody>
      {myOrders.map((row)=> (  
        
      <tr key={row._id}>
      
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row._id}</td>
    </tr>))}
   
   
    
     
  </tbody>
</Table>
        </div>
    );
};

export default MyOrders;