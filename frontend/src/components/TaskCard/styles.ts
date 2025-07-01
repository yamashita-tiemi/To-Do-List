import styled from "styled-components";

export const TaskCardContainer = styled.div<{
  $completed: boolean;
  $isLoading: boolean;
}>`
  padding: 16px;
  transition: background-color 0.2s ease;
  border-left: 4px solid
    ${($props) => ($props.$completed ? "#4ade80" : "transparent")};
  background-color: ${($props) =>
    $props.$completed ? "rgba(74, 222, 128, 0.05)" : "transparent"};
  opacity: ${($props) => ($props.$isLoading ? 0.5 : 1)};

  &:hover {
    background-color: #f9fafb;
  }

  .task-card {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .task-content {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    padding-right: 16px;
  }

  .text-container {
    flex: 1;
  }

  .task-text {
    font-size: 16px;
    color: #1f2937;
    text-decoration: ${($props) => ($props.$completed ? "line-through" : "none")};
  }

  button {
    padding: 8px;
  }
`;
