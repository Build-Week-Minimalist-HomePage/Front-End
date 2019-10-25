import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import Todo from "./Todo.js";
import { toggleTask } from "../../store/actions/todoActions";
import {axiosWithAuth} from '../../axiosWithAuth';


const TodoList = props => {

   

   useEffect(()=>{
      axiosWithAuth()
         .get('http://bw-homepage.herokuapp.com/api/notes/:id')
         .then((res)=>{

         })
   });

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
