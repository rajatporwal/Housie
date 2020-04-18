import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Link to="/ticket" className="btn btn--white btn--animated">
          Generate A Ticket
        </Link>
        <Link to="/pick_coins" className="btn btn--white btn--animated">
          Pick Coins
        </Link>
        <Link to="/home" className="btn btn--white btn--animated">
          Create Rules
        </Link>
      </div>
    </div>
  );
};

export default Home;
