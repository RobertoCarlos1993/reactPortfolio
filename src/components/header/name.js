import React from "react";

import "./name.css";

function Name(props) {
  return (
    <p className="text-white font-weight-bold myName">{props.name}</p>
  );
}


export default Name;
