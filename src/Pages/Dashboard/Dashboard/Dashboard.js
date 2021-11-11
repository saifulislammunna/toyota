import React from 'react';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
 
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
 
const Dashboard = () => {
    const {user, logout} = useAuth();    
    let { path, url } = useRouteMatch();

    return (
       <div>
            <Link to="/dashboard"><h1 className="dashboard" >Dashboard</h1></Link>
        <div>
            
            <div class="sidenav">
            <Link to="/orders"><Button className="bg-dark">My Orders</Button></Link>
        <Link to={`${url}`}><Button className="bg-dark">Pay</Button></Link>
       
        <Link to={`${url}`}><Button className="bg-dark">Review</Button></Link>
        <Link to={`${url}/addProduct`}><Button className="bg-dark">Add a Product</Button></Link>
        <Link to={`${url}`}><Button className="bg-dark">Manage Product</Button></Link>
        <Link to={`${url}/makeAdmin`}><Button className="bg-dark">Make Admin</Button></Link>
         
       {
          user?.email ? <Button    onClick={logout}    >Log out</ Button>
        :
         ''}  
 {/*  <a href="#contact">Contact</a> */}
</div>

   <div class="main">
   <Switch>
         <Route exact path={path}>
            <DashboardHome></DashboardHome>
        </Route>
         < Route  exact  path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
        </Route>
         < Route  exact  path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </Route>
        {/*<AdminRoute path={`${path}/addDoctor`}>
             <AddDoctor></AddDoctor> 
        </AdminRoute>   */}
    </Switch>  
    </div>
   </div>
 </div>
    );
};

export default Dashboard;