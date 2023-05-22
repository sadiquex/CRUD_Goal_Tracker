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
      updatedGoals.unshift({
        title: enteredText,
        id: Math.random().toString(),
      });
      // console.log(updatedGoals);
      return updatedGoals;
    });
  };

  return (
    <div>
      <section>
        <GoalInput goalInput={addGoalHandler} />
      </section>
      <section>
        {/* show default content */}
        {typeof courseGoals}
        {courseGoals.length > 0 && <GoalsList items={courseGoals} />}
      </section>
    </div>
  );
};

export default App;
