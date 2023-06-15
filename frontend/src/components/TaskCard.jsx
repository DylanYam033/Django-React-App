import React from "react";

function TaskCard({task}) {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}

export { TaskCard };
