import React from "react";

import "./job.css";

function Job (props){
    return (
      <div className="jobTitle text-center">
        <p className="text-white font-weight-bold pb-2">
          {props.title.firstLine}
        </p>
        <p className="text-white font-weight-bold">
          {props.title.secondLine}
        </p>
      </div>
    );
}

export default Job;
