import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddItem from './components/AddItem';
import List from './components/List';
import { listReducer } from './utils/reducers';

const initialState = {
  items: [
    { id: uuid(), name: 'Finish TODO list' },
    { id: uuid(), name: 'Make portfolio' }
  ]
}

function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const { items } = state;
  console.log(state)
  console.log(dispatch);

  return (
    <div className='app-container'>
      <h1>Todo List:</h1>
      <div className='input-container'>
        <AddItem dispatch={dispatch} />
      </div>
      <div className='list-container'>
        <List items={items} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
