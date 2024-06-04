import { useState } from 'react';
import './App.css'; 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (index, newValue) => {
    const updatedList = [...todoList];
    updatedList[index] = newValue;
    setTodoList(updatedList);
  };

  const handleDeleteTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Type here"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <div className="button-container">
              <button onClick={() => handleEditTodo(index, prompt('Edit Todo', todo))}>
                Edit
              </button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
