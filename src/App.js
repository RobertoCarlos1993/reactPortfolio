import React, { Component, Fragment } from "react";

import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import Projects from "./components/projects/projects";
import Header from "./components/header/header";
import About from "./components/about/about";
import Work from "./components/work/work";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// add NAVBAR INTO EACH PATH FOR RE-RENDERING.....

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <Header />
                    <About />
                    <Work />
                  </>
                );
              }}
            />
            <Route className="h-100" exact path="/contact" component={Form} />
            <Route className="h-100" path="/work" component={Projects} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
