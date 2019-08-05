import React from "react";
import "./projects.css";
import projectFirst from "./img/project_1.png";
import projectSecond from "./img/project_2.png";
import projectThird from "./img/project_3.png";

function Projects() {
  return (
    <div className="container-fluid projects-container pb-2 pb-md-5 px-0 no-gutters">
      <div className="row no-gutters">
        <div
          className="row no-gutters pt-special mx-3 mx-md-5 mb-3 mb-md-0 mt-md-5 mt-lg-0"
          id="work-1"
        >
          <div className="col-12 text-center mb-5">
            <p className="h4 text-white font-weight-bold">
              <u>Real Estate WordPress</u>
            </p>
          </div>
          <div className="row no-gutters px-5 px-md-0">
            <div className="col-12 col-md-6 mb-sm-4 mb-md-0">
              <img src={projectSecond} alt={'For Real Estate WordPress'}/>
            </div>
            <div className="col-12 col-md-6 my-auto row">
              <div className="col-12 mx-4 mb-3 mb-md-1 px-sm-0 px-md-3">
                <p className="h6 text-white font-weight-bold">
                  The project is mainly focus on using WordPress: tinkering on
                  how to use plugins, implement a theme and style certain areas
                  to fit our needs using CSS. All mentioned above following the
                  lines to satisfy our client requirements.
                </p>
              </div>
              <div className="col-12 mx-4 mb-4 my-md-5 text-center">
                <p className="h6 text-white font-weight-bold">
                  <i className="fa fa-code"></i> WordPress
                  <i className="ml-3 fa fa-code"></i> Customizing CSS
                </p>
              </div>
              <div className="col-12 mx-4 row text-center">
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    CODE
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row no-gutters mx-sm-3 mx-md-5 mt-sm-3 mb-sm-3 mb-md-0"
          id="work-2"
        >
          <div className="col-sm-12 text-center mb-5">
            <p className="h4 text-white font-weight-bold">
              <u>Film Festival</u>
            </p>
          </div>
          <div className="row no-gutters  px-5 px-md-0">
            <div className="col-12 col-md-6 mb-sm-4 mb-md-0">
              <img src={projectFirst} alt={'For Film Festival'}/>
            </div>
            <div className="col-sm-12 col-md-6 row my-auto pr-md-4">
              <div className="col-sm-12 mx-4 mb-sm-3 mb-md-1 px-sm-0 px-md-3">
                <p className="h6 text-white font-weight-bold">
                  The Film Festival project was built using a frontend component
                  library called Bootstrap, also it has been spicy up with small
                  touches using vanilla Javascript, pursuing a more
                  dynamic site.
                </p>
              </div>
              <div className="col-sm-12 mx-4 mb-sm-4 my-md-5 text-center">
                <p className="h6 text-white font-weight-bold">
                  <i className="fa fa-code"></i> Bootstrap Framework
                  <i className="ml-3 fa fa-code"></i> Javascript
                </p>
              </div>
              <div className="col-12 mx-4 row text-center">
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    CODE
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row no-gutters mx-sm-3 mx-md-5 mt-5 mb-xs-4 mb-md-0"
          id="work-3"
        >
          <div className="col-sm-12 text-center mb-5">
            <p className="h4 text-white font-weight-bold">
              <u>React Portfolio</u>
            </p>
          </div>
          <div className="row no-gutters px-5 px-md-0">
            <div className="col-12 col-md-6 mb-sm-4 mb-md-0">
              <img src={projectThird} alt={'For React Portfolio'} />
            </div>
            <div className="col-sm-12 col-md-6 my-auto row">
              <div className="col-sm-12 mx-4 mb-sm-3 mb-md-1 px-sm-0 px-md-3">
                <p className="h6 text-white font-weight-bold">
                  The portfolio has been solely built using Reactjs with the
                  support of React-Router to create a single page app. Also, it
                  has been implemented an emailing functionality with the help
                  of Mailgun.
                </p>
              </div>
              <div className="col-sm-12 mx-4 mb-sm-4 my-md-5 text-center">
                <p className="h6 text-white font-weight-bold">
                  <i className="fa fa-code"></i> React
                  <i className="ml-3 fa fa-code"></i> React-Router
                </p>
              </div>
              <div className="col-12 mx-4 mb-sm-5 mb-md-0 row text-center">
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    CODE
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-send font-weight-bold">
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Projects;
