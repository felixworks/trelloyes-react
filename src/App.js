import React, { Component } from 'react';
import './App.css';
import List from './List/List.js';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <main className='App'>
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
          {this.props.store.lists.map(list => {
            return <List 
              header={list.header} 
              key={list.id} 
              cardIds={list.cardIds} 
              allCards={this.props.store.allCards} />
          })}
        </div>
      </main>
    );
  }
}

export default App;