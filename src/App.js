import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";


function App() {
 const APP_ID = "9632148e";
 const APP_KEY = "15ef674d9529f9809ac82b97c842378a";

 
 const [recipes,setRecipes] = useState(0);

 useEffect(()=>{
   getRecipes();
 },[]);

 const getRecipes = async()=>{
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    return(
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">
            Buscar
          </button>
        </form>
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label}
           calories={recipe.recipe.calories}
            image={recipe.recipe.image} 
            
            />
        ))}

      </div>
    );
  };

 

}

export default App;
