import { ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETED } from "../actions/todoActions";

const initialState = {
  tasks: [
    {
      id: 1234,
      task: "do dishes",
      completed: false
    },
    {
      id: 1235,
      task: "car wash",
      completed: false
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {
        id: Date.now(),
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };
    case TOGGLE_TASK:
      let updatedTasks = state.tasks.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        tasks: updatedTasks
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.filter(item => !item.completed)
      };
    default:
      return state;
  }
};


export default todoReducer;