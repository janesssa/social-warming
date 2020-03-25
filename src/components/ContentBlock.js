import React from "react";

const NumberBlock = ({content, i}) => {
  return (
    <li>
      <h1>{i+1}</h1>
      <h6>{content.title}</h6>
      <p>{content.text}</p>
    </li>
  )
}

const IconBlock = ({content}) => {
  return (
    <li>
      <img />
      <h5>{content.title}</h5>
      <p>{content.text}</p>
    </li>
  )
}

const ContentBlock = ({content, i}) => {
  if(content.icon){
    return <IconBlock content={content} />
  } else {
    return <NumberBlock content={content} i={i} />
  }
};

export default ContentBlock;
