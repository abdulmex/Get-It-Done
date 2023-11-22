import { TaskList } from "./TaskList";
export function TaskField({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className="container task-field mt-5">
      <ul>
        {task.map((item) => (
          <TaskList
            item={item}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
