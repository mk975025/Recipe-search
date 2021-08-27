import React from "react";
import { useState, useEffect } from "react";
import Nutrition from "./Nutrition";
import styles from "./Styles/Recipes.module.css";

export default function HealthLabels() {
  const [nutritionSearch, setNutritionSearch] = useState("milk");
  const [nutrition, setNutrition] = useState([]);

  const NUTRITION_API_KEY = "b341aafccfc844c75dafbec9590327c8";
  const NUTRITION_API_ID = "4656ed26";

  const fetchNutrition = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=cooking&ingr=${nutritionSearch}`
    );
    const data = await response.json();
    setNutrition(data.healthLabels);
    //console.log(data.healthLabels);
    //setLoading(false);
  };

  return (
    <>
      {nutrition.map((label, index) => (
        <Nutrition key={index} healthLabel={label} />
      ))}
    </>
  );
}
