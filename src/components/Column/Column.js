import React from 'react';


const Column = (props) => {

    return (
        <div className={props.column} style={{"border": "1px solid black"}}>
            {props.children}
        </div>
    );
}

export default Column;