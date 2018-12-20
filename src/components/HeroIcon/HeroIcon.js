import React from 'react';

const HeroIcon = ({heroImg}) => {

    return (
        <div className='hero'>
            <img className='hero__icon' src={`${heroImg}`} alt="Hero" />
        </div>
    );
}

export default HeroIcon;