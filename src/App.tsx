import React, { useState } from 'react';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  title: string;
  done: boolean;
}

function App(): JSX.Element {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(task);
  };

  const addTask = (title: string) => {
    setTaskList([...taskList, { title, done: false }]);
    setTask('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>SAVE</button>
      </form>
      {JSON.stringify(taskList, null, 2)}
    </>
  );
}

export default App;
