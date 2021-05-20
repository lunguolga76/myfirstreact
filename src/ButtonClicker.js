
import {useState} from 'react';

function ButtonClicker() {
  const[myNumber, setMyNumber]=useState(0);
  //const[itIsRed, setItIsRed]=useState('false');
  const onButtonClick=()=>{
    setMyNumber(myNumber+1)

  }
 
  return (
    <div className='bg-primary rounded-2'>
    
     <button onClick={onButtonClick}>
        Count me</button>
        <p>We are {myNumber}</p>
      
     
    </div>
  );
}

export default ButtonClicker;
