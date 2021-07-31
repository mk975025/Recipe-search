import React from "react";
import styles from "./Styles/Recipe.module.css";

export default function Recipe({ title, image, calories, ingredients }) {
  return (
    <div className={styles.recipe_container}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={image} alt="Recipe" />
      <h3 className={styles.calories}>Calories: {calories}</h3>
      <ul className={styles.list}>
        {ingredients.map((ingredient, index) => (
          <li className={styles.listItem} key={index}>
            {ingredient.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
