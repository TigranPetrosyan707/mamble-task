import { useSelector, useDispatch } from "react-redux";
import { hideCompletedTask } from "../../redux/todoListSlice";
import ItemTask from "./task-item";
import "./styles.css";

const ContentTask = () => {
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();
  return (
    <main>
      {!taskList.taskList.length ? (
        <div className="content-task-paragraph">
          <p>Your life is a blank page. You write on it.</p>
          <h3>So start by adding your tasks here.</h3>
        </div>
      ) : (
        <div className="task-items">
          <label className="hidden-container">
            <input
              className="hidden-checkbox"
              type="checkbox"
              checked={taskList.hideCompleted}
              onChange={() => dispatch(hideCompletedTask())}
            />
            <span>Hide completed</span>
          </label>
          {!taskList.hideCompleted
            ? taskList.taskList.map((task) => (
                <ItemTask key={task.id} task={task} />
              ))
            : taskList.taskList
                .filter((task) => !task.isCompleted)
                .map((task) => <ItemTask key={task.id} task={task} />)}
        </div>
      )}
    </main>
  );
};

export default ContentTask;
