import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Featured from "./Featured";
import Cards from "./CardSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
