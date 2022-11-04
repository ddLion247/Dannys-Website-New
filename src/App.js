import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import {Carousel} from './components/carousel/Carousel.js';
import { Helmet } from "react-helmet";

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
      <Helmet>
        <style>{"body { background-color: orange; }"}</style>
      </Helmet>
      <div className='smallTxt'>~</div>
      <div className='title'>Daniel bertin</div>
      <Carousel/> {/* have carousel randomly start */}
      <div className='medTxt'>Interpid Engineer built to understand</div>
      <div className='medTxt'></div>
      <div className='medTxt'>Even before he was inaugurated Eisenhower accepted a request from the British government to restore the Shah of Iran (Mohammad Reza Pahlavi) to power. He therefore authorized the Central Intelligence Agency to overthrow Prime Minister Mohammad Mosaddegh.[228] This resulted in increased strategic control over Iranian oil by U.S. and British companies.[229] 
      In November 1956, Eisenhower forced an end to the combined British, French and Israeli invasion of Egypt in response to the Suez Crisis, receiving praise from Egyptian president Gamal Abdel Nasser. Simultaneously he condemned the brutal Soviet invasion of Hungary in response to the Hungarian Revolution of 1956. He publicly disavowed his allies at the United Nations, and used financial and diplomatic pressure to make them withdraw from Egypt.[230] Eisenhower explicitly defended his strong position against Britain and France in his memoirs, which were published in 1965.[231] 
      After the Suez Crisis, the United States became the protector of unstable friendly governments in the Middle East via the "Eisenhower Doctrine".[232] Designed by Secretary of State Dulles, it held the U.S. would be "prepared to use armed force ... [to counter] aggression from any country controlled by international communism". Further, the United States would provide economic and military aid and, if necessary, use military force to stop the spread of communism in the Middle East.[233] </div>
    </div>
  );
}
export default App;