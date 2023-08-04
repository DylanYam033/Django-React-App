import React from "react";
import { useNavigate } from "react-router-dom";

// function TaskCard({task}) {

//   const navigate = useNavigate()

//   return (
//     <div
//     className="bg-zinc-800 p-3 mr-3 hover:bg-zinc-700 hover:cursor-pointer hover:scale-105 transition-all duration-200 rounded-md"
//     onClick={() => {
//       navigate(`/tasks/${task.id}`)
//     }}>
//       <p className="font-bold uppercase">{task.title}</p>
//       <p className="text-slate-400">{task.description}</p>
//     </div>
//   );
// }

function TaskCard({ task }) {
  // const { deleteTask, completedTask } = useContext(TaskContext);
  const navigate = useNavigate()
  return (
    <div
      className={`bg-card-fondo text-white p-4 hover:bg-zinc-700 hover:cursor-pointer hover:scale-105 transition-all duration-200 rounded-md rounded-md ${
        task.completed ? "bg-green-500" : ""
      } `}
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="text-xl font-bold capitalize text-center">{task.title}</h1>
      <p className="text-center">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 mx-auto flex"
        // onClick={() => deleteTask(task.id)}
      >
        Borrar Tarea
      </button>
      <button
        className={`bg-green-500 px-2 py-1 rounded-md mt-4 mx-auto flex  ${
          task.completed ? "bg-black" : ""
        }`}
        // onClick={() => completedTask(task.id)}
      >
        Completada
      </button>
    </div>
  );
}

export { TaskCard };
