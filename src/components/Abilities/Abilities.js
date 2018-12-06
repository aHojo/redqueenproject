import React from 'react';


let Abilities = ({abilities}) => {
    console.log("ABILITY ", abilities)
    return (
        <div style={{"backgroundColor": "black", "color": "white"}}>
            {abilities.map(a => {
                return (
                    <div>
                        <p>{a.name}</p>
                        <img src={a.ability_icon} alt={a.ability_icon} style={{"height": "100px", "width": "100px"}}/>
                    </div>
                );
            })}
        </div>
    );
}

export default Abilities;