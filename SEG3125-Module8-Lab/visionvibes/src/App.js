import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Creatives from './pages/Creatives';
import Beats from './pages/Beats';

// import { Button, Nav } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="vision-app">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/creatives' component={Creatives}/>
          <Route path='/beats' component={Beats}/>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
