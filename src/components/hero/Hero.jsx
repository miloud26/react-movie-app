import React from "react";
import heroImg from "../../image/hero-img.jpg";
import "./hero.scss";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero__content">
        <div className="hero__content__title">
          My Hero Acadymedia : World Heros Mission
        </div>
        <div className="hero__content__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          excepturi vitae minus quaerat incidunt porro odio veritatis pariatur!
          Autem nisi ex quia minima est sunt magnam similique dolorem. Eaque
        </div>
        <div className="hero__content__btn">
          <Link to="/movies">
            <button className="btn-one">Watch Now</button>
          </Link>
        </div>
      </div>
      <div className="hero__img">
        <img src={heroImg} alt="hero img" />
      </div>
    </section>
  );
};

export default Hero;
