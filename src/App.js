import React from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import Team from "./components/Team";

import { progress, profiles } from "./config";

function App() {
  console.log(progress);
  return (
    <div className="lg-container">
      <Header />
      <Team profiles={profiles} />
      {Object.keys(progress).map(section => (
        <Section content={progress[section]} />
      ))}
    </div>
  );
}

export default App;
