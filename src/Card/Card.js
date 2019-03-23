import React from 'react';
import './Card.css';

function Card(props) {
    console.log('card props', props.listId);
    return (
        <div className="List-cards">
            <div className="Card">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button type="button" onClick={() => props.onClickDelete(props.cardId, props.listId)}>Delete</button> 
            </div>
        </div>
    )
}

export default Card;