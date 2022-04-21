import React, { Component } from "react";
import "./classes.css";

export class Classmessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ilia",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: "Volodin Ilia",
    });
  }

  render() {
    return (
      <div className="classContainer">
        <h1 className="classHeading">
          {" "}
          Hello! Welcome to my {this.props.name}!
        </h1>
        <h2 className="classHeading__name"> My name is {this.state.name}</h2>
        <button onClick={this.handleClick} className="classButton">
          <p className="classHeading__text">click me</p>
        </button>
      </div>
    );
  }
}
