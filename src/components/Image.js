import React from "react";

const Image = ({data}) => {
  return (
    <img
      src={data.src}
      alt={data.alt}
      width={data.width}
      height={data.height}
      className={data.className}
    />
  );
};

export default Image;
