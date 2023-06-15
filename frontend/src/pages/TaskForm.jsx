import { useForm } from "react-hook-form";
import { createTasks } from "../api/tasksApi";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const { register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit( async data =>{
    await createTasks(data)
    navigate('/tasks')
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button>save</button>
      </form>
    </div>
  );
}

export { TaskForm };
