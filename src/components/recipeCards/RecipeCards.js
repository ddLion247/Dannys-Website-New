import './RecipeCards.css';
import React from 'react';

export function RecipeCards() {
    const chili = {title:"Chili", picture: "Picture???" , ingredients:["Ingredients:"," ","Onions"," ","Garlic"], instructions:"Instructions"};

    const allCards = [chili];//ADD TO all cards

    // return allCards.map((allCards) => <li>{allCards}</li>);
    
    const images = allCards.map((allCards) => <img src={allCards.picture} alt={allCards.title} />);
    

    return (
        <div>
            <div className='medTxt'>Recipe Cards</div>
            <div className='smallTxt'>~</div>
            <div className='recipeCard'>
                <div className='recipeCardTitle'>{chili.title}</div>
                <div className='recipeCardPicture'>{chili.picture}</div>
                <div className='recipeCardIngredients'>{chili.ingredients}</div>
                <div className='recipeCardInstructions'>{chili.instructions}</div>
                <div className='recipeCardDelete'>Delete</div>
                <div></div>
            </div>
        </div>
    );
}