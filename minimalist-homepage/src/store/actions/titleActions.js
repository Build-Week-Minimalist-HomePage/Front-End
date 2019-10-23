// for button
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const toggleEdit = () => ({ type: TOGGLE_EDIT });

export const SET_TITLE = 'SET_TITLE';
export const setTitle = (name1,url1,name2,url2) => {
  //console.log(`setTitle AC, ${title}`);
  return { type: SET_TITLE, payload: {name1,url1, name2,url2} };
};
