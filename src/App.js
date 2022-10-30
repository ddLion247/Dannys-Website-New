import { useEffect, useState } from 'react';
import './App.css';
import { Carousel } from './components/carousel/Carousel.js';

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
      <Carousel />
    </div>
  );
}

export default App;