import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav_container}>
        <NavLink to="/" className={styles.Nav_brand}>
          <h3>Recipe Search</h3>
        </NavLink>

        <div className={styles.Nav_right}>
          <ul className={styles.Nav_item_wrapper}>
            <li className={styles.Nav_item}>
              <NavLink className={styles.Nav_link} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.Nav_item}>
              <NavLink
                activeClassName={styles.selected}
                className={styles.Nav_link}
                to="/recipes"
              >
                Recipes
              </NavLink>
            </li>
            <li className={styles.Nav_item}>
              <NavLink
                activeClassName={styles.selected}
                className={styles.Nav_link}
                to="/nutrition-labels"
              >
                Nutrition Labels
              </NavLink>
            </li>
            <li className={styles.Nav_item}>
              <NavLink
                activeClassName={styles.selected}
                className={styles.Nav_link}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
