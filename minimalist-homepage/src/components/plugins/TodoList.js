import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo.js";
import { toggleTask } from "../../store/actions/todoActions";


const TodoList = props => {
  return (
    <div>
      {props.tasks.map(item => (
        <Todo key={item.id} todo={item} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.todoR.tasks
  };
};

export default connect(
  mapStateToProps,
  { toggleTask }
)(TodoList);
