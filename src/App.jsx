import { useEffect, useState } from 'react';
import './App.css';
import { Todoprovider } from './context/context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos(prev =>
      prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    setTodos(prev =>
      prev.map(prevTodo =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Todoprovider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen py-8 bg-gradient-to-br from-[#172842] to-[#30445b] flex justify-center items-center">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md shadow-lg rounded-lg px-6 py-5 text-white">
          <h1 className="text-3xl font-extrabold text-center mb-8 text-white tracking-wider">
            Manage Your <span className="text-indigo-400">Todo</span> List
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-4">
            {/* Loop and Add TodoItem here */}
            {todos.map(todo => (
              <div
                key={todo.id}
                className="w-full bg-white/20 rounded-xl p-4 shadow-lg transition-transform transform hover:scale-105 duration-300 ease-out"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
