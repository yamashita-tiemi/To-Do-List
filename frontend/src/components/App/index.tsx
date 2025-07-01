import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import type { Task, UpdateTaskRequest } from "../../types.ts";
import { TaskService } from "../../services/api.ts";
import TaskCard from "../TaskCard/index.tsx";
import { AppContainer, TaskContainer, TodoContainer } from "./styles.ts";
import Input from "../Input/index.tsx";
import Button from "../Button/index.tsx";
import EmptyState from "../EmptyState/index.tsx";
import Footer from "../Footer/index.tsx";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedTasks = await TaskService.getAllTasks();
      setTasks(fetchedTasks);
    } catch (error: any) {
      console.error("Erro ao carregar tarefas:", error);
      setError(
        error.message ||
          "Erro ao carregar tarefas. Verifique se o servidor está rodando."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (): Promise<void> => {
    if (!newTask.trim()) return;

    try {
      setIsLoading(true);
      setError(null);

      const createdTask = await TaskService.createTask({
        name: newTask.trim(),
        completed: false,
      });

      setTasks((prev) => [...prev, createdTask]);
      setNewTask("");
    } catch (error: any) {
      console.error("Erro ao adicionar tarefa:", error);
      setError(error.message || "Erro ao adicionar tarefa.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (
    id: number,
    updates: UpdateTaskRequest
  ): Promise<void> => {
    try {
      await TaskService.updateTask(id, updates);
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao atualizar tarefa");
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    try {
      await TaskService.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error: any) {
      throw new Error(error.message || "Erro ao deletar tarefa");
    }
  };

  const toggleComplete = async (
    id: number,
    completed: boolean
  ): Promise<void> => {
    try {
      await updateTask(id, { completed });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <AppContainer>
      <TodoContainer>
        <div className="header">
          <h1>Tarefas</h1>
          <p>
            {completedCount} de {totalCount} concluídas
          </p>
        </div>

        <div className="add-task-section">
          <Input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Adicionar nova tarefa..."
            disabled={isLoading}
          />
          <Button
            onClick={addTask}
            disabled={isLoading || !newTask.trim()}
            title="Adicionar tarefa"
            $backgroundColor="#3b82f6"
            $hoverColor="#2563eb"
          >
            <Plus size={16} />
          </Button>
        </div>

        {error && (
          <p>ERROR</p>
        )}

        <div className="task-list">
          {isLoading && tasks.length === 0 ? (
            <p>LOADING</p>
          ) :
          tasks.length === 0 ? (
            <EmptyState
              title="Nenhuma tarefa cadastrada"
              subtitle="Adicione uma nova tarefa acima para começar"
            />
          ) : (
            <div>
              {tasks.map((task) => (
                <TaskContainer key={task.id}>
                  <TaskCard
                    task={task}
                    onDelete={deleteTask}
                    onUpdateComplete={toggleComplete}
                  />
                </TaskContainer>
              ))}
            </div>
          )}
        </div>

        {tasks.length > 0 && (
          <Footer totalCount={totalCount} completedCount={completedCount} />
        )}
      </TodoContainer>
    </AppContainer>
  );
};

export default App;
