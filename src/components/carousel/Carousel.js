import { useEffect, useState } from 'react';
import gyr from './res/gyr.png';
import './Carousel.css';
import React from 'react';

export class Carousel extends React.Component {
    render() {
        return (
            <div className='carousel'>
                <span><img src={gyr} alt='Not found' className='small-img'></img></span>
                <span><img src={gyr} alt='Not found' className='big-img'></img></span>
                <span><img src={gyr} alt='Not found' className='small-img'></img></span>
            </div>
        );
    }
};