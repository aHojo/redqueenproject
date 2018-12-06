import React from 'react';

const HeroIcon = (props) => {

    return (
        <div className='hero'>
            <img className='hero__icon' src={`https://via.placeholder.com/${props.size}`} alt="" />
        </div>
    );
}

export default HeroIcon;