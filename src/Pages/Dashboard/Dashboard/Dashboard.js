import React from 'react';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';
import {
  
  Switch,
  Route,
  useRouteMatch
 
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AminRoute/AdminRoute';
 
 
const Dashboard = () => {
    const {user, logout,admin} = useAuth();    
    let { path, url } = useRouteMatch();
     
    return (
       <div>
            <Link to="/dashboard"><h1 className="dashboard" >Dashboard</h1></Link>
        <div>
            
            <div class="sidenav">
        {!admin && <div><Link to={`${url}/orders`}><Button className="bg-dark">My Orders</Button></Link>
        <Link to={`${url}/pay`}><Button className="bg-dark">Pay</Button></Link>
       
        <Link to={`${url}/review`}><Button className="bg-dark">Review</Button></Link></div>}
        {admin && <div> <Link to={`${url}/manageAllOrders`}><Button className="bg-dark">Manage All Orders</Button></Link>
        <Link to={`${url}/addProduct`}><Button className="bg-dark">Add a Product</Button></Link>
        <Link to={`${url}/manageProducts`}><Button className="bg-dark">Manage Products</Button></Link>
        <Link to={`${url}/makeAdmin`}><Button className="bg-dark">Make Admin</Button></Link></div>}
         
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
         < Route     path={`${path}/orders`}>
            <MyOrders></MyOrders>
        </Route>
         < Route     path={`${path}/pay`}>
           <Pay></Pay>
        </Route>
         < Route     path={`${path}/review`}>
           <Review></Review>
        </Route>
         < AdminRoute    path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
        </ AdminRoute >
         <  AdminRoute    path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
        </ AdminRoute >
         <  AdminRoute  path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
        </ AdminRoute >
         <  AdminRoute   path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
        </ AdminRoute >
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