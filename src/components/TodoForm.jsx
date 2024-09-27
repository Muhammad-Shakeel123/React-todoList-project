import React, { useState } from 'react';
import useTodo from '../context/context';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = e => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex w-full shadow-lg rounded-lg">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full rounded-l-lg px-4 py-2 text-gray-900 outline-none bg-white/10 placeholder-gray-400 
                   focus:ring-2 focus:ring-indigo-400 focus:bg-white focus:placeholder-gray-600 
                   transition-all duration-200 ease-in-out"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-r-lg 
                   transition-transform transform hover:scale-105 focus:ring-2 focus:ring-green-400 
                   duration-200 ease-in-out shadow-md"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
