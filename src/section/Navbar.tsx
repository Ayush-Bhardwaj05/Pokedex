import React, { useEffect, useState } from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationRoutes = [
    { name: "Search", route: "/search" },
    { name: "Compare", route: "/compare" },
    { name: "Pokemon", route: "/pokemon" },
    { name: "My List", route: "/list" },
    { name: "About", route: "/about" },
  ];

  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, navigationRoutes]);

  function ul(index: number) {
    const underlines = document.querySelectorAll<HTMLElement>(".underline");
    underlines.forEach((underline, i) => {
      underline.style.transform = `translate3d(${index * 100}%, 0, 0)`;
    });
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="block">
        <img
          src={pokeballIcon}
          alt="Pokeball Icon"
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
      <div className="data">
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="underline"></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index} onClick={() => setIsMenuOpen(false)}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      
    </nav>
  );
}
