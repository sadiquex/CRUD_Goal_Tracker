import styled from "styled-components";

const GoalsList = ({ items }) => {
  items.map((item) => console.log(item.title));

  return (
    <ul>
      {items.map((item) => {
        <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default GoalsList;
