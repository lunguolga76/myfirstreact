import React from 'react';
//import img1 from './assets/barn-owl-5780100_640.jpg';
import ButtonClicker from './ButtonClicker'


function Card(props){
 
 return (
    <div className='card text-center shadow p-3 mb-5 bg-body rounded'>
    <div className='overflow'>
       <img style={{width:'18rem'}}src={props.imgsrc} class="rounded-circle"alt='Image1'/>
       <div className='card-body text-dark'>
          <h4 className='card-title'>{props.title}</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
    <a href="#" class="btn btn-primary"> <ButtonClicker/></a>

       </div>
    </div>
    </div>
 );
 }

export default Card;