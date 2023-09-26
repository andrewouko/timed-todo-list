import React from "react";
import { connect } from "react-redux";

function TasksList({ sortedTaskList }) {
  return (
    <div>
      <p>Total Tasks: {sortedTaskList.length}</p>
      <ul>
        {sortedTaskList.map(task => (
          <li className="task" key={task.taskId}>
            <span className="id">Task ID: {task.taskId}</span>
            <span className="name">Task Name: {task.taskName}</span>
            <span className="time">Elapsed Time: {task.elapsedTime} seconds</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  // Sort the taskList by ID in descending order
  const sortedTaskList = state.taskList.slice().sort((a, b) => b.taskId - a.taskId);

  return {
    sortedTaskList
  };
};

export default connect(mapStateToProps)(TasksList);
