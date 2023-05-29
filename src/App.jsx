import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import styled from "styled-components";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  // function to add a goal
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      // spread the previous goals into the array
      const updatedGoals = [...prevGoals];
      // add the new element to the beginning of the array with unshift
      updatedGoals.unshift({
        title: enteredText,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  // delete function
  const deleteHandler = (id) => {
    setCourseGoals(courseGoals.filter((courseGoals) => courseGoals.id !== id));
  };

  return (
    <div>
      <section>
        <GoalInput goalInput={addGoalHandler} />
      </section>
      <section>
        {/* show default content */}
        {courseGoals.length > 0 && (
          <GoalsList items={courseGoals} onDelete={deleteHandler} />
        )}
      </section>
    </div>
  );
};

export default App;
