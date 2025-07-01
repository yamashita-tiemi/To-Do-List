import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #f3f4f6;
  text-align: center;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const StatsSpan = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
`;

export const ProgressBar = styled.div`
  margin-top: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $width: number }>`
  height: 100%;
  background-color: #16a34a;
  transition: width 0.3s ease;
  width: ${(props) => props.$width}%;
`;
