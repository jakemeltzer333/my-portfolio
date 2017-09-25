import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path = '/' render = {() =>
        <Home />} 
        />
        <Route exact path = '/about' render = {() => 
        <About />} 
        />
        <Route exact path = '/projects' render = {() =>
        <Projects />} 
        />
        <Route exact path = '/interests' render = {() =>
        <Interests />} 
        />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
