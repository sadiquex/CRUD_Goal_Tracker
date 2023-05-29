import styled from "styled-components";
import { Button } from "./UI/Button";

const GoalsList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Card key={item.id}>
            <div>{item.title}</div>
            <Button onClick={() => onDelete(item.id)}>Delete</Button>
          </Card>
        );
      })}
    </ul>
  );
};

export default GoalsList;

export const Card = styled.div`
  background: #283618;
  padding: 20px;
  margin: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
