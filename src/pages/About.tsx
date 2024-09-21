import React from "react";
import Wrapper from "../section/Wrapper";
import avatarImage from "../assets/pikachu.png";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="Ayush Profile" className="profile-image" />
      <h1 className="profile-text">Hi, I am Ayush</h1>
      <h2 className="profile-text">The creator of this awesome Pokedex</h2>
      <h4 className="profile-text">
        This project was created as a personal initiative to learn and grow in
        the world of web development.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/Ayush-Bhardwaj05">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/ayush-bhardwaj-ayush0505/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
