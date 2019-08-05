import React, { Component } from "react";
import "./textarea.css";

class TextArea extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="form-label">{this.props.title}</label>
        <textarea
          style={textAreaStyle}
          className="form-control"
          name={this.props.name}
          rows={this.props.textAllowance}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

const textAreaStyle = {
  color: "#f0f2f7",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid #f0f2f7"
};

export default TextArea;
