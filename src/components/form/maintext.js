import React from "react";
import "./maintext.css";

function MainText(props){
    return (
      <div className="container-fluid mb-4 pt-10">
        <p className="contact-text mb-5 text-center">
          {props.text}{" "}
          <span className="text-warning">{props.textDiff}</span>
        </p>
        <p className="h6 text-center contact-p">
          Feel free to reach out or
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://calendly.com/rc-villanueva-diaz"}
          >
            <u>book a meeting on my calendar</u>
          </a>
        </p>
      </div>
    );
}

export default MainText;
