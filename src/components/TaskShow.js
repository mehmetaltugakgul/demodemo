import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ post, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState(false);

  const handleDeleteClick = () => {
    onDelete(post.id);
  };

  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowUpdate(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(post);
  return (
    <div className="taskShow">
      {showUpdate ? (
        <TaskCreate post={post} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Başlık</h3>
          <p>{post.title}</p>
          <h3>YapılacakLar</h3>
          <p>{post.taskDesc}</p>
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
