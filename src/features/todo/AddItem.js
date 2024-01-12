import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './todoSlice';

const AddItem = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(input));
    setInput('');
  };

  return (
    <form onSubmit={submitHandler} >
      <input type='text' onChange={handleChange} value={input} />
      <button type='submit'>+</button>
    </form>
  );
};

export default AddItem;