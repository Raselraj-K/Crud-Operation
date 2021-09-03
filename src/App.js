// import logo from './logo.svg';
 import './App.css';
import Insertcrud from './insertCrud';
import Login from './login';
import AdminDashboard from './adminDashboard';
import AdminRegister from './adminRegister';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import Protected from './protected';
import UserDashboard from './userDashboard';
import AddProduct from './addProduct';
import Userdetails from './userdetail';
import Deliver from './deliver';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          
          <Route  path="/admindashboard">
            <Protected Cmp = {AdminDashboard}/>
          </Route>
          
          <Route  path="/productregister">
            <Protected Cmp = {AdminRegister}/>
          </Route> 

          <Route  path="/userdashboard">
            <Protected Cmp = {UserDashboard}/>
          </Route> 

          <Route  path="/addproduct">
            <Protected Cmp = {AddProduct}/>
          </Route>

          <Route  path="/user">
            <Protected Cmp = {Userdetails}/>
          </Route>

          <Route  path="/deliver">
            <Protected Cmp = {Deliver}/>
          </Route>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
