import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Landing from "./Landing";
import Cards from "./Cards";
import Location from "./Location";
import Gallery from "./Gallery";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Cards />
      <Location />
      <Gallery />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
