import React from "react";

import Image from "./Image"

// TODO: Dit block kan gestyled worden, dit is een block zoals bij Ontwerp Technieken gebruikt wordt in de wireframes

const NumberBlock = ({data, i}) => {
  const content = data.content
  return (
    <div class='container'>
      <span className='sm-title'>
        <h1>{i+1}</h1>
        <h6>{content.title}</h6>
      </span>
      <span className='context'>
        <p>{content.text}</p>
        {content.img && (
          <Image data={content.img} />
        )}
      </span>
    </div>
  )
}

// TODO: Dit block kan gestyled worden, dit is een block zoals bij Onderzoek en Inzichten gebruikt wordt in de wireframes
// Let op!: Als er nog geen foto/icon toegevoegd is moet je dit even weglaten, anders krijg je errors in je code

const IconBlock = ({content}) => {
  return (
    <div class='container'>
      <Image data={content.icon} />
      <h5>{content.title}</h5>
      <p>{content.text}</p>
      {content.img && (
        <Image data={content.img} />
      )}
    </div>
  )
}

const ContentBlock = ({content, i}) => {
  if(content.icon){
    return <IconBlock content={content} />
  } else {
    return <NumberBlock data={content} i={i} />
  }
};

export default ContentBlock;
