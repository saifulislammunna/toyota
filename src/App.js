 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Products from './Pages/Products/Products/Products';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
 import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';  
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails/ProductsDetails';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
 

function App() {
  return (
    <div className="App">
        <AuthProvider>  
       <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
           <Route path="/login">
            <Login/>
          </Route>  
           <Route exact path="/products">
             <Products></Products>
          </Route>  
           <PrivateRoute exact path="/products/:_id">
              <ProductsDetails></ProductsDetails>
          </PrivateRoute>  
          <Route path="/register">
            <Register/>
          </Route> 
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute > 
          <PrivateRoute path="/orders">
            <MyOrders/>
          </PrivateRoute > 
           
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
       </Router>
        </AuthProvider>
      </div>
  );
}

export default App;
