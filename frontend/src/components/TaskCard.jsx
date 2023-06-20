import React from "react";
import { useNavigate } from "react-router-dom";

function TaskCard({task}) {

  const navigate = useNavigate()

  return (
    <div 
    className="bg-zinc-800 p-3 mr-3 hover:bg-zinc-700 hover:cursor-pointer hover:scale-105 transition-all duration-200 rounded-md"
    onClick={() => {
      navigate(`/tasks/${task.id}`)
    }}>
      <p className="font-bold uppercase">{task.title}</p>
      <p className="text-slate-400">{task.description}</p>
    </div>
  );
}

export { TaskCard };
