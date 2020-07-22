import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Creatives from './pages/Creatives';
import Beats from './pages/Beats';
import About from './pages/About';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import langData from './data/language.js'


class App extends Component {

  state = {
    lang: langData['lang']
  }

  changeLanguage = () => {

    if (this.state.lang === "EN") {
      this.setState({
        lang: 'FR'
      })
      langData['lang'] = "FR"

    } else {
      this.setState({
        lang: 'EN'
      })
      langData['lang'] = "EN"

    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="vision-app">
          <Navbar changeLanguage={this.changeLanguage} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/creatives' component={Creatives} />
            <Route path='/beats' component={Beats} />
            <Route path='/about' component={About} />
            <Route path='/profile' component={Profile} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
