import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';

it('renders without crashing', () => {
    const div = document.createElement("div");

    ReactDOM.render(<List
        header={list.header} 
        key={list.id} 
        cardIds={list.cardIds} 
        allCards={this.props.store.allCards}
        />, div);
    ReactDOM.unmountComponentAtNode(div);
});