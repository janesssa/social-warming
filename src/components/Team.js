import React from 'react'

// TODO: Deze pagina moet nog gestyled worden, regels 10-16 en 20-26 zijn de blokken van de personen
//       Je kan hier dus gewoon CSS overheen gooien. 
//       Let op!: een class in React moet je aanmaken met className

const Team = ({profiles}) => {
    return (
        <>
            <h3>CMGT</h3>
            {profiles.cmgt.map(profile => (
                <div>
                    <img
                        src={profile.img.src}
                        alt={profile.img.alt}
                        className='avatar'
                    />
                    <h6>{profile.name}</h6>
                    <p>{profile.detailOne}</p>
                    <p>{profile.detailTwo}</p>
                    <a href={profile.github}>Github</a>
                    <a href={profile.linkedIn}>LinkedIn</a>
                </div>
            ))}
            <h3>CMD</h3>
            {profiles.cmd.map(profile => (
                <div>
                    <img
                        src={profile.img.src}
                        alt={profile.img.alt}
                        className='avatar'
                    />
                    <h6>{profile.name}</h6>
                    <p>{profile.detailOne}</p>
                    <p>{profile.detailTwo}</p>
                    <a href={profile.github}>Github</a>
                    <a href={profile.linkedIn}>LinkedIn</a>
                </div>
            ))}
        </>
    )
}

export default Team