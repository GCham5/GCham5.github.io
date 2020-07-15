import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Services from './components/Services';
import Creatives from './components/Creatives';
// import { Button, Nav } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="vision-app">
        <Navbar/>
        <Landing/>
        <Services/>
        <Creatives/>
      </div>
    )
  }
}

export default App;
