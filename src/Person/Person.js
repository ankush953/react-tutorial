import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hey, I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default Radium(person);
