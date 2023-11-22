export function Footer({ OnClearTask, taskCount }) {
  return (
    <div className="container text-center mt-5 mb-3">
      <footer>
        {taskCount > 0 && (
          <button className="btns p-2" onClick={OnClearTask}>
            Delete all Tasks
            <svg
              className="ms-2 text-danger"
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
        )}
      </footer>
    </div>
  );
}
