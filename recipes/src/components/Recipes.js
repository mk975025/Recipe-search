import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Nutrition from "./Nutrition";

export default function Recipes () {
  const [nutritionSearch, setNutritionSearch] = useState("milk");
  const [nutrition, setNutrition] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cookies");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "0ea4476c15af3a504a8878f0b3cbbbe6";
  const API_ID = "3d45a097";

  const NUTRITION_API_KEY = "b341aafccfc844c75dafbec9590327c8";
  const NUTRITION_API_ID = "4656ed26";

  useEffect(() => {
    setLoading(true);
    fetchRecipes();
    fetchNutrition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
    setLoading(false);
  };
  const fetchNutrition = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=cooking&ingr=${nutritionSearch}`
    );
    const data = await response.json();
    setNutrition(data.healthLabels);
    // console.log(data.healthLabels);
    setLoading(false);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="title">Recipe App</h1>

      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search for recipes"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit">Search</button>
      </form>

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
          {nutrition.map((label, index) => (
            <Nutrition key={index} healthLabel={label} />
          ))}
        </div>
      )}
    </div>
  );
};
