import { useForm } from "react-hook-form";
import {
  createTasks,
  deleteTasks,
  updateTasks,
  getTask,
} from "../api/tasksApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTasks(params.id, data);
      toast.success("Task updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
          fontSize: "30px",
        },
      });
    } else {
      await createTasks(data);
      toast.success("Task created", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "white",
          fontSize: "30px",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTask();
  });
  return (
    <div className="max-w-xl mx-auto text-center">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button className="bg-indigo-500 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-200 block w-96 mb-3">
          Save
        </button>
      </form>
      {/* validamos si en la url actual hay un id y si hay un id mostramos el boton */}
      {params.id && (
        <button
        className="bg-red-500 px-3 py-2 rounded-lg hover:scale-105 transition-all duration-200 block w-96 mb-3"
          onClick={async () => {
            const confirmDelete = window.confirm("¿Delete Task?");
            if (confirmDelete) {
              await deleteTasks(params.id);
              toast.success("Task deleted", {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "white",
                  fontSize: "30px",
                },
              });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export { TaskForm };
