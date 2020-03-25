import React from "react";
import "./App.css";

import ContentBlock from "./components/ContentBlock";
import Image from "./components/Image";
import Profile from "./components/Profile";

import { progress, profiles } from "./config";

const ProgressList = ({ content }) => {
  let imageLeft = false;
  return (
    <ul>
      {content.map(item => {
        if (imageLeft) {
          imageLeft = !imageLeft;
          return (
            <li className='container'>
              <Image data={item.img} />
              <ContentBlock content={item.content} />
            </li>
          );
        } else {
          imageLeft = !imageLeft;
          return (
            <li className='container's>
              <ContentBlock content={item.img} />
              <Image data={item.img} />
            </li>
          );
        }
      })}
    </ul>
  );
};

const ProfileList = ({ team }) => {
  console.log(team);
  return (
    <ul className='container'>
      {team.forEach(profile => {
        return <Profile profile={profile} />;
      })}
    </ul>
  );
};

function App() {
  console.log(progress);
  return (
    <div className="lg-container">
      <ProgressList content={progress} />
      <ProfileList team={profiles} />
    </div>
  );
}

export default App;
