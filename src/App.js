import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';
import Login from './Shared/Login/Login';
import Signup from './Shared/Signup/Signup';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import Explore from './Components/Pages/Explore/Explore';
import AuthProvider from './Context/AuthProvider';
import PurchaseItem from './Components/Pages/Purchase/PurchaseItem/PurchaseItem';


function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <PurchaseItem></PurchaseItem>
          </PrivateRoute>
          <PrivateRoute path="/explore">
            <Explore></Explore>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
          <Signup></Signup>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;