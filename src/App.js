import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("https://demodemo-uiwg-git-main-mehmetaltugakgul.vercel.app/posts", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...posts, response.data];

    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("https://demodemo-uiwg-git-main-mehmetaltugakgul.vercel.app/posts");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [posts]);

  const deleteTaskById = async (id) => {
    await axios.delete(`https://demodemo-uiwg-git-main-mehmetaltugakgul.vercel.app/posts/${id}`);
    const afterDeletedTask = posts.filter((post) => {
      return post.id !== id;
    });
    setTasks(afterDeletedTask);
  };

  const updateTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`https://demodemo-uiwg-git-main-mehmetaltugakgul.vercel.app/posts/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = posts.map((post) => {
      if (post.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return post;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        posts={posts}
        onDelete={deleteTaskById}
        onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;
