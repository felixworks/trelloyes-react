import React, { Component } from 'react';
import './App.css';
import List from './List/List.js';

class App extends Component {
  render() {
    // console.log('this inside of app', this);
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
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



// MESSAGES SNAPSHOT TEST
// import Messages from './Messages/Messages.js';

// class App extends Component {
//   render () {
//     return (
//     <div className="App">
//       <Messages name="Messages" unread={0}/>
//       <Messages name="Notifications" unread={10}/>
//     </div>
//     )
//   }
// }

// export default App;