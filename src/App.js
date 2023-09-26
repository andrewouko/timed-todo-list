import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TaskCreator from "./TaskCreator";
import TasksList from "./TasksList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskCreator />
        <TasksList />
      </div>
    </Provider>
  );
}

export default App;