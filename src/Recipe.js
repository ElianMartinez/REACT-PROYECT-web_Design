import React from "react";

const Recipe = ({title,calories,image}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;