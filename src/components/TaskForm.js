import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

// funcion para manejar el formulario
function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch(); // hook para poder utilizar el dispatch
  const navigate = useNavigate(); // hook para poder utilizar el navigate
  const params = useParams(); // hook para obtener los parametros de la ruta
  const tasks = useSelector((state) => state.tasks); // hook para obtener las tareas

  // funcion para manejar el cambio de los inputs
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // funcion para manejar el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(), //genera un id unico
        })
      );
    }
    navigate("/"); //redirecciona a la ruta principal
  };

// funcion para obtener la tarea a editar
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-sx font-bold">Task:</label>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />

      <label htmlFor="description" className="block text-sx font-bold mb-2">Description:</label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>

      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  );
}
export default TaskForm;
