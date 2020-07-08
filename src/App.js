import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ankush', age: 22, },
      { id: 2, name: 'Ankit', age: 24, },
      { id: 3, name: 'Lav', age: 4, }
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: "kush", age: 5 },
          { name: newName, age: 22 },
          { name: "suraj", age: 15 },
        ]
      }
    )
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  deletePersonHandler(PersonIndex) {
    const new_persons = [...this.state.persons];
    new_persons.splice(PersonIndex, 1);
    this.setState({
      persons: new_persons,
    })
  }

  nameChangeHandler(event, id){
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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id}
            change={(event) => this.nameChangeHandler(event, person.id)}
            click={() => this.deletePersonHandler(index)} 
            />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = []
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hello Love</h1>
          <p className={assignedClasses.join(' ')}>I am loving every bit of it.</p>

          <button className={btnClass} onClick={this.toggleHandler}>Toggle Names</button>

          {persons}

        </div>
    );
  }
}

export default App;
