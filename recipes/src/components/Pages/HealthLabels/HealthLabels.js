import { useState, useEffect } from "react";
import HealthLabel from "./HealthLabel";
import styles from "../../Styles/HealthLabels.module.css";

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

  const alcoholFilter = () => {
    setQuery("alcohol-free");
  };

  const immuneSupportive = () => {
    setQuery("immuno-supportive");
  };

  const crustFilter = () => {
    setQuery("crustacean-free");
  };

  const diaryFilter = () => {
    setQuery("diary-free");
  };

  const eggFilter = () => {
    setQuery("egg-free");
  };

  const fishFilter = () => {
    setQuery("fish-free");
  };

  const fodMAP = () => {
    setQuery("fodmap-free");
  };

  const glutenFilter = () => {
    setQuery("gluten-free");
  };

  const ketoFilter = () => {
    setQuery("keto-friendly");
  };

  const kosher = () => {
    setQuery("kosher");
  };

  const lowPotassium = () => {
    setQuery("low-potassium");
  };

  const lupine = () => {
    setQuery("lupine-free");
  };

  const med = () => {
    setQuery("Mediterranean");
  };

  const mustardFree = () => {
    setQuery("mustard-free");
  };

  const lowFat = () => {
    setQuery("low-fat-abs");
  };

  const oil = () => {
    setQuery("No-oil-added");
  };

  const noSugar = () => {
    setQuery("low-sugar");
  };

  const paleo = () => {
    setQuery("paleo");
  };

  const pescatarian = () => {
    setQuery("pecatarian");
  };

  const porkFree = () => {
    setQuery("pork-free");
  };

  const redMeat = () => {
    setQuery("red-meat-free");
  };

  const sesame = () => {
    setQuery("sesame-free");
  };

  const shellFish = () => {
    setQuery("shellfish-free");
  };

  const soy = () => {
    setQuery("soy-free");
  };

  const sugarCon = () => {
    setQuery("sugar-conscious");
  };

  const treeNut = () => {
    setQuery("tree-nut-free");
  };

  const vegan = () => {
    setQuery("vegan");
  };

  const vegetarian = () => {
    setQuery("vegetarian");
  };

  const wheat = () => {
    setQuery("wheat-free");
  };

  return (
    <div className={styles.health_container}>
      <h1>Health Labels page</h1>
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
        <button onClick={alcoholFilter}>Alcohol Free</button>
        <button onClick={immuneSupportive}>Immune System Support</button>
        <button onClick={crustFilter}>Crustacean Free</button>
        <button onClick={diaryFilter}>Diary Free</button>
        <button onClick={eggFilter}>Egg Free</button>
        <button onClick={fishFilter}>Fish Free</button>
        <button onClick={fodMAP}>FODMAP Free</button>
        <button onClick={ketoFilter}>Keto Friendly</button>
        <button onClick={kosher}>Kosher</button>
        <button onClick={lowPotassium}>Low potassium</button>
        <button onClick={lupine}>Lupine-free</button>
        <button onClick={med}>Mediterranean</button>
        <button onClick={mustardFree}>Mustard Free</button>
        <button onClick={lowFat}>Low Fat Abs</button>
        <button onClick={oil}>No oil added</button>
        <button onClick={noSugar}>No Sugar</button>
        <button onClick={paleo}>Paleo</button>
        <button onClick={pescatarian}>Pescatarian</button>
        <button onClick={porkFree}>Pork Free</button>
        <button onClick={redMeat}>Red Meat Free</button>
        <button onClick={sesame}>Sesame Free</button>
        <button onClick={shellFish}>Shellfish Free</button>
        <button onClick={soy}>Soy Free</button>
        <button onClick={sugarCon}>Sugar Conscious</button>
        <button onClick={treeNut}>Tree Nut Free</button>
        <button onClick={vegan}>Vegan</button>
        <button onClick={vegetarian}>Vegetarian</button>
        <button onClick={wheat}>Wheat Free</button>
      </div>
      <div className={styles.health}>
        {nutrition.map((label, index) => (
          <HealthLabel key={index} healthLabel={label} />
        ))}
      </div>
    </div>
  );
}
