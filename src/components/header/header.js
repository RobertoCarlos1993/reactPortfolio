import React, { useEffect } from "react";
import Name from "./name";
import Job from "./job";
import DynamicElement from "./dynamicelement";

import "./header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = e => {
      let a = document.querySelector(".myName");
      let b = document.querySelector(".jobTitle");
      let c = document.querySelector(".dynamicElement");
      let checkY = window.scrollY;

      var change2 = `${checkY / 1.1}`;

      if (checkY < 280) {
        var ctrans = "translate(" + change2 + "%, " + change2 + "%)";
        c.style.transform = ctrans;
      }

      if (window.scrollY > 150) {
        a.classList.add("hidden");
      } else {
        a.classList.remove("hidden");
      }

      if (window.scrollY > 300) {
        b.classList.add("hidden");
      } else {
        b.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="container-fluid headerStyle position-relative">
        <Name name={"Roberto Carlos"} />
        <Job title={jobTitle} />
        <DynamicElement />
      </header>
    </div>
  );
};


const jobTitle = {
  firstLine: "Full-Stack",
  secondLine: "Developer"
};

export default Header;
