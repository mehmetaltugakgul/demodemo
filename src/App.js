import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("https://cakmajira4.netlify.app/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];

    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("https://cakmajira4.netlify.app/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`https://cakmajira4.netlify.app/tasks/${id}`);
    const afterDeletedTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletedTask);
  };

  const updateTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`https://cakmajira4.netlify.app/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;
