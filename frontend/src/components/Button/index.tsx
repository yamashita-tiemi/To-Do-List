import React from "react";
import { ButtonContainer, Checkbox } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | "text";
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string;
  children?: React.ReactNode;
  $color?: string;
  $backgroundColor?: string;
  $hoverColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  value,
  onClick,
  disabled = false,
  title,
  children,
  $color,
  $backgroundColor,
  $hoverColor,
}) => {
  return (
    <ButtonContainer
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      title={title}
      $color={$color}
      $backgroundColor={$backgroundColor}
      $hoverColor={$hoverColor}
    >
      {children}
    </ButtonContainer>
  );
};

interface CheckBoxButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  $completed?: boolean;
}

export const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({
  onClick,
  disabled = false,
  children,
  $completed = false,
}) => {
  return (
    <Checkbox onClick={onClick} disabled={disabled} $completed={$completed}>
      {children}
    </Checkbox>
  );
};

export default Button;
