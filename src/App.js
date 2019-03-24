import React, { Component } from 'react';
import './App.css';
import List from './List/List.js';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }

  state = {
      store: STORE
  };

  handleNewCard = (list) => {
    // console.log('list to add new card to', list);
    let newCard = newRandomCard();
    // console.log('newCard', newCard);
    let newStore = this.state.store;
    newStore.allCards[newCard.id] = {
      title: newCard.title,
      content: newCard.content
    };
    newStore.lists[list - 1].cardIds.push(newCard.id);
    // console.log('newStore', newStore);
    this.setState({
      store: newStore
    })
  }

  handleDelete = (cardID, listId) => {
    console.log('cardId of the deleted card', cardID);
    console.log('listId of the deleted card', listId);
    let newList = this.state.store.lists[listId-1].cardIds.filter(element => element !== cardID);
    console.log('newList', newList);
    let newStore = this.state.store;
    newStore.lists[listId-1] = { 
      ...newStore.lists[listId-1],
      cardIds: newList,
    };
    console.log('newStore', newStore);
    this.setState({
      store: newStore
    });
  }

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map(list => {
            return <List 
              header={list.header} 
              key={list.id}
              listId={list.id}
              cardIds={list.cardIds} 
              allCards={this.state.store.allCards} 
              onClickDelete={this.handleDelete} 
              onClickCard={this.handleNewCard}/>
          })}
        </div>
      </main>
    );
  }
}







export default App;