import React, { useState } from "react";
import { Trash2, Check } from "lucide-react";
import type { Task } from "../../types";
import { TaskCardContainer } from "./styles";
import Button, { CheckBoxButton } from "../Button";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => Promise<void>;
  onUpdateComplete: (id: number, completed: boolean) => Promise<void>;
}

const ButtonProps = {
  edit: {
    color: "#6b7280",
    hoverColor: "#f3f4f6",
  },
  delete: {
    color: "#ef4444",
    hoverColor: "#fee2e2",
  },
  save: {
    color: "#16a34a",
    hoverColor: "#dcfce7",
  },
  cancel: {
    color: "#6b7280",
    hoverColor: "#f3f4f6",
  },
};

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDelete,
  onUpdateComplete,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleToggleComplete = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await onUpdateComplete(task.id, !task.completed);
    } catch (error) {
      console.error("Erro ao alterar status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (): Promise<void> => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      setIsLoading(true);
      try {
        await onDelete(task.id);
      } catch (error) {
        console.error("Erro ao deletar tarefa:", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <TaskCardContainer $completed={task.completed} $isLoading={isLoading}>
      <div className="task-card">
        <div className="task-content">
          <CheckBoxButton
            onClick={handleToggleComplete}
            disabled={isLoading}
            $completed={task.completed}
          >
            {task.completed && <Check size={12} />}
          </CheckBoxButton>

          <span className="task-text">{task.name}</span>
        </div>

        <Button
          $color={ButtonProps.delete.color}
          $hoverColor={ButtonProps.delete.hoverColor}
          onClick={handleDelete}
          disabled={isLoading}
          title="Excluir"
        >
          <Trash2 size={14} />
        </Button>
      </div>
    </TaskCardContainer>
  );
};

export default TaskCard;
