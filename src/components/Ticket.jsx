import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import tambola from "tambola-generator";
import { Beforeunload } from "react-beforeunload";
import Chat from "./ChatBox/Chat/Chat";

const generateTicket = () => {
  return tambola.getTickets(1).flat(Infinity);
};

const onClickHandler = (setNumbers, setSaveTicket, type) => {
  type ? setSaveTicket(type) : setNumbers(generateTicket);
};

const Ticket = () => {
  const [numbers, setNumbers] = useState(tambola.getTickets(1).flat(Infinity));
  const [saveTicket, setSaveTicket] = useState(false);
  const name = useSelector(state => state.rootReducer.user.name);
  const room = useSelector(state => state.rootReducer.user.room);

  return (
    <Beforeunload onBeforeunload={() => "You'll lose your data!"}>
      <div className="ticket-wrapper">
        <div className="ticket">
          <div className="ticket-header">
            <div className="ticket-header__text">Ticket</div>
            <div className="m-a">
              {!saveTicket ? (
                <Fragment>
                  <svg
                    class="ticket-header__icon mr-2"
                    onClick={() =>
                      onClickHandler(setNumbers, setSaveTicket, false)
                    }
                  >
                    <use xlinkHref="img/sprite.svg#icon-refresh-ccw" />
                  </svg>
                  <svg
                    class="ticket-header__icon"
                    onClick={() =>
                      onClickHandler(setNumbers, setSaveTicket, true)
                    }
                  >
                    <use xlinkHref="img/sprite.svg#icon-check" />
                  </svg>
                </Fragment>
              ) : null}
            </div>
          </div>
          <div class="grid-container">
            {numbers.map(ele => {
              return <div className="grid-item">{ele === 0 ? null : ele}</div>;
            })}
          </div>
        </div>
        <div className="ticket__chat-box">
          <Chat name={name} room={room} />
        </div>
      </div>
    </Beforeunload>
  );
};

export default Ticket;
