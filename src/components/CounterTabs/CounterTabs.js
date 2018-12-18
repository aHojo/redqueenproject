import React from 'react';
import CounterIcon from '../CounterIcon';


const CounterTabs = ({tabClick, heroID, currentTab}) => {
    console.log(`HERO: ${heroID}\n CURRENT" ${currentTab}\n`);
    return (
            <div onClick={() => tabClick(heroID)} className="tab col-1-of-3">
                    <div className={currentTab === heroID ? "row tab-border tab-active" : 
                    "row tab-border"}>
                        <div className="col-1-of-2 tab-height tab-padding">
                            <CounterIcon size="150" />
                        </div>
                        <div className="col-1-of-2 tab-height tab-padding tab-relative">
                            <h3 className="vt-ht-center">Hanzo</h3>
                        </div>
                    </div>
            </div>
    );
}

export default CounterTabs;