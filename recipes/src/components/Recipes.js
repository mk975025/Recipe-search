import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import styles from "./Styles/Recipes.module.css";

export default function Recipes() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cookies");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "0ea4476c15af3a504a8878f0b3cbbbe6";
  const API_ID = "3d45a097";

  useEffect(() => {
    setLoading(true);
    fetchRecipes();
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
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      setQuery(search);
      setSearch("");
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.recipes_container}>
      <form className={styles.form_wrapper} onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search for recipes"
          className={styles.searchbar}
          value={search}
          onChange={updateSearch}
        />
        <button className={styles.search_button} type="submit">
          Search
        </button>
      </form>

      {typeof recipes[0] !== "undefined" && (
        <div className={styles.recipes}>
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
