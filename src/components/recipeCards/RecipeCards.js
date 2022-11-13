import './RecipeCards.css';
import React from 'react';
import { Cards } from '../cards/Cards.js';

export function RecipeCards() {
    return (
        <div>
            <div className='smallTxt'>~</div>
            <div className='medTxt'>Recipe Cards</div>
            <Cards />
        </div>
    )
}