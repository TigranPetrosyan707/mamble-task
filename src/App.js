import "./App.css";
import ContentTask from "./features/task-content";
import HeaderTask from "./features/task-header";

function App() {
  return (
    <div className="AppContainer">
      <HeaderTask />
      <ContentTask />
    </div>
  );
}

export default App;
