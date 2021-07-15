import React from "react";

export default function Recipe({ title, id, calories, ingredients }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Calories: {calories}</h3>
    </div>
  );
}
