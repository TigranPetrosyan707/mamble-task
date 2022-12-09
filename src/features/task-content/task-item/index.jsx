import { completeTask } from "../../../redux/todoListSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PortalPopUp from "../../portal-pop-up";
import "./styles.css";

const ItemTask = ({ task }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="single-item">
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => {
            dispatch(completeTask(task.id));
          }}
        />
        <span className="task-text">{task.text}</span>
      </label>
      {showPopUp ? (
        <PortalPopUp itemId={task.id} setShowPopUp={setShowPopUp} />
      ) : null}
      <div>
        <button onClick={() => setShowPopUp(true)}>X</button>
      </div>
    </div>
  );
};

export default ItemTask;
