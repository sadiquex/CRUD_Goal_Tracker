import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { title: "Do all exercises", id: "001" },
    { title: "Delete the pictures", id: "002" },
  ]);

  // function to add a goal
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      // spread the previous goals into the array
      const updatedGoals = [...prevGoals];
      // add the new element to the beginning of the array with unshift
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      console.log(updatedGoals);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>There are currently no goals</p>
  );

  // if there are goals show them
  if (courseGoals.length > 0) {
    content = <GoalsList items={courseGoals} />;
  }

  return (
    <div>
      <section className="goal-form">
        <GoalInput goalInput={addGoalHandler} />
      </section>
      <section id="goals">
        {/* show default content */}
        {content}
      </section>
    </div>
  );
};

export default App;
