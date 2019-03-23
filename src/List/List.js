import React from 'react';
import Card from '../Card/Card.js';
import './List.css';

function List(props) {
    console.log('list props', props);
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
            listId={props.key}
            onClickDelete={props.onClickDelete} 
            />)}
            <button type="button" onClick={() => props.onClickCard(props.header)}>Add Random</button> 
            
        </section>
    )
}

export default List;