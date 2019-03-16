import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('Card test', () => {
    it('renders without crashing', () => {
        const div = document.createElement("div");
    
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders card with correct info', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});