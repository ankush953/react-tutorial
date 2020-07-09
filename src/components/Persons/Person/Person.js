import React from 'react';
import styles from './Person.module.css';

const person = (props) => { 
    console.log('[Person.js] rendering...');
    return (
        
        <div className={styles.Person}>
            <p onClick={props.clicked}>Hey, I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;
