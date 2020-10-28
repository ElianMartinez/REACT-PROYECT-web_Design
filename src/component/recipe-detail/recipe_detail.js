import React from 'react';
import './style-componect.css';

const Recipe_detail = (props) => {
     console.log(props.recipeprop.ingredientes);
     
    return (
        <div className="body-wrapper" >
        <div className="wrapper">
        <button onClick={props.handleDisable}>cerrar</button>
        </div>

        </div>
    );
}

export default Recipe_detail;
