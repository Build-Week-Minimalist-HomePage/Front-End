import { ADD_TASK, TOGGLE_TASK, CLEAR_COMPLETED, FILTER_NOTE } from "../actions/todoActions";

const initialState = {
  tasks: [
    {
      id: 1234,
      task: "do dishes",
    },
    {
      id: 1235,
      task: "car wash",
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {
        id: Date.now(),
        task: action.payload,
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

      case FILTER_NOTE:
         let keptNotes = state.tasks.filter(thing => thing.id != action.payload )

         return {
           ...state,
           tasks: keptNotes
         };

    default:
      return state;
  }
};


export default todoReducer;