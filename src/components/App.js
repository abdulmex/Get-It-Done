import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TaskField } from "./TaskField";
import { Footer } from "./Footer";

export default function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTask(storedTasks);
    }
  }, []);

  function handleAddTask(item) {
    setTask((tasks) => [...tasks, item]);
    localStorage.setItem("tasks", JSON.stringify([...task, item]));
  }

  function handleDeleteTask(id) {
    setTask((tasks) => task.filter((task) => task.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(task.filter((task) => task.id !== id))
    );
  }

  function handleToggleTask(id) {
    const updatedTasks = task.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function handleClearTask() {
    const confirm = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirm) setTask([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  function getTaskCount(tasks) {
    return tasks.length;
  }
  const taskCount = getTaskCount(task);

  return (
    <div className="app my-5">
      <Header />
      <Form onAddTask={handleAddTask} />
      <TaskField
        task={task}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Footer OnClearTask={handleClearTask} taskCount={taskCount} />
    </div>
  );
}
