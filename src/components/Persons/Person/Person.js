import React, { Component } from "react";
import styles from "./Person.module.css";
import Aux from '../../../hoc/Aux'

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.clicked}>
          Hey, I am {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Aux>
    );
  }
}

export default Person;
