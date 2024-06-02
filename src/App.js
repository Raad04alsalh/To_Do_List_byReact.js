import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <div style={{ textAlign: 'center', color: 'black', fontSize: 40, borderBottom: '2px solid gray' }}>
      <h1>TO DO LIST</h1>
    </div>
  );
}

function InputField({ newTask, setNewTask }) {
  return (
    <div>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          style={{ width: '550px', height: '50px', borderRadius: '6px', borderColor: 'lightgray', padding: '10px', margin: '22px', fontSize: '16px' }}
          placeholder="add item..."
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

function Button({ addTask }) {
  return (
    <div>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={(e) => e.preventDefault()}>
        <button
          type="button"
          style={{ width: '200px', height: '50px', backgroundColor: 'royalblue', border: '4px', borderRadius: '5px', borderColor: 'lightgreen' }}
          onClick={addTask}>
          ADD
        </button>
      </form>
    </div>
  );
}

function List({ tasks, deleteTask }) {
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
            <p style={{ marginRight: '10px', width: '550px', textAlign: 'left' }}>{task}</p>
            <button type="button" onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <InputField newTask={newTask} setNewTask={setNewTask} />
      <Button addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

