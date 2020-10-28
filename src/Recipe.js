import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWeight,faBookOpen,faUser} from '@fortawesome/free-solid-svg-icons';

const Recipe = ({title, yelid,calories,image,ingredients,handle}) => { 
    
    const recipeObjet = {
        "title":title,
        "yelid":yelid,
        "calories":calories,
        "image":Image,
        "ingredientes": ingredients
    };

    const handleP = (e) => {
     e.preventDefault();
        handle(recipeObjet);
    }
    let porciones = "";
    if(yelid === 1){
        porciones = yelid;
    }else{
        porciones = yelid-1 + "-" + yelid;
    }
    return( 
        <div className="ft-recipe">
    <div className="ft-recipe__thumb">
        <h3></h3><img src={image} alt="Strawberry Waffle" /></div>
    <div className="ft-recipe__content">
        <div className="content__header">
            <div className="row-wrapper">
    <h2 className="recipe-title">{title}</h2>
                <div className="user-rating"></div>
            </div>
            <ul className="recipe-details">
    <li className="recipe-details-item time"><FontAwesomeIcon className="icons-lettle" icon={faWeight} /><span className="value">{Math.round(calories)}</span><span className="title">calorías</span></li>
    <li className="recipe-details-item ingredients"><FontAwesomeIcon className="icons-lettle" icon={faBookOpen} /><span className="value">  {ingredients.length}</span><span className="title">Ingredientes</span></li>
    <li className="recipe-details-item servings"><FontAwesomeIcon className="icons-lettle" icon={faUser} /><span className="value">{porciones}</span><span className="title">Porciones</span></li>
            </ul>    
        </div>
        <br/>
        <div className="content__footer"><a href="#" onClick={handleP}>Ver Receta</a></div>
    </div>
</div>
    ); 
}
export default Recipe;


