import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Link to="/ticket" className="btn btn--white btn--animated">
          Generate A Ticket
          <svg class="home-wrapper--icons">
            <use xlinkHref="img/sprite.svg#icon-book-open1" />
          </svg>
        </Link>
        <Link to="/pick_coins" className="btn btn--white btn--animated">
          Pick Coins
          <svg class="home-wrapper--icons">
            <use xlinkHref="img/sprite.svg#icon-dollar-sign" />
          </svg>
        </Link>
        <Link to="/home" className="btn btn--white btn--animated">
          Create Rules
          <svg class="home-wrapper--icons">
            <use xlinkHref="img/sprite.svg#icon-edit" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
