import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/main.scss";
import Main from "./components/Main";

const App = props => {
  return (
    <div className="App">
      <Header title="Housie" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
