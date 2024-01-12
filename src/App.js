import { useSelector } from 'react-redux';
import { selectAllItems } from './features/todo/todoSlice';
import AddItem from './features/todo/AddItem';
import List from './features/todo/List';
import './App.css';


function App() {
  const items = useSelector(selectAllItems);

  return (
    <div className='app-container'>
      <h1>Todo List:</h1>
      <div className='input-container'>
        <AddItem />
      </div>
      <div className='list-container'>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
