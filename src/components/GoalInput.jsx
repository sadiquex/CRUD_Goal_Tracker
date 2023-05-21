import styled from "styled-components";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // function to handle goal input
  const goalInputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  // function to submit the form
  const formSubmitHandler = (e) => {
    // prevent default behaviour
    e.preventDefault();

    // check if there's nothing entered
    if (enteredValue.trim().length === 0) {
      return;
    }
    props.goalInput(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputHandler} />
        <button>Add Goal</button>
      </div>
    </form>
  );
};

export default GoalInput;
