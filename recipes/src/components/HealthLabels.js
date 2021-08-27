import React from "react";
import { useState, useEffect } from "react";
import Nutrition from "./Nutrition";
import styles from "./Styles/HealthLabels.module.css";

export default function HealthLabels() {
  const [query, setQuery] = useState("milk");
  const [nutrition, setNutrition] = useState([]);
  const [search, setSearch] = useState("");

  const NUTRITION_API_KEY = "b341aafccfc844c75dafbec9590327c8";
  const NUTRITION_API_ID = "4656ed26";

  useEffect(() => {
    fetchNutrition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const fetchNutrition = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=cooking&ingr=${query}`
    );
    const data = await response.json();
    setNutrition(data.healthLabels);
    //console.log(data.healthLabels);
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

  const peanutFilter = () => {
    setQuery("peanut-free");
  };

  return (
    <div className={styles.health_container}>
      <h1>Nutrition Labels page</h1>
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
      <div>
        <button onClick={peanutFilter}>Peanut Free</button>
      </div>
      <div className={styles.health}>
        {nutrition.map((label, index) => (
          <Nutrition key={index} healthLabel={label} />
        ))}
      </div>
    </div>
  );
}
