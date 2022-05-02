import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Featured from "./Featured";
import Cards from "./CardSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Featured />
      <Cards />
    </div>
  );
};

export default App;
