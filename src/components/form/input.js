import React from "react";
import "./input.css";

function Input(props){

    return (
      <div className="form-group mb-4">
        <label htmlFor={props.name} className="form-label">
          {props.title}
        </label>
        <input
          style={inputStyle}
          className="form-control"
          id={props.name}
          name={props.name}
          type={props.inputType}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          placeholderTextColor="red"
        />
      </div>
    );
}

const inputStyle = {
  border: "none",
  borderBottom: "1px solid #f0f2f7",
  backgroundColor: "transparent",
  color: "#f0f2f7",
  borderRadius: "0px"
};

export default Input;
