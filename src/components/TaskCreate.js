import { useState } from "react";

function TaskCreate({ onCreate, post, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(post ? post.title : "");
  const [taskDesc, setTaskDesc] = useState(post ? post.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(post.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="">
          <h3>Task Düzenleyiniz</h3>
          <form className="taskForm">
            <label>Başlıği Düzenleyiniz</label>
            <input value={title} onChange={handleChange} />
            <label>Taskı Düzenleyiniz</label>
            <textarea value={taskDesc} onChange={handleDescChange} rows={4} />
            <button className="update" onClick={handleSubmit}>
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="addTask">
          <h3>Task Ekleyiniz</h3>
          <form className="taskForm">
            <label>Başlık</label>
            <input value={title} onChange={handleChange} />
            <label>Task</label>
            <textarea value={taskDesc} onChange={handleDescChange} rows={4} />
            <button className="create" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
