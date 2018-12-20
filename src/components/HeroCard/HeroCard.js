import React, { Component } from 'react';
import Row from '../Row';
import Column from '../Column';
import HeroIcon from '../HeroIcon';
import CounterCard from '../CounterCard';
import CounterTabs from '../CounterTabs';



const getCounter = (heroData, counter) => {

        for(let key in heroData) {
            if (counter.id === Number(key)) {
                return heroData[key];
            }
        }
}

export default class HeroCard extends Component {
    state = {
        "hero": null,
        "tabState": false,
        "currentTab": null,
        "counterOne": null,
        "counterTwo": null,
        "counterThree": null,
        "counterInfo": null
    }

    

    componentWillMount() {

        const {hero} = this.props;
        this.setState({
            "hero": hero,
            counterOne: getCounter(this.props.heroData, hero.counters[0]),
            counterTwo: getCounter(this.props.heroData, hero.counters[1]),
            counterThree: getCounter(this.props.heroData, hero.counters[2]),
        });
    }


    handleTabClick = (id) => {
        let {currentTab} = this.state;
        

        if(currentTab === id) {
            this.setState(() => {
                return {
                    "tabState": false,
                    "currentTab": null
                }
            });
        }
        else
        {
            this.setState(() => {
                return {
                    "tabState": true,
                    "currentTab": id,
                }
            });
        }
    } 
    render() {
        let {tabState, currentTab, hero, counterInfo, counterOne, counterTwo, counterThree} = this.state;
        let {name, health, armor, shield, description, counters, icon_url} = hero;
        
        return (

                
                <div className='container'>
                    <div className="main" style={{"marginBottom": "0.5rem"}}>
                    <Row style={{"clear": "both"}}>
                        <Column column="col-1-of-3">
                            <HeroIcon heroImg={icon_url}/>
                        </Column>
                        <Column column="col-2-of-3">
                            <div className="main-statsbox" >
                                <div className="row">
                                    <div className="ut-hero-heading">
                                        {name}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Health</h3>
                                            <p>{health}</p>
                                        </div>
                                    </div>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Armor</h3>
                                            <p>{armor ? armor : 0}</p>
                                        </div>
                                    </div>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Shield</h3>
                                            <p>{shield}</p>
                                        </div>
                                    </div>
                                </div>
                                    {/* <div className="main-statsbox__description">
                                        <p className="main-statsbox__description-text">{description}</p>
                                    </div> */}
                            </div>
                        </Column>
                    </Row>
                    </div>
                    <div className="margin-sides-small">
                        <div className="row">
                            {counterOne &&<CounterTabs tabClick={this.handleTabClick}  
                            currentTab={currentTab} 
                            heroID={counterOne.id} counter={counterOne}/>}

                            {counterTwo &&<CounterTabs tabClick={this.handleTabClick}  
                            currentTab={currentTab} 
                            heroID={counterTwo.id} counter={counterTwo}/>}

                            {counterThree &&<CounterTabs tabClick={this.handleTabClick}  
                            currentTab={currentTab} 
                            heroID={counterThree.id} counter={counterThree}/>}

                        </div>
                    </div>
                    
                    <CounterCard  visibility={tabState} />
                    
            </div>
            
        )
    }
}