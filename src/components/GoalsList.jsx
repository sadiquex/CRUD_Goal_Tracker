import styled from "styled-components";

const GoalsList = (props) => {
  console.log("goals are: " + " " + props.items);

  return (
    <ul>
      {props.items.map((item) => {
        <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default GoalsList;
