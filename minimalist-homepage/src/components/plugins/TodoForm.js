import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, clearCompleted } from "../../store/actions/todoActions";
import {axiosWithAuth} from '../../axiosWithAuth';

const TodoForm = props => {
  const [input, setInput] = useState("");

  const changeHandler = event => {
    setInput(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.addTask(input);

    axiosWithAuth()
         .post(`/api/notes/`, {"user_id": 1, 'note':input}).then(res=>console.log(res));
    setInput("");
  };

  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name="task" value={input} onChange={changeHandler} />
        <button>Add task</button>
      </form>
      <button onClick={props.clearCompleted}>Delete task</button>
    </div>
  );
};

export default connect(
  null, //if just need access to action creators, can pass in null for mapStateToProps
  { addTask, clearCompleted }
)(TodoForm);
