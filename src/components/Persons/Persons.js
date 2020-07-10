import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    shouldComponentUpdate(extProps, nextState) {
        console.log('[Perons.js] shouldComponentUpdate');
        return true;
    }

    // componentWillReceiveProps() {
    //     console.log('[Perons.js] componentWillReceiveProps');
    // }

    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(preProps, preState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                clicked={() => this.props.clicked(index)}
            />
        })
    }
}

export default Persons;
