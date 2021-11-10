import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import Dashboard from './Components/Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
