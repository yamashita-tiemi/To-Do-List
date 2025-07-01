import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: rgb(221, 238, 255);
  padding-top: 100px;
`;

export const TodoContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #1f2937;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
    border-bottom: 1px solid #f3f4f6;
  }

  .add-task-section {
    padding: 16px;
    border-bottom: 1px solid #f3f4f6;

    display: flex;
    gap: 8px;
  }

  .task-list {
    overflow-y: auto;
  }
`;

export const TaskContainer = styled.div`
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;
