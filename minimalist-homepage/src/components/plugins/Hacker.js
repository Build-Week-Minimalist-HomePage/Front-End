import React, {useState, useEffect, forceUpdate} from 'react';
import axios from 'axios';


const Hacker = () => {
   const [stories, setStories] = useState([]);

   let newStories = [];

   useEffect(()=>{
      
      

      axios
         .get("https://hacker-news.firebaseio.com/v0/topstories.json")  // returns list of 100 objects 
         .then(result => {
            const results = result.data.slice(0, 5);
            results.forEach(element => 
            {
               axios
                  .get(
                     "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
                  )
                  .then(result => {
                     newStories.push(result);
                     
                  })
                  .catch(err => {
                     console.log(err);
                  });
            })
            
        //setStories(newStories);
        
         })
         .then(()=>setStories(newStories))
         .catch(err => {
            console.log('error in catch', err);
         });
      
      
   }, []);

   

   if (!stories.data) {
      
      return (
         <>
            <h1>loading</h1>
            {console.log('stories!', stories)}
         </>
      )
   }

   return (

      <div>
        <h2>{ stories[1].data.title }</h2>
        {console.log('stories!', stories)}
      </div>

   );
}

export default Hacker;




// useEffect(()=>{
//    axios
//       .get('https://hacker-news.firebaseio.com/v0/topstories.json')
//       .then((res) => {
//          console.log("hacker res:", res);
//        })
// }, []);


// console.log('typeof stories - ', typeof stories);
//       console.log('whats in stories - ', stories.keys());
//       console.log('json stringified - ', JSON.stringify(stories));
//       console.log('Object.getOwnPropertyNames(stories)', Object.getOwnPropertyNames(stories) );