import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
    console.log("[Cockpit.js] useEffect");
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
  });

  let btnClass = "";
  let assignedClasses = [];
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
      <p className={assignedClasses.join(" ")}>I am loving every bit of it.</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Names
      </button>
      {<button onClick={authContext.login}>Login</button>}
    </div>
  );
};

export default React.memo(Cockpit);
