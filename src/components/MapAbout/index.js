import React from "react";
import data from "../data/aboutMap";
import Appbar from "../AppBar";
import About from "../About";

const MapAbout = () => {
    return (<div>
      <Appbar />
      <About data={data} title={"Mercer County Park"}/>
    </div>
    );
  }

export default MapAbout;

