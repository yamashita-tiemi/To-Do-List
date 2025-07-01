import styled from "styled-components";

export const ButtonContainer = styled.button<{ $color?: string; $backgroundColor?: string; $hoverColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  background-color: ${props => props.$backgroundColor || "transparent"};
  color: ${(props) => props.$color || "white"};

  &:hover:not(:disabled) {
    background-color: ${props => props.$hoverColor || "#2563eb"};
  }

  &:disabled {
    background-color:rgb(168, 182, 210);
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Checkbox = styled.button<{ $completed: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid ${(props) => (props.$completed ? "#22c55e" : "#d1d5db")};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$completed ? "#22c55e" : "none")};
  color: ${(props) => (props.$completed ? "white" : "inherit")};

  &:hover:not(:disabled) {
    border-color: #4ade80;
    transform: scale(1.05);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;