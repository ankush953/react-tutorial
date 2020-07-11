import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => alert('Saved data to cloud!!'),1000);
    }, [props.showPersons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    })

    let btnClass = '';
    let assignedClasses = []
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>I am loving every bit of it.</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Names</button>
        </div>
    )
}

export default React.memo(Cockpit);
