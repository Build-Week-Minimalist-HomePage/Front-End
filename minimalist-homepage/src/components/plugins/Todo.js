import React, {useState} from "react";
import axios from 'axios';
import {axiosWithAuth} from '../../axiosWithAuth';


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

export default Todo;




