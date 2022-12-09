import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoListSlice";
import "./styles.css";

const HeaderTask = () => {
  const [tasksItem, setTasksItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmitTask = (e) => {
    if (tasksItem.trim()) {
      e.preventDefault();
      dispatch(addTask(tasksItem));
      setTasksItem("");
    }
    e.preventDefault();
  };

  return (
    <header>
      <form
        className="adding-task-form"
        autoComplete="off"
        onSubmit={handleSubmitTask}
      >
        <input
          type="search"
          className="adding-task-input"
          placeholder="Write here"
          maxlength={55}
          value={tasksItem}
          onChange={(e) => setTasksItem(e.target.value)}
        />
        <input type="submit" className="adding-task-submit" value="Add" />
      </form>
    </header>
  );
};

export default HeaderTask;
