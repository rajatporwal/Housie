import React, { useState, useEffect } from "react";
import tambola from "tambola-generator";

const onClickHandler = (
  array,
  index,
  setNumber,
  setIndex,
  setDashboard,
  type
) => {
  if (type === 1) {
    setNumber(array[index]);
    setIndex(index + 1);
    setDashboard(initialDashboard(index + 1, array));
  } else if (index !== 0) {
    setNumber(array[index - 1]);
    setIndex(index - 1);
    setDashboard(initialDashboard(index - 1, array));
  }
};

const initialDashboard = (index, array) => {
  const newArr = index === 0 ? [] : array.slice(0, index);
  return (
    <div className="board">
      {Array.from(Array(91).keys())
        .slice(1)
        .map((ele, i) => {
          const classes = newArr.includes(ele)
            ? "board--text bgcolor"
            : "board--text";
          return <div className={classes}>{ele}</div>;
        })}
    </div>
  );
};

const PickCoins = () => {
  const [arr, setArr] = useState([]);
  const [number, setNumber] = useState([]);
  const [index, setIndex] = useState(0);
  const [dashborad, setDashboard] = useState(initialDashboard(0, []));

  useEffect(() => {
    setArr(tambola.getDrawSequence());
  }, []);

  return (
    <div className="pick">
      {dashborad}
      <div className="coins">
        <h1 className="coins--text__sub">{`Total Coins: ${index}`}</h1>
        <h1 className="coins--text">{number}</h1>
        <div className="coins--btn">
          <button
            className="btn"
            onClick={() =>
              onClickHandler(arr, index, setNumber, setIndex, setDashboard, 0)
            }
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={() =>
              onClickHandler(arr, index, setNumber, setIndex, setDashboard, 1)
            }
          >
            {index === 0 ? "Start" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PickCoins;
