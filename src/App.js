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
      <Section content={progress.designTactics} />
      <Section content={progress.research} />
      <Section content={progress.insights} />
      <Section content={progress.designCriteria} />
      <Section content={progress.concepts} />
    </div>
  );
}

export default App;
