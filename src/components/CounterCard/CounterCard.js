import React from 'react';
import CounterIcon from '../CounterIcon';


const  CounterCard = ({visibility, tabClick}) => {

        return (
            
                <div onClick={tabClick} className={visibility ? "counter-card" : "counter-card counter-invis"}>
                    <div className="counter-card__content">
                        <div className="counter-card__left">
                            <CounterIcon size="150" />
                        </div>
                        <div className="counter-card__right">
                            <div className="row">
                                <div className="ut-hero-heading ut-margin-bottom-big">
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
                    </div>
                </div>
            
        )
}

export default CounterCard;