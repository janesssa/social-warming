import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Team from "./components/Team";
import Video from "./components/Video";

import { progress, profiles } from "./config";

function App() {
  console.log(progress);
  return (
    <div className="lg-container">

      {Object.keys(progress).map(section => {
        if (section === 'header') {
          return <Header content={progress.header} />
        }

        if (section === 'video') {
          return <Video content={progress.video} />
        }

        return <Section content={progress[section]} />
      })}


      <Team profiles={profiles} />
    </div>
  );
}

export default App;
