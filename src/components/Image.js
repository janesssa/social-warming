import React from "react";

const Image = ({ data }) => {
  return (
    <img

      src={process.env.PUBLIC_URL + data.src}
      alt={data.alt}
      width={data.width}
      height={data.height}
      className={data.className}
    />
  );
};

export default Image;
