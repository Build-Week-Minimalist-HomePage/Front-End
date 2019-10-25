import React, {useState} from 'react';



const Nav = () => {

   // $('.menubtn').on('click', function(){
   //    $(this).toggleClass('opened');
   //    $('.navmenu').toggleClass('opened');
   // });
   const [menubtn, setmenubtn] = useState(true);
   const [navmenu, setnavmenu] = useState(true);

   const toggle = () => {

   }

   return (
      <div class="container">
      <div class="opened"><span></span></div>
      
      <nav class="opened">
         <h4>Menu</h4>
         <ul class="text-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
         </ul>

      </nav>
      
      </div>
   );
};

export default Nav;