import React from "react";

export default function Recipe({ title, image, calories, ingredients }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="Recipe" />
      <h3>Calories: {calories}</h3>
      <h4>Ingredients: </h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
