import { useEffect, useState } from 'react';
import pic0 from './res/0.jpg';
import pic1 from './res/1.jpg';
import pic2 from './res/2.jpg';
import pic3 from './res/3.jpg';
import pic4 from './res/4.PNG';
import './Carousel.css';
import React from 'react';
import { Card } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export function Carousel() {
    const images = [pic0, pic1, pic2, pic3, pic4];
    const [display, setDisplay] = useState([images[0], images[1], images[2]]);
    const [displayedNum, setDisplayedNum] = useState([0, 1, 2]);
    const [play, togglePlay] = useState(false);

    function rotateLeft() {
        const tempArray = [];
        for (const num of displayedNum) {
            let tempNum = num - 1;
            if (tempNum < 0) {
                tempNum = images.length - 1;
            }
            tempArray.push(tempNum);
        }

        setDisplayedNum(tempArray);
        setDisplay([images[tempArray[0]], images[tempArray[1]], images[tempArray[2]]]);
    }

    function rotateRight() {
        const tempArray = [];
        for (const num of displayedNum) {
            let tempNum = num + 1;
            if (tempNum >= images.length) {
                tempNum = 0;
            }
            tempArray.push(tempNum);
        }

        setDisplayedNum(tempArray);
        setDisplay([images[tempArray[0]], images[tempArray[1]], images[tempArray[2]]]);
    }

    function toggleShuffle() {
        togglePlay(!play);

    }

    return (
        <div className='carousel'>
            <Card className='card small-card' onClick={() => rotateLeft()}>
                <WestIcon className="icon"/>
                <img src={display[0]} alt='Not found' className='img'></img>
            </Card>
            <Card className='card big-card' onClick={() => toggleShuffle()}>
                {play && <PauseCircleIcon className="icon"/>}
                {!play && <PlayCircleIcon className="icon"/>}
                <img src={display[1]} alt='Not found' className='img'></img>
            </Card>
            <Card className='card small-card' onClick={() => rotateRight()}>
                <EastIcon className="icon"/>
                <img src={display[2]} alt='Not found' className='img'></img>
            </Card>
        </div>
    );
};