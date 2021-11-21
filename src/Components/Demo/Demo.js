import React from "react";
import "./Demo.css";
import skate from "../../img/lite-brite.jpg";

const Demo = () => {
  return (
    <div className="demo">
      <h1 className="demoTitle">Let's Make Some</h1>
      <h1 className="demoTitle">Glow Art</h1>
      <div className="demoContentContainer">
        <div className="demoRow">
          <div className="half">
            <h1 className="demoNum">01</h1>
            <p className="demoP">
              Select a photo. Search for an image you'd like to recreate, or for
              inspiration.
            </p>
          </div>
          <img src={skate} alt="step one of our demo" className="demoImg" />
        </div>
        <div className="demoRow">
          <img src={skate} alt="step two of our demo" className="demoImg" />
          <div className="half">
            <h1 className="demoNum">02</h1>
            <p className="demoP">
              Once you upload an image, we'll extract the major colors for your
              use! Simply click on which color you would like to use, and start
              clicking away.
            </p>
          </div>
        </div>
        <div className="demoRow">
          <div className="half">
            <h1 className="demoNum">03</h1>
            <p className="demoP">
              Use the colors to recreate the image on the pixel grid OR use the
              colors to get the creative juices flowing and make your own
              masterpiece!
            </p>
          </div>
          <img src={skate} alt="step three of our demo" className="demoImg" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
