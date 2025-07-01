import { EmptyStateContainer } from "./styles";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  return (
    <EmptyStateContainer>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </EmptyStateContainer>
  );
};

export default EmptyState;