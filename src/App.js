import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [x, setX] = useState(6);
  const [array, setArray] = useState([]);

  useEffect(()=> {
    console.log('run useEffect');
    const tempArray = [];
    for (let i = 0; i < x; i++) {
      tempArray.push(i);
    }
    setArray(tempArray);
  }, [x]);
  
  return (
    <div>
      <div>
        <button onClick={() => setX(4)}>Add</button>
      </div>
      {array.map(element => <span>{element} </span>)}
      
    </div>
  );
}

export default App;