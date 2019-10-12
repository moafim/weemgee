import React from "react";

import Header from "./components/Header";
import HomeMenu from "./components/HomeMenu";
import Section from "./components/Section";
import HomeBanner from "./components/HomeBanner";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeMenu />
      <Section title="Collections of today by editor" />
      <HomeBanner />
      <Section title="Best Sellers of the Week" link />
    </div>
  );
}

export default App;
