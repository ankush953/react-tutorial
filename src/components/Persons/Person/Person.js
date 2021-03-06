import React, { Component } from "react";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.isAuthenticated);
    
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <div>
        {this.context.isAuthenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please, login</p>
        )}

        <p onClick={this.props.clicked}>
          Hey, I am {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </div>
    );
  }
}

export default withClass(Person, classes.Person);
