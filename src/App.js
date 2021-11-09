import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
