import React from 'react';

const Heros = ({heros}) => {
    console.log("HEROS ", heros.icon_url)
    return (
    <div className="row">
        {heros.map(h => {
            return (
                <div key={h.id}>
                    <p>{h.name}</p>
                    <img src={h.icon_url} alt={h.name}/>
                </div>
            );
        })}
    </div>)
    };

export default Heros;