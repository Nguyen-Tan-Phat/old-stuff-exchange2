import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login/Login';
import { Switch } from 'react-router-dom';
import Home from './Home/Home';
import { Router } from 'react-router-dom';


function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
