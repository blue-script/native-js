import React from 'react';
import './App.css';
import {User} from './05/06-callbacks';

function App() {
  const name = ["Bob", 'Sam', 'Max', 'David']
  const liElements = name.map(n=> <li>{n}</li>)
  const users = [{id: 1, name:"Bob"}, {id: 123, name: 'Sam'}, {id: 3456, name: 'Max'}, {id: 45623, name: 'David'}]
  const liElements2 = users.map(u=> <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
