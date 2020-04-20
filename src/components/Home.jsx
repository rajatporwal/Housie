import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <button className="home-button" type="submit">
          <Link to="/ticket" className="home-button--link">
            Generate A Ticket
            <svg class="home-button--icons">
              <use xlinkHref="img/sprite.svg#icon-book-open1" />
            </svg>
          </Link>
        </button>
        <button className="home-button" type="submit">
          <Link to="/pick_coins" className="home-button--link">
            Pick Coins
            <svg class="home-button--icons">
              <use xlinkHref="img/sprite.svg#icon-dollar-sign" />
            </svg>
          </Link>
        </button>
        <button className="home-button" type="submit">
          <Link to="/home" className="home-button--link">
            Create Rules
            <svg class="home-button--icons">
              <use xlinkHref="img/sprite.svg#icon-edit" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
