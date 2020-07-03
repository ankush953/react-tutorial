import React from 'react';
import './Person.css';

const person = (props) => {
    // return <p>Hey, I am a person.</p>
    // return <p>Hey, I am a person and my age is {Math.floor(Math.random() * 30)} years.</p>
    return (
        <div className="Person">
            <p onClick={props.click}>Hey, I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}></input>
        </div>
    );
}

export default person;
