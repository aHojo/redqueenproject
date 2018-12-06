import React from 'react';

const CounterIcon = (props) => {

    return (
        <div className='counter'>
            <img className='counter__icon' src={`https://via.placeholder.com/${props.size}`} alt="" />
        </div>
    );
}

export default CounterIcon;