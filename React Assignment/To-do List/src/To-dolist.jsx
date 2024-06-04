import  { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleAddTask = () => {
      if (inputValue.trim()) {
        setTasks([...tasks, inputValue]);
        setInputValue('');
      }
    };
  
    const handleDeleteTask = (index) => {
      const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(newTasks);
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TodoList;
