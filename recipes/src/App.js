import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

function App() {
  const [search, setSearch] = useState("cookies");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "0ea4476c15af3a504a8878f0b3cbbbe6";
  const API_ID = "3d45a097";

  useEffect(() => {
    setLoading(true);
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
    setLoading(false);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1 className="title">Recipe App</h1>
      {typeof recipes[0] !== "undefined" && (
        <div className="recipe">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
