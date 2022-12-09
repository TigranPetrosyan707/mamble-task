import { deleteTask } from "../../redux/todoListSlice";
import { useDispatch } from "react-redux";
import "./styles.css";

const PortalPopUp = ({ itemId, setShowPopUp }) => {
  const dispatch = useDispatch();
  return (
    <div className="pop-up">
      <div className="pop-up-header">Are you sure you want to delete?</div>
      <div className="pop-up-buttons">
        <button className="true" onClick={() => dispatch(deleteTask(itemId))}>
          Yes
        </button>
        <button className="false" onClick={() => setShowPopUp(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default PortalPopUp;
