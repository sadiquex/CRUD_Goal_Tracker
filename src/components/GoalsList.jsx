import styled from "styled-components";
import { Button } from "./UI/Button";
import { useState } from "react";

const GoalsList = ({ items, onDelete, onEdit, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const completedHandler = () => {
    setCompleted(!completed);
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <Card key={item.id} completed={completed}>
            <div className="name">
              <div>{item.title}</div>
            </div>
            <div className="buttons">
              <Button onClick={() => onDelete(item.id)}>Delete</Button>
              <Button onClick={() => onEdit(item.title)}>Edit</Button>
              <Button onClick={completedHandler}>Completed</Button>
            </div>
          </Card>
        );
      })}
    </ul>
  );
};

export default GoalsList;

export const Card = styled.div`
  /* if completed, make bg red, else make it green */
  background: ${({ completed }) => (completed ? "red" : "#283618")};
  padding: 20px;
  margin: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
  }
  .buttons {
    display: flex;
    gap: 20px;
  }
`;
