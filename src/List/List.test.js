import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';
import STORE from '.././store.js';

describe('List test', () => {
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<List 
            header={STORE.lists[0].header} 
            key={STORE.lists[0].id} 
            cardIds={STORE.lists[0].cardIds} 
            allCards={STORE.allCards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders List UI as expected', () => {
        const tree = renderer
            .create(<List 
                header={STORE.lists[0].header} 
                key={STORE.lists[0].id} 
                cardIds={STORE.lists[0].cardIds} 
                allCards={STORE.allCards} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});