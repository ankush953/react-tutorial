import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let btnClass = '';
    let assignedClasses = []
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello Love</h1>
            <p className={assignedClasses.join(' ')}>I am loving every bit of it.</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Names</button>
        </div>
    )
}

export default cockpit;
