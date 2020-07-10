import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    console.log('[App.js] constructor');
    super(props);
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props.appTitle);
    return state; 
  }

   componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  static componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(preProps, preState, snapshot){
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(extProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
}

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
    console.log('[App.js] render');
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
          title={this.props.appTitle}
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
