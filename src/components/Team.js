import React from "react";
import Image from "./Image";

// TODO: Deze pagina moet nog gestyled worden, regels 10-16 en 20-26 zijn de blokken van de personen
//       Je kan hier dus gewoon CSS overheen gooien.
//       Let op!: een class in React moet je aanmaken met className

const Profile = ({ profile }) => {
  return (
    <div className='profileCard'>
      <Image data={profile.img} />
      <span className='xs-container m0auto'>
        <h6 className='detail bold m0'>{profile.name}</h6>
        <p className='detail m0'>{profile.detailOne}</p>
        <p className='detail m0'>{profile.detailTwo}</p>
        <a href={profile.github} className='detail link'>Github</a>
        <a href={profile.linkedIn} className='detail link'>LinkedIn</a>
      </span>
    </div>
  );
};

const Team = ({ profiles }) => {
  return (
    <div className='container'>
      <h3 className='study'>CMGT</h3>
      <span className='sm-container'>
        {profiles.cmgt.map(profile => (
            <Profile profile={profile} />
        ))}
      </span>
      <h3 className='study'>CMD</h3>
      <span>
        {profiles.cmd.map(profile => (
            <Profile profile={profile} />
        ))}
      </span>
    </div>
  );
};

export default Team;
