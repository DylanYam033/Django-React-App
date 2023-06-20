import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-200">
        <Link to="/tasks/create"> New Task</Link>
      </button>
    </div>
  );
}

export { Navigation };
