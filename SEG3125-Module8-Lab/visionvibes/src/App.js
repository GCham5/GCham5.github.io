import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
// import { Button, Nav } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="vision-app">
          <Navbar/>
          <Route exact path='/' component={Home}/>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
