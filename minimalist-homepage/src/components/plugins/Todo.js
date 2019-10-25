import React, {useState} from "react";
import axios from 'axios';
import {axiosWithAuth} from '../../axiosWithAuth';
import { delNote } from "../../store/actions/todoActions";
import { connect } from "react-redux";


const Todo = props => {
   const [editing, setEditing] = useState(false);
   const [input, setInput] = useState('');

   const editingSub = () => {
      console.log('editingg', props.todo.id);
      setEditing(!editing);
   }

   const submitEdit = (e) => {
      e.preventDefault();
      axiosWithAuth()
         .put(`/api/notes/${props.todo.id}`, {"user_id": 99, 'note':input}).then(res=>console.log(res));

      setEditing(!editing);
      props.todo.task = input;   
   }

   const submitDelete = (e) => {
      e.preventDefault();
      delNote(props.todo.id);
      //axiosWithAuth()
        // .delete(`/api/notes/${props.todo.id}`, {"user_id": 99, 'note':input}).then(res=>console.log(res));

   }

   const changeHandler = (e) => {
      setInput(e.target.value);
   }   

   return (
      <>
        {!editing ? (
          <>
            <button onClick={editingSub}>edit note</button>
            <div onClick={() => props.toggleTask(props.todo.id)} style={{ textDecoration: `${props.todo.completed ? "line-through" : "none"}`}}>
            {props.todo.task}
            </div>

            {/* <button onClick={submitDelete}>delete note</button> */}

          </>
        ) : (
          <div>
            <button onClick={submitEdit}>submit edit</button>
            <input type='text' onChange={changeHandler} value={input}></input>
            <button onClick={editingSub}>edit note</button>
          </div>
        )}
      </>
    );
};


const mapStateToProps = state => {
   return {
     tasks: state.todoR.tasks
   };
 };
 
 export default connect(
   mapStateToProps,
   { delNote }
 )(Todo);

 





