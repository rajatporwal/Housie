import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../actions";

const Login = () => {
  const [type, setType] = useState("guest");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const user = { type, name, room };
    dispatch(actions.setUser(user));
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div className="login-heading">
          <h1
            className={type === "guest" ? "pr-1 login-heading__active" : "pr-1"}
            onClick={() => setType("guest")}
          >
            Guest
          </h1>
          <h1
            className={type === "create" ? "login-heading__active" : null}
            onClick={() => setType("create")}
          >
            Create
          </h1>
          <h1
            className={type === "join" ? "login-heading__active" : null}
            onClick={() => setType("join")}
          >
            Join
          </h1>
        </div>
        <div className="mt-2">
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={e =>
            !name || !room ? e.preventDefault() : onClickHandler()
          }
          to={`/home`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
