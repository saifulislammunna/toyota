import React from 'react';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const {user, logout} = useAuth();    

    return (
       <div>
            <h1 className="dashboard">Dashboard</h1>
        <div>
            
            <div class="sidenav">
        <a href="#pay">pay</a>
        <Link to="/orders"><Button color="none">My Orders</Button></Link>
         <a href="#review">Review</a>
       {
          user?.email ? <Button    onClick={logout} className="log-out"  >Log out</ Button>
        :
         ''}  
 {/*  <a href="#contact">Contact</a> */}
</div>

   <div class="main">
        
    </div>
   </div>
 </div>
    );
};

export default Dashboard;