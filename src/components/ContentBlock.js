import React from "react";

import Image from "./Image"

// TODO: Dit block kan gestyled worden, dit is een block zoals bij Ontwerp Technieken gebruikt wordt in de wireframes

const NumberBlock = ({data, i}) => {
  const content = data.content
  return (
    <div class='sm-container m0auto'>
      <span className='sm-title'>
        <h1 className='number m0'>{i+1}</h1>
        <h6 className='m0 center'>{content.title}</h6>
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
    <div class='sm-container m0auto'>
      <span className="sm-title">
        <Image data={content.icon} />
      </span>
      <span className="context">
        <h5 className="subtitle bold">{content.title}</h5>
        <p>{content.text}</p>
        {content.img && (
          <Image data={content.img} />
        )}
      </span>
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
