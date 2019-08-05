import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="form-group row mt-5">
        <button
          className="btn btn-primary btn-lg mx-auto mb-5"
          onClick={this.props.action}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Button;
