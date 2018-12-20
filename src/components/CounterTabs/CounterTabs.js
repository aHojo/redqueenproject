import React from 'react';
import CounterIcon from '../CounterIcon';


const CounterTabs = ({tabClick, heroID, currentTab, counter}) => {

    return (
            <div onClick={() => tabClick(heroID)} className="tab col-1-of-3">
                    <div className={currentTab === heroID ? "row tab-border tab-active" : 
                    "row tab-border"}>
                    <div className="col-1-of-2 tab-height tab-padding">
                    {counter.icon_url && <CounterIcon counterIcon={counter.icon_url} />}
                    </div>
                        <div className="col-1-of-2 tab-height tab-padding tab-relative">
                            <h3 className="vt-ht-center">{counter && counter.name}</h3>
                        </div>
                    </div>
            </div>
    );
}

export default CounterTabs;