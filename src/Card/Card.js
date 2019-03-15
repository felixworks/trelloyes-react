import React, { Component } from 'react';
import './Card.css';

function Card(props) {
    console.log('card props title', props.title);
    return (
        <div className="List-cards">
            <div className="Card">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Card;