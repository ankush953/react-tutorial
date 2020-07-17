import React, { Component, Fragment } from "react";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <p onClick={this.props.clicked}>
          Hey, I am {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Fragment>
    );
  }
}

export default Person;
