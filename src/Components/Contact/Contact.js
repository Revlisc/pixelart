import React from "react";
import dalepic from "../../img/dalepic.jpg";
import Card from "../Card/Card";

import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contactHeader'>Meet the Creators</h1>
      <div className='contactContainer'>
        <Card
          name='Dale Simmons'
          img={dalepic}
          text={
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
            "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
            "in voluptate velit esse cillum dolore eu fugiat nulla pariatur."]
          }
        />
        <Card
          name='Arthur Baker'
          img={""}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        />
        <Card
          name='Bridgett Taylor'
          img={""}
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        />
      </div>
    </div>
  );
};

export default Contact;
