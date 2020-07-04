import React, { Component } from 'react';
import './App.css';
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

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id}
            click={() => this.deletePersonHandler(index)} 
            />
          })}
        </div>
      )
    }
    return (


      <div className="App">
        <h1>Hello Love</h1>
        <p>I am loving every bit of it.</p>

        <button style={style} onClick={this.switchNameHandler.bind(this, "dheeraj")}>Switch Name</button>
        <button style={style} onClick={this.toggleHandler}>Show/Hide Names</button>

        {persons}

      </div>
    );
  }
}

export default App;
