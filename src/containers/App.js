import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ankush', age: 22, },
      { id: 2, name: 'Ankit', age: 24, },
      { id: 3, name: 'Lav', age: 4, }
    ],
    showPersons: false,
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons,
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [
      ...this.state.persons
    ];
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangeHandler}
          clicked={this.deletePersonHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.toggleHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
