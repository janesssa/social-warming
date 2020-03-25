import React from "react";

const ContentBlock = ({content}) => {
    console.log(content)
  return (
    <div class="sm-container">
      <h2>{content.title}</h2>
      {content.subtitle && <h4>{content.subtitle}</h4>}
      <p>{content.text}</p>
    </div>
  );
};

export default ContentBlock;
