import styled from "styled-components";
import { useState } from "react";
import { Button } from "./UI/Button";

const GoalInput = ({ goalInput }) => {
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
      alert("Please enter some text");
      return;
    }
    // pass entered value as a parameter to addGoalHandler in App
    goalInput(enteredValue);

    // clear the input field
    setEnteredValue("");
  };

  return (
    <Container>
      <form onSubmit={formSubmitHandler}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputHandler} value={enteredValue} />
        <Button onClick={formSubmitHandler}>Add Goal</Button>
      </form>
    </Container>
  );
};

export default GoalInput;

export const Container = styled.div`
  border: 2px solid green;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      outline: none;
      margin: none;
      border: 0;
      padding: 8px;
      background: #eee;

      &:focus {
        outline: 0;
        margin: 0;
      }
    }
  }
`;
