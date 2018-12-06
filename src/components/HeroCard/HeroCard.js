import React, { Component } from 'react';
import Row from '../Row';
import Column from '../Column';
import HeroIcon from '../HeroIcon';
import CounterIcon from '../CounterIcon';

export default class HeroCard extends Component {
    state = {}

    render() {

        return (
            <div className='container'>
                <Row styles='row position-main' style={{"clear": "both"}}>
                    <Column column="col-1-of-3">
                        <HeroIcon size="150"/>
                    </Column>
                    <Column column="col-2-of-3">
                        <div className="main-statsbox" >
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
                <Row styles='row'>
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
                            
                        </Column>
                        <Column column="col-1-of-3">
                            
                        </Column>
                    </div>  
                </Row>
            </div>
        )
    }
}