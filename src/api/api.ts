import axios from 'axios';
import { Task } from '../types';

const API_KEY = 8284261;
const BASE_URL = `https://reactexambackend.onrender.com/missions/${API_KEY}`;

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(BASE_URL);
  console.log(response.data); 

  return response.data;
};

export const addTask = async (task: Task): Promise<void> => {
  await axios.post(BASE_URL, task);
};

export const updateTaskStatus = async (id: string): Promise<void> => {
  await axios.post(`${BASE_URL}/progress/${id}`);
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};