export function TaskList({ item, onDeleteTask, onToggleTask }) {
  return (
    <li className="m-2 py-2">
      <input
        type="checkbox"
        value={item.done}
        onChange={() => onToggleTask(item.id)}
        className="mx-2"
      />
      <span
        style={
          item.done ? { textDecoration: "line-through", color: "grey" } : {}
        }
      >
        {item.description}
      </span>
      <button className="delete-btn" onClick={() => onDeleteTask(item.id)}>
        <svg
          className="text-danger"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18"></path>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </li>
  );
}
