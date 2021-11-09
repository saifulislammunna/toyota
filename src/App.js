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
 

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
         {/*  <PrivateRoute path="/appointment">
            <Appointment/>
          </PrivateRoute > */}
          <Route path="/home">
            <Home/>
          </Route>
           <Route path="/login">
            <Login/>
          </Route>  
         {/*  <Route path="/Register">
            <Register/>
          </Route> */}
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
                     <NotFound></NotFound>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
