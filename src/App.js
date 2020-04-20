import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/main.scss";
import Main from "./components/Main";

const App = props => {
  const isUserLoggedIn = useSelector(state => state.rootReducer.user);
  console.log("isUserLoggedIn", isUserLoggedIn);
  return (
    <div>
      {isUserLoggedIn ? (
        <div className="App">
          <Header title="Housie" />
          <Main />
          <Footer />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
