import React, { Component } from "react";
import Input from "./input";
import TextArea from "./textarea";
import MainText from "./maintext";
import Button from "./button";
import emailjs from "emailjs-com";
import "./form.css";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    emailValidation: "",
    nameValidation: ""
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  validateInput = e => {
    let name = e.target.name;
    switch (name) {
      case "email":
        console.log("checking email");
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(e.target.value)) {
          this.setState({ emailValidation: "" });
        } else {
          this.setState({ emailValidation: "Email is not valid" });
        }
        break;
      case "name":
        console.log("checking name");
        const nameRex = /^[a-zA-Z ]{2,30}$/;
        if (nameRex.test(e.target.value)) {
          this.setState({ nameValidation: "" });
        } else {
          this.setState({ nameValidation: "Introduce a correct name, please" });
        }
        break;
      default:
      //nothing to do
    }
  };

  FormSubmit = e => {
    e.preventDefault();
    var template_params = {
      reply_to: `${this.state.email}`,
      from_name: `${this.state.name}`,
      to_name: "rc.villanueva.diaz@gmail.com",
      message_html: `${this.state.message}`
    };

    var service_id = "default_service";
    var template_id = "template_GcT19Bgs";
    window.emailjs.send(service_id, template_id, template_params);
  };

  render() {
    return (
      <div
        className="container-fluid no-gutters bg-contact"
        id="form-container"
      >
        <MainText text={"Get in"} textDiff={"touch."} />
        <form className="w-50 mx-auto" onSubmit={this.FormSubmit}>
          <Input
            inputType={"text"}
            title={"Name"}
            name={"name"}
            value={this.state.name}
            placeholder={"Enter your name"}
            handleChange={e => {
              this.handleInput(e);
              this.validateInput(e);
            }}
          />
          <p style={alertMessage}>{this.state.nameValidation}</p>
          <Input
            inputType={"email"}
            title={"Email"}
            name={"email"}
            value={this.state.email}
            placeholder={"Enter your email"}
            handleChange={e => {
              this.handleInput(e);
              this.validateInput(e);
            }}
          />
          <p style={alertMessage}>{this.state.emailValidation}</p>
          <TextArea
            name={"message"}
            textAllowance={4}
            value={this.state.message}
            placeholder={"Introduce your message here"}
            title={"Message"}
            handleChange={this.handleInput}
          />
          <Button action={this.FormSubmit} title={"Submit"} />
        </form>
      </div>
    );
  }
}

const alertMessage = {
  color: "#ff0000",
  height: 15
};

export default Form;
