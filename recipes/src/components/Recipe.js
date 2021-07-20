import React from "react";

export default function Recipe({ title, image, calories, ingredients }) {
//  console.log(ingredients);
  return (
    <div>
      <h2>{title}</h2>
      {/* <img src={image} alt="Recipe image"/> */}
      <h3>Calories: {calories}</h3>
      <ol>
        {ingredients.map((e)=>{
          console.log(e);
          <li>
            {e.foodCategory}
          </li>
        })}
      </ol>
    </div>
  );
}
