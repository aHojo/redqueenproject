import React, { Component } from 'react';
import Row from '../Row';
import Column from '../Column';
import HeroIcon from '../HeroIcon';
import CounterIcon from '../CounterIcon';
import CounterCard from '../CounterCard';

import HeroData from "../../utils/heroes.json";

export default class HeroCard extends Component {
    state = {
        "hero": null
    }


    componentWillMount() {

        this.setState({
            "hero": HeroData
        })
    }

    render() {

        return (
            
                <div className='container'>
                    <div className="main" style={{"marginBottom": "0.5rem"}}>
                    <Row style={{"clear": "both"}}>
                        <Column column="col-1-of-3">
                            <HeroIcon size="150"/>
                        </Column>
                        <Column column="col-2-of-3">
                            <div className="main-statsbox" >
                                <div className="row">
                                    <div className="ut-hero-heading">
                                        HERO NAME
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Health</h3>
                                            <p>200</p>
                                        </div>
                                    </div>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Armor</h3>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div className='col-1-of-3'>
                                        <div className="main-stats">
                                            <h3>Shield</h3>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="main-statsbox__description">
                                        <p>Hanzo’s versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.</p>
                                    </div>
                            </div>
                        </Column>
                    </Row>
                    </div>
                    <Row style={{"marginBottom": "0"}}>
                        <div className="position-tab">
                            <Column column="col-1-of-3">
                                <div className="row">
                                    <div className="col-1-of-2 tab-height tab-padding">
                                        <CounterIcon size="150" />
                                    </div>
                                    <div className="col-1-of-2 tab-height tab-padding tab-relative">
                                        <h3 className="vt-ht-center">Hanzo</h3>
                                    </div>
                                </div>
                            </Column>
                            <Column column="col-1-of-3">
                                <div className="row">
                                    <div className="col-1-of-2 tab-height tab-padding">
                                        <CounterIcon size="150" />
                                    </div>
                                    <div className="col-1-of-2 tab-height tab-padding tab-relative">
                                        <h3 className="vt-ht-center">Hanzo</h3>
                                    </div>
                                </div>
                            </Column>
                            <Column column="col-1-of-3">
                                <div className="row">
                                    <div className="col-1-of-2 tab-height tab-padding">
                                        <CounterIcon size="150" />
                                    </div>
                                    <div className="col-1-of-2 tab-height tab-padding tab-relative">
                                        <h3 className="vt-ht-center">Hanzo</h3>
                                    </div>
                                </div>
                            </Column>
                        </div>  
                    </Row>
                    
                    <CounterCard  />
                    
            </div>
        )
    }
}