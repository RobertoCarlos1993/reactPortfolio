import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  render() {
    return (
      <div className="form-group mb-4">
        <label htmlFor={this.props.name} className="form-label">
          {this.props.title}
        </label>
        <input
          style={inputStyle}
          className="form-control"
          id={this.props.name}
          name={this.props.name}
          type={this.props.inputType}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
          placeholderTextColor="red"
        />
      </div>
    );
  }
}

const inputStyle = {
  border: "none",
  borderBottom: "1px solid #f0f2f7",
  backgroundColor: "transparent",
  color: "#f0f2f7",
  borderRadius: "0px"
};

export default Input;
