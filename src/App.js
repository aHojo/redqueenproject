import React, { Component } from 'react';
import Home from './components/Home';
import HeroCard from './components/HeroCard';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <HeroCard />
      </div>
    );
  }
}

export default App;
