import React, {useState} from 'react';

// import plugins
import Note from './plugins/Note';

const MinimalistHomepage = () => {
   const [queryTerm, setQueryTerm] = useState('');


   const handleQueryTerm = (e) => {
      setQueryTerm(e.target.value);
   }

   return (
      <>
         <h1>Minimalist Homepage</h1>
         
         
         <form method="get" action="https://www.google.com/search">
            <input type="text" 
                     name="q" 
                     size="31" 
                     value={queryTerm} 
                     onChange={handleQueryTerm}/>
            <button>Search</button>
         </form>
         
         <Note />

      </>
   );
}


export default MinimalistHomepage;