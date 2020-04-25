import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../actions";

const Header = ({ title }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(actions.setUser(null));
  };

  return (
    <div className="header">
      <Link to="/home" className="header--title">
        {title}
      </Link>
      <button
        type="submit"
        className="header--logout"
        onClick={() => onClickHandler()}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
