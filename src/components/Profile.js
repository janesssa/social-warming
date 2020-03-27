import React from "react";
import Image from "./Image";

const Profile = ({profile}) => {
  return (
    <li>
      <Image img={profile.img} />
      <h4>{profile.name}</h4>
      <p>{profile.detailOne}</p>
      <p>{profile.detailTwo}</p>
      <p>{profile.title}</p>
    </li>
  );
};

export default Profile;
