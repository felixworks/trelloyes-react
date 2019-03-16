import React from 'react';
import Card from '../Card/Card.js';
import './List.css';

function List(props) {
    // console.log('list props', props);
    console.log('list of cardIds', props.cardIds);
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            {props.cardIds.map((cardId) => <Card 
            cardId={cardId} 
            key={cardId}
            title={props.allCards[cardId].title}
            content={props.allCards[cardId].content}
            />)}
        </section>
    )
}

export default List;