import { useEffect, useState } from 'react';
import gyr from './res/gyr.png';
import chonkers from './res/chonkers.jpg';
import lizard from './res/air-lizard.png';
import turtle from './res/land-turtle.jpg';
import './Carousel.css';
import React from 'react';
import { Card } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export class Carousel extends React.Component {
    render() {
        

        return (
            <div className='carousel'>
                <Card className='card small-card'>
                    <WestIcon className="icon"/>
                    <img src={gyr} alt='Not found' className='img'></img>
                </Card>
                <Card className='card big-card'>
                    <PlayCircleIcon className="icon"/>
                    <img src={chonkers} alt='Not found' className='img'></img>
                </Card>
                <Card className='card small-card'>
                    <EastIcon className="icon"/>
                    <img src={turtle} alt='Not found' className='img'></img>
                </Card>
            </div>
        );
    }
};