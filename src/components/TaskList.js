import TaskShow from "./TaskShow";

function TaskList({ posts, onDelete, onUpdate }) {
  return (
    <div className="taskList">
      {posts.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
