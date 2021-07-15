import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/search";

function App() {
  const [search, setSearch] = useState("cookies");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  let API_KEY = "0ea4476c15af3a504a8878f0b3cbbbe6";
  let API_ID = "3d45a097";

  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="">HELLO</h1>
      {!loading &&
        recipes.map((recipe) => {
          <Search
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />;
        })}
    </div>
  );
}

export default App;
