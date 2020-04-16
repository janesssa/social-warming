import React from "react";
import Image from "./Image";
import ScrollAnimation from 'react-animate-on-scroll';

const Profile = ({ profile }) => {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
      <li>
        <Image img={profile.img} />
        <h4>{profile.name}</h4>
        <p>{profile.title}</p>
      </li>
    </ScrollAnimation>
  );
};

export default Profile;
