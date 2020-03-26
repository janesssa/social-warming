import React from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import Team from "./components/Team";

import { progress, profiles } from "./config";

function App() {
  console.log(progress);
  return (
    <div className="lg-container">
     <div class="container"> <Header /> </div> 
   
      {Object.keys(progress).map(section => (
        <Section content={progress[section]} />
      ))}

      <Team profiles={profiles} />
    </div>
  );
}

export default App;
