import React, {useState} from 'react';

const Note = () => {
   const [text, setText] = useState('');

   const handleChange = (e) => {
      setText(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <label>
               Scratch Pad
               <textarea value={text} onChange={handleChange} />
            </label>
            <button>save</button>
      </form>
      </>
   )
}


export default Note;