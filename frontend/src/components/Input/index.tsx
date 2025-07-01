import React from "react";
import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled,
...props
}) => {
  return (
    <InputContainer
        placeholder={placeholder}
        disabled={disabled}
        {...props}
    ></InputContainer>
  );
};

export default Input;