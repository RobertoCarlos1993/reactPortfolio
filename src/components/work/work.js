import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import "./work.css";

class Work extends Component {
  myHandler = e => {
    if (e.target.children.length > 0)
      e.target.children[0].classList.add("hovering");
  };

  myHandler2 = e => {
    if (e.target.children.length > 0)
      e.target.children[0].classList.remove("hovering");
  };

  render() {
    return (
      <div className="container-fluid work mb-5">
        <div className="title-work">
          <p>Recent Work</p>
        </div>
        <div className="flexwork">
          <div
            className="overlay-work"
            onMouseEnter={e => this.myHandler(e)}
            onMouseLeave={e => this.myHandler2(e)}
          >
            <HashLink to="/work#work-1">VIEW WORK</HashLink>
          </div>
        </div>
        <div className="flexwork">
          <div
            className="overlay-work"
            onMouseEnter={e => this.myHandler(e)}
            onMouseLeave={e => this.myHandler2(e)}
          >
            <HashLink to="/work#work-2">VIEW WORK</HashLink>
          </div>
        </div>
        <div className="flexwork">
          <div
            className="overlay-work"
            onMouseEnter={e => this.myHandler(e)}
            onMouseLeave={e => this.myHandler2(e)}
          >
            <HashLink to="/work#work-3">VIEW WORK</HashLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
