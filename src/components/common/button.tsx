import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-medium transition-all duration-200";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-white text-p-17 text-black-main hover:bg-black-2 hover:text-white border-2 border-transparent hover:border-white-10",
    secondary:
      "bg-white-5 text-white text-p-17 border border-white-10 hover:bg-neutral-700",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
