import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
    return (
        
        <div className={styles.Person}>
            <p onClick={props.click}>Hey, I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default person;
