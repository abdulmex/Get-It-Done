import { useState } from "react";

export function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, done: false, id: Date.now() };

    onAddTask(newTask);

    setDescription("");
  }
  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="row p-2">
        <input
          type="text"
          placeholder="Create new task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="col-lg-8 col-md-6 col-sm-6 ms-lg-5 ms-md-5 input"
        />
        <button className="col-lg-2 col-md-3 col-sm-6 ms-md-5 ms-lg-5 mt-4 mt-lg-0 mt-md-0 btns">
          Add
        </button>
      </form>
    </div>
  );
}
