import React, { Component } from "react";
import styles from "./Person.module.css";

class Person extends Component {
  render() {
    return [
      <p key='i1' onClick={this.props.clicked}>
        Hey, I am {this.props.name} and my age is {this.props.age}
      </p>,
      <p key='i2'>{this.props.children}</p>,
      <input key='i3'
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      ></input>,
    ];
  }
}

export default Person;
