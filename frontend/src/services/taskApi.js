import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});


// GET ALL TASKS
export const getTasks = async (status = "") => {
  const url = status ? `?status=${status}` : "";

  const response = await API.get(url);

  return response.data;
};


// CREATE TASK
export const createTask = async (taskData) => {
  const response = await API.post("/", taskData);

  return response.data;
};


// UPDATE TASK
export const updateTask = async (id, taskData) => {
  const response = await API.put(`/${id}`, taskData);

  return response.data;
};


// DELETE TASK
export const deleteTask = async (id) => {
  const response = await API.delete(`/${id}`);

  return response.data;
};


export default API;