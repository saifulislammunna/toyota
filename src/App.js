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
 

function App() {
  return (
    <div className="App">
        <AuthProvider>  
       <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
           <Route path="/login">
            <Login/>
          </Route>  
           <Route path="/products">
             <Products></Products>
          </Route>  
          <Route path="/register">
            <Register/>
          </Route> 
          <Route path="/dashboard">
            <Dashboard/>
          </Route> 
          <Route exact path="/">
            <Home/>
          </Route>
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
