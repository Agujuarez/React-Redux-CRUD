import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // agrega la tarea al estado
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload; // extrae los datos de la tarea

      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description; // actualiza los datos de la tarea
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload); // filtra las tareas y devuelve las que no coinciden con el id
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
