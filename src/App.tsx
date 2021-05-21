import React from 'react'
import { store } from './Todo.model'
import TodoList from './Todo.list'


export const TodoContext = React.createContext(store);

function App() {
  return (
    <TodoContext.Provider value={store}>
      <div className="App">
        <header className="App-header">
          <h1>TODO app created with Mobx State Tree and Typescript</h1>
        </header>
        <TodoList/>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
