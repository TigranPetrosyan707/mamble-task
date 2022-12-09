import { createSlice } from "@reduxjs/toolkit";

const taskListItems =
  localStorage.getItem("taskList") !== null
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

const isHiddenCompletedTask =
  localStorage.getItem("isHiddenCompletedTask") !== null
    ? JSON.parse(localStorage.getItem("isHiddenCompletedTask"))
    : false;

const taskListReducer = createSlice({
  name: "taskList",
  initialState: {
    taskList: taskListItems,
    hideCompleted: isHiddenCompletedTask,
  },
  reducers: {
    addTask(state, action) {
      state.taskList.push({
        id: Math.random(),
        text: action.payload,
        isCompleted: false,
      });

      localStorage.setItem(
        "taskList",
        JSON.stringify(state.taskList.map((task) => task))
      );
    },
    deleteTask(state, action) {
      const filteredTaskList = JSON.parse(localStorage.getItem("taskList"));
      state.taskList = filteredTaskList.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    completeTask(state, action) {
      const isCompletedTaskList = JSON.parse(localStorage.getItem("taskList"));
      state.taskList = isCompletedTaskList.map((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    hideCompletedTask(state) {
      state.hideCompleted = !state.hideCompleted;
      localStorage.setItem(
        "isHiddenCompletedTask",
        JSON.stringify(state.hideCompleted)
      );
    },
  },
});

export default taskListReducer.reducer;
export const { addTask, deleteTask, completeTask, hideCompletedTask } =
  taskListReducer.actions;
