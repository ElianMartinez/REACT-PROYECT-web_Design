import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import SkeletonCard from "./component/skeletonCard";
import Recipe_detail from "./component/recipe-detail/recipe_detail"
function App() {

  const APP_ID = "9632148e";
  const APP_KEY = "15ef674d9529f9809ac82b97c842378a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [contador, setContador] = useState(-1);
  const [detail, setDetail] = useState(null);


  useEffect(() => {
   
      setRecipes(null);
    setTimeout(async () => {
     await getRecipes();
    }, 1000);
    
    
  }, [query]);

  const getRecipes = async () => {
   const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setContador(contador+1);
  };

    const updateSearch = (e) => {
    setSearch(e.target.value);
  };

    const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const handleClick = (recipe) => {
    
     setDetail(recipe);
  }

  const handleClickDisable = () => {
    setDetail(null);
  } 

  let cont = 0;
  return (
    <div id="App" className="App">
    
  
      <div className="Cont">
     <div className="texto-cont">
    <p className="append">Total de Búsquedas</p>  
     <p className="number-cont"> {contador} </p>
     </div>
     </div>

     {detail && <Recipe_detail recipeprop={detail} handleDisable={handleClickDisable} /> }
    
      <div className="container">
        <div className="row1">
          <h2 className="Titulo">¿Qué receta quieres ver?</h2>
        </div>
        <div className="row2">
          <form className="search-form" onSubmit={getSearch}>
            <div className="bar-animation">
            <input
              className="search-bar"
               onChange={updateSearch}
              value={search}
              type="text"
            />
            <FontAwesomeIcon className="arrow"  icon={faArrowRight} />
            <span></span>
            </div>
          </form>
        </div>
      </div>

      <div className="recipes">
     

       
       
        {recipes && recipes.map((recipe) => (
          cont++,
          <Recipe
            key={cont}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            yelid={recipe.recipe.yield}
            handle={handleClick}
            
          />
        ))}

        {!recipes && [1,2,3,4,5,6].map((n) => (<SkeletonCard key={n} />)) } 

      </div>
         
    </div>
  );
}

export default App;
