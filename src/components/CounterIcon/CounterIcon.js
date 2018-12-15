import React from 'react';

const CounterIcon = (props) => {

    return (
        <div className='counter'>
            <img className='counter__icon' src={`https://via.placeholder.com/${props.size}`} alt="Counter Hero" />
        </div>
    );
}

export default CounterIcon;