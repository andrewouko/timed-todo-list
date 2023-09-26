// reducer.js
const initialState = {
  isRunning: false,
  elapsedTime: 0,
  taskList: [],
  taskIdCounter: 1 // Initialize task ID counter
};

const taskCreatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isRunning: true
      };
    case 'STOP_TIMER':
      return {
        ...state,
        isRunning: false
      };
    case 'UPDATE_ELAPSED':
      const { taskName, elapsedTime } = action.payload;
      const newTask = {
        taskId: state.taskIdCounter, // Assign the current task ID
        taskName,
        elapsedTime
      };
      return {
        ...state,
        elapsedTime,
        taskList: [...state.taskList, newTask],
        taskIdCounter: state.taskIdCounter + 1 // Increment task ID counter
      };
    default:
      return state;
  }
};

export default taskCreatorReducer;


// actions.js
export const startTimer = () => {
  return {
    type: 'START_TIMER'
  };
};

export const stopTimer = () => {
  return {
    type: 'STOP_TIMER'
  };
};

export const updateElapsed = (taskName, elapsedTime) => {
  return {
    type: 'UPDATE_ELAPSED',
    payload: {
      taskName,
      elapsedTime
    }
  };
};