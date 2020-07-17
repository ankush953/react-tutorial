import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          clicked={() => this.props.clicked(index)}
        />
      );
    });
  }
}

export default Persons;
