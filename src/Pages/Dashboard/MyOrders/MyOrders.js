import React, { useEffect, useState } from 'react';
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
        </div>
    );
};

export default MyOrders;