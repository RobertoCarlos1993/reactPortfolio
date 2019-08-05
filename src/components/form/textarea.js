import React from "react";
import "./textarea.css";

function TextArea(props){

    return (
      <div className="form-group">
        <label className="form-label">{props.title}</label>
        <textarea
          style={textAreaStyle}
          className="form-control"
          name={props.name}
          rows={props.textAllowance}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
      </div>
    );
}

const textAreaStyle = {
  color: "#f0f2f7",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid #f0f2f7"
};

export default TextArea;
