import React, { useState } from 'react';
import useTodo from '../context/context';

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-4 py-2 gap-x-4 shadow-lg transition-all duration-300 text-gray-900 ${
        todo.completed ? 'bg-green-100' : 'bg-gray-100'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-600 w-5 h-5"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-1 border-none bg-transparent rounded-lg text-lg text-gray-700 outline-none px-2 py-1 transition-all duration-200 ease-in-out focus:ring-2 focus:ring-indigo-400 ${
          todo.completed ? 'line-through text-gray-400' : ''
        } ${isEditable ? 'bg-white' : ''}`}
        value={todoMsg}
        onChange={e => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-lg text-gray-700 transition-all duration-200 hover:bg-blue-100 focus:ring-2 focus:ring-blue-300 ${
          todo.completed ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) {
            editTodo();
          } else {
            setIsEditable(prev => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isEditable ? '💾' : '✏️'}
      </button>
      <button
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-lg text-gray-700 transition-all duration-200 hover:bg-red-100 focus:ring-2 focus:ring-red-300"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
