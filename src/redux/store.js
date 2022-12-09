import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./todoListSlice";

export default configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
