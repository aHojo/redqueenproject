import React, { Component } from 'react';

import HeroData from "./utils/heroes.json";

import HeroCard from './components/HeroCard';
import './App.scss';


const arrayToMap = (array) => {
  if (!Array.isArray(array)) {
      return {};
  }

  return array.reduce((aggr, obj) => {
      return {
          ...aggr,
          [obj.id]: obj
      };
  }, {});
};

//Render our hero cards for the app to use. 
const heroRender = (heroList) => {

  return (
    Object.keys(heroList).map((key) => <HeroCard key={heroList[key].id} heroData={heroList} hero={heroList[key]} counters={heroList[key].counters}/>)
  )
}


class App extends Component {
  state = {
    "hero": null,
  }

  componentWillMount() {
    console.log(arrayToMap(HeroData))
    this.setState({
        "hero": arrayToMap(HeroData),
    })

    
}

  render() {
    
    let { hero } = this.state;
    return (
      <div>
    {!hero ? <p>Loading</p> : heroRender(this.state.hero)}
      </div>
    );
  }
}

export default App;
