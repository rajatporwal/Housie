import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <svg class="onlineIcon">
        <use xlinkHref="img/sprite.svg#icon-dot-single" />
      </svg>
      <h2>{room}</h2>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <svg class="onlineIcon">
          <use xlinkHref="img/sprite.svg#icon-cross" />
        </svg>
      </a>
    </div>
  </div>
);

export default InfoBar;
