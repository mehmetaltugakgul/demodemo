import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowUpdate(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="taskShow">
      {showUpdate ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Başlık</h3>
          <p>{task.title}</p>
          <h3>YapılacakLar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="taskDelete">
              Sil
            </button>
            <button className="taskUpdate" onClick={handleUpdateClick}>
              Düzenle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
