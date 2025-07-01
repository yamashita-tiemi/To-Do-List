import type { CreateTaskRequest, Task, UpdateTaskRequest } from '../types';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export class TaskService {
  static async getAllTasks(): Promise<Task[]> {
    try {
      const response = await axios.get<Task[]>(`${API_BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
      throw new Error('Falha ao carregar tarefas');
    }
  }

  static async createTask(taskData: CreateTaskRequest): Promise<Task> {
    try {
      const response = await axios.post<Task>(`${API_BASE_URL}/tasks`, taskData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      throw new Error('Falha ao criar tarefa');
    }
  }

  static async updateTask(id: number, updates: UpdateTaskRequest): Promise<void> {
    try {
      await axios.patch(`${API_BASE_URL}/tasks/${id}`, updates);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      throw new Error('Falha ao atualizar tarefa');
    }
  }

  static async deleteTask(id: number): Promise<void> {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      throw new Error('Falha ao deletar tarefa');
    }
  }
}