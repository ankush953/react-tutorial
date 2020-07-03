import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ankush', age: 22, },
      { name: 'Ankit', age: 24, },
      { name: 'Lav', age: 4, }
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked!!!");
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Ankush", age: 22 },
        { name: "Ankit", age: 24 },
        { name: event.target.value, age: 4 },
      ]
    })
  }

  toggleHandler = () => {
    // if (this.state.showPersons === false)
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
    // else
    //   this.setState({
    //     showPersons: false,
    //   })
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
            return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} />
          })}

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person click={this.switchNameHandler.bind(this, "Nitin")} name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} change={this.nameChangeHandler}></Person> */}
        </div>
      )
    }
    return (


      <div className="App">
        <h1>Hello Love</h1>
        <p>I am loving every bit of it.</p>

        {/* <Person></Person>
        <Person /> */}

        {/* <Person name="Ankush" age="25">My hobbies: Racing</Person> */}

        <button style={style} onClick={this.switchNameHandler.bind(this, "dheeraj")}>Switch Name</button>
        <button style={style} onClick={this.toggleHandler}>Show/Hide Names</button>

        {persons}

      </div>
    );

    // Line below is equivalent to above return statement but more complex but this is what really happens.
    // return React.createElement('div',{class:'App'},React.createElement('h1',null,'Hello Love'));
  }
}

export default App;
