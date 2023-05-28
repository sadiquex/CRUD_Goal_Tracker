import styled from "styled-components";

const GoalsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default GoalsList;
