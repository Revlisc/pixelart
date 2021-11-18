import React, { useState } from "react";
import DrawingWindow from "../DrawingWindow/DrawingWindow";
import "./Panel.css";

const Panel = () => {
  return (
    <div className='container'>
      <div className='left'></div>
      <div className='right'>
        <DrawingWindow />
      </div>
    </div>
  );
};

export default Panel;
