import { useEffect, useState } from "react";
import { getTasks } from "../api/tasksApi";
import { TaskCard } from "../components/TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export { TaskList };
