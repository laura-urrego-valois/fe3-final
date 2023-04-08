import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { themeState, themeDispatch } = useContextGlobal();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <nav className={themeState.class}>
      <Link to="/">
        <h3>Home🏠</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact✉️</h3>
      </Link>
      <Link to="/favs">
        <h3>Favorites🌟</h3>
      </Link>
      <button onClick={switchTheme} className="theme-button">
        {themeState.theme ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
