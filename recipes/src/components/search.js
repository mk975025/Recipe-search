import React from "react";

export default function search({ calories, ingredients }) {
  return (
    <div>
      <h3>{calories}</h3>
      <h3>{ingredients}</h3>
    </div>
  );
}
