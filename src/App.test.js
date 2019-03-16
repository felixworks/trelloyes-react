import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App.js';
import STORE from './store.js';

describe('App test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<App store={STORE}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders App UI as expected', () => {
        const tree = renderer
            .create(<App store={STORE} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});