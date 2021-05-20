
import {useState} from 'react';
//import ButtonClicker from './ButtonClicker';
import Card from './Card.js';
import img1 from './assets/barn-owl-5780100_640.jpg'
import img2 from './assets/butterfly-5301066_640.jpg'
import img3 from './assets/deer-6219100_640.jpg'


function App() {
 
  return (

   <div className='container-fluid d-flex justify-content-center'>
     <div className="row">
       <div>
         <h1 className='text-center'>Annimal Planet</h1>
       </div>
     <div class="col-md-4">
         <Card imgsrc={img1}title='Owl'/>
         </div>
         <div class="col-md-4">
         <Card imgsrc={img2}title='Butterfly'/>
         </div>
         <div class="col-md-4">
         <Card imgsrc={img3}title='Deer'/>
         </div>

     </div>
    
   </div>
  );
}


export default App;
