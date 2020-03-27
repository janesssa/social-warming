import React from "react";

import Image from "./Image"

const NumberBlock = ({data, i}) => {
  const content = data.content
  return (
    <div class='sm-container m0auto'>
      {content.title && (
        <span className='sm-title'>
          <h1 className='number m0'>0{i+1}</h1>
          <h6 className='m0 center subtitle'>{content.title}</h6>
        </span>
      )}
      <span className='context'>
        <p>{content.text}</p>
        {content.img && (
          <Image data={content.img} />
        )}
      </span>
    </div>
  )
}

const IconBlock = ({content}) => {
  return (
    <div class='sm-container m0auto'>
      {content.icon && (
        <span className="sm-title">
          <Image data={content.icon} />
        </span>
      )}
      <span className="context">
        {content.title && (
          <h5 className="subtitle bold">{content.title}</h5>
        )}
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
