import TaskShow from "./TaskShow";

function TaskList({ posts, onDelete, onUpdate }) {
  return (
    <div className="taskList">
      {posts.map((post, index) => {
        return (
          <TaskShow
            key={index}
            post={post}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
