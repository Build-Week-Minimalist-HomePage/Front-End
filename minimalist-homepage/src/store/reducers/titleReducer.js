import { TOGGLE_EDIT, SET_TITLE } from '../actions/titleActions';

const initialState = {
  editing: false,
  name1: 'Google News',
  url1: "news.google.com",

  name2: 'Hacker News',
  url2: 'hackernews.com',

  // name3: '';
  // url3: '';

};

const titleReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case TOGGLE_EDIT:
      return {
        ...state,
        editing: !state.editing
      };
    case SET_TITLE:
      return {
        ...state,
        name1: action.payload.name1,
        url1: action.payload.url1,
        name2: action.payload.name2,
        url2: action.payload.url2,
        editing: false
      };
    default:
      return state;
  }
};


export default titleReducer;