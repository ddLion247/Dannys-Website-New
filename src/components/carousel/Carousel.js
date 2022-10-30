import { useEffect, useState } from 'react';
import pic0 from './res/0.png';
import pic1 from './res/1.jpg';
import lizard from './res/air-lizard.png';
import turtle from './res/land-turtle.jpg';
import './Carousel.css';
import React from 'react';
import { Card } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export function Carousel() {
    
    const images = [gyr, chonkers, lizard, turtle]
    const [array, setArray] = useState([images[0], images[1], images[2]]);
    const [index, setIndex] = useState([0,1,2]);

    function rotateRight(){
        console.log('rotate right');
        const tempIndex = index.slice();
        for (let i = 0; i < tempIndex.length; i++) {
            tempIndex[i] = tempIndex[i] + 1;
            if(tempIndex[i] >= images.length){
                tempIndex[i] = 0;
            }
        }
        console.log(tempIndex);
        setIndex(tempIndex);
        setArray([images[tempIndex[0]], images[tempIndex[1]], images[tempIndex[2]]]);
    }

    return (
        <div className='carousel'>
            <Card className='card small-card'>
                <WestIcon className="icon"/>
                <img src={array[0]} alt='Not found' className='img'></img>
            </Card>
            <Card className='card big-card'>
                <PlayCircleIcon className="icon"/>
                <img src={array[1]} alt='Not found' className='img'></img>
            </Card>
            <Card className='card small-card' onClick={() => rotateRight()}>
                <EastIcon className="icon"/>
                <img src={array[2]} alt='Not found' className='img'></img>
            </Card>
            <div></div>
        </div>
    );
};