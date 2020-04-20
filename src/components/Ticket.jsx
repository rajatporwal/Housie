import React, { useState } from "react";
import tambola from "tambola-generator";
import { Beforeunload } from "react-beforeunload";

const generateTicket = () => {
  return tambola.getTickets(1).flat(Infinity);
};

const onClickHandler = setNumbers => {
  setNumbers(generateTicket);
};

const Ticket = () => {
  const [numbers, setNumbers] = useState(tambola.getTickets(1).flat(Infinity));
  return (
    <Beforeunload onBeforeunload={() => "You'll lose your data!"}>
      <div className="wrapper">
        <div className="ticket">
          <div className="ticket-header">
            <div className="ticket-header__text">Ticket</div>
            <svg
              class="ticket-header__icon"
              onClick={() => onClickHandler(setNumbers)}
            >
              <use xlinkHref="img/sprite.svg#icon-refresh-ccw" />
            </svg>
          </div>
          <div class="grid-container">
            {numbers.map(ele => {
              return <div className="grid-item">{ele === 0 ? null : ele}</div>;
            })}
          </div>
        </div>
      </div>
    </Beforeunload>
  );
};

export default Ticket;
