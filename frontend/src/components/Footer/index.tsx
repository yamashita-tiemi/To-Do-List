import {
  FooterContainer,
  ProgressBar,
  ProgressFill,
  Stats,
  StatsSpan,
} from "./styles";

interface FooterProps {
  totalCount: number;
  completedCount: number;
}

const StatsColors = {
  pending: "#ea580c",
  completed: "#16a34a",
  neutral: "#9ca3af",
};

const Footer: React.FC<FooterProps> = ({ totalCount, completedCount }) => {
  const pendingCount = totalCount - completedCount;
  const progressPercentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  return (
    <FooterContainer>
      <Stats>
        <StatsSpan
          $color={pendingCount > 0 ? StatsColors.pending : StatsColors.neutral}
        >
          {pendingCount} pendentes
        </StatsSpan>
        <span>•</span>
        <StatsSpan
          $color={
            completedCount > 0 ? StatsColors.completed : StatsColors.neutral
          }
        >
          {completedCount} concluídas
        </StatsSpan>
      </Stats>

      {totalCount > 0 && (
        <ProgressBar>
          <ProgressFill $width={progressPercentage} />
        </ProgressBar>
      )}
    </FooterContainer>
  );
};

export default Footer;
