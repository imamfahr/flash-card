import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BroserRouter, Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
//components
import Navbar from './components/Navbar'

//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FlashPage from './pages/Flashpage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />

      {/* pages */}
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/FlashPage' component={FlashPage} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
