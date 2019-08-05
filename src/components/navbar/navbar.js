import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./navbar.css";

class Navbar extends Component {
  state = {
    Toggle: false
  };

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      Toggle: !this.state.Toggle
    });
  };

  listenScrollEvent = e => {
    const navbar = document.querySelector(".navbar");
    let icon = document.querySelector(".fa-bars");

    if (window.scrollY > 790) {
      navbar.classList.add("changeNav");
      icon.classList.add("icon-color");
    } else {
      navbar.classList.remove("changeNav");
      icon.classList.remove("icon-color");
    }

    if (window.scrollY > 790) {
      document.querySelectorAll(".navlink").forEach(link => {
        link.classList.add("changeLink");
        link.classList.remove("text-white");
      });
    } else {
      document.querySelectorAll(".navlink").forEach(link => {
        link.classList.add("text-white");
        link.classList.remove("changeLink");
      });
    }
  };

  removeOnClick = e => {
    this.setState({
      Toggle: !this.state.Toggle
    });
  };

  //ASK THOMAS ABOUT HOW TO ACHIEVE THESE LOGIC BEHIDN THE NAVBAR
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/work") {
      window.removeEventListener("scroll", this.listenScrollEvent);

      //document.querySelector("div.navbar.fixed-top > i").classList.add("icon-color");
    } else {
      window.addEventListener("scroll", this.listenScrollEvent);
    }
  }

  render() {
    const { Toggle } = this.state;
    const name = "changeNav";
    const colorIcon = "icon-color";
    return (
      <div
        className={`navbar fixed-top ${
          this.props.location.pathname === "/work" ? name : null
        }`}
      >
        <Link to="/">
          <div className={Toggle ? "logo z" : "logo"}></div>
        </Link>
        <i
          className={`${
            Toggle ? "fa fa-times mr-4 above" : "fa fa-bars mr-4"
          } ${this.props.location.pathname === "/work" ? colorIcon : ""}`}
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
        />

        <ul className="list-inline py-4 text-right is-expanded">
          <NavLink
            className={`navlink text-uppercase ${
              this.props.location.pathname === "/work"
                ? "changeLink"
                : "text-white"
            } py-2 font-weight-bold`}
            to="/"
          >
            <li className="list-inline-item px-5">Home</li>
          </NavLink>
          <NavLink
            className={`navlink text-uppercase ${
              this.props.location.pathname === "/work"
                ? "changeLink"
                : "text-white"
            } py-2 font-weight-bold`}
            to="/work"
          >
            <li className="list-inline-item px-5">Work</li>
          </NavLink>
          <NavLink
            className={`navlink text-uppercase ${
              this.props.location.pathname === "/work"
                ? "changeLink"
                : "text-white"
            } py-2 font-weight-bold`}
            to="/contact"
          >
            <li className="list-inline-item px-5">Contact</li>
          </NavLink>
        </ul>
        <div className={Toggle ? "overlay showoff" : "overlay"}>
          <div className="overlay-content">
            <NavLink
              className="navlink"
              to="/"
              onClick={e => this.removeOnClick(e)}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/work"
              onClick={e => this.removeOnClick(e)}
            >
              <li>Work</li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/contact"
              onClick={e => this.removeOnClick(e)}
            >
              <li>Contact</li>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
