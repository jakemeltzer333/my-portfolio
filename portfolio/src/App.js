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

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';



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
        <Route exact path = '/contact' render = {() =>
        <Contact />}/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
