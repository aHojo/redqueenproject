import React from 'react';

const CounterIcon = ({counterIcon}) => {

    return (
        <div className='counter'>
            <img className='counter__icon' src={counterIcon} alt="Counter Hero" />
        </div>
    );
}

export default CounterIcon;