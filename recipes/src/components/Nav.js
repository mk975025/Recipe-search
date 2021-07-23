import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Link to="/" className="Nav__brand">
          <h3>Recipe Search App</h3>
        </Link>

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/nutrition-labels">
                Nutrition Labels
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
