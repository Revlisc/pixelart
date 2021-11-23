import React, { useState, Fragment } from "react";
import cassetteImg from "../../img/radio-cassette.png";
import radioImg from "../../img/radio.png";
import "./ImageLibrary.css";

const ImageLibrary = ({ handleImageSelect }) => {
  const [images] = useState([cassetteImg, radioImg]);

  return (
    <Fragment>
      {images.map((img, idx) => {
        return (
          <div onClick={() => handleImageSelect(img)} key={idx} className='thumbnail'>
            <img src={img} alt='img-library' />
          </div>
        );
      })}
    </Fragment>
  );
};

export default ImageLibrary;
