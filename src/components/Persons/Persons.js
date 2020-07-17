import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //     console.log('[Persons.js] getDerivedStateFromProps', props);
  //     return state;
  // }

  // To compare every props, we can extend PureComponent instead of manualCheck
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[Perons.js] shouldComponentUpdate");
  //     return (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     );
  //   }

  // componentWillReceiveProps() {
  //     console.log('[Perons.js] componentWillReceiveProps');
  // }

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
