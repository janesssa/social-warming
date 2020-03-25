import React from 'react';
import './App.css';

import ContentBlock from './components/ContentBlock'
import Image from './components/Image'
import Profile from './components/Profile'

import { progress, profiles } from './config'

function ProgressList (content) {
  let imageLeft = false
  content.forEach(item => {
    if(imageLeft){
      imageLeft = !imageLeft
      return (
        <li>
          <Image img={item.img} />
          <ContentBlock content={item.content} />
        </li>
      )
    } else {
      imageLeft = !imageLeft
      return (
        <li>
          <ContentBlock content={item.img} />
          <Image img={item.img} />
        </li>
      )
    }
  })
}

function ProfileList (team) {
  return (
    <ul>
      {team.forEach(profile => {
        return (
          <li> 
            <Image img={profile.img} />
            <h4>{profile.name}</h4>
            <p>{profile.title}</p>
          </li>
        )
      })}
    </ul>
  )
}

function App() {
  return (
    <div className="container">
      <ProgressList content={progress} />
      <ProfileList team={profiles} />
    </div>
  );
}

export default App;
