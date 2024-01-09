import { useState } from 'react';

const AddItem = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: input});
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