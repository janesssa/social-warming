import React from "react";
import Image from "./Image";
import ScrollAnimation from 'react-animate-on-scroll';


const NumberBlock = ({ data, i }) => {
  const content = data.content
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
      <div class='sm-container m0auto'>
        {content.title && (
          <span className='sm-title'>
            <h1 className='number m0'>0{i + 1}</h1>
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
    </ScrollAnimation>
  )
}

const IconBlock = ({ data }) => {
  const content = data.content
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
      <div class='sm-container m0auto'>
        {content.icon && (
          <span className="sm-title">
            <Image data={content.icon} />
          </span>
        )}
        <span className="context">
          <div className="secondTitleClass">
            {content.title && (
              <h5 className="bold uppercase">{content.title} &nbsp; </h5>
            )}
            {content.title && (
              <h5 className="bold">{content.subtitle}</h5>
            )}
          </div>
          <p>{content.text}</p>
          {content.img && (
            <Image data={content.img} />
          )}

        </span>
      </div>
    </ScrollAnimation>
  )
}

const ContentBlock = ({ content, i }) => {

  if (content.content.icon) {
    return <IconBlock data={content} />
  } else {
    return <NumberBlock data={content} i={i} />
  }
};

export default ContentBlock;
