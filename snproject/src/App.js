import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import Services from './components/Services';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />  
        {/* <Carousel /> */}
        <Jumbotron />
        <Services />
      </div>
    );
  }
}

export default App;

