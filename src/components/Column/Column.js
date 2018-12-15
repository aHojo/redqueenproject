import React from 'react';


const Column = (props) => {

    return (
        <div className={props.column}>
            {props.children}
        </div>
    );
}

export default Column;