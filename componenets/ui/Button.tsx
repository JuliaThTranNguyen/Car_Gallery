import React from "react";

interface ButtonProps {
  text: string;
  variant?: "basic" | "outline" | "cancel";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "basic",
  onClick,
  className = "",
}) => {
  const baseStyle = "button-base";

  const variantStyles = {
    basic: "basic-button",
    outline: "outline-button",
    cancel: "cancel-button",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
