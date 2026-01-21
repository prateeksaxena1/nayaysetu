import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center transform active:scale-[0.98] hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50';

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-hover text-text-inverted shadow-sm',
    secondary: 'bg-accent hover:bg-accent-hover text-primary shadow-sm',
    outlined: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5',
    text: 'bg-transparent text-primary hover:bg-primary/5 shadow-none',
  };

  const sizeStyles = {
    small: 'text-small py-1.5 px-3',
    medium: 'text-body py-2 px-4',
    large: 'text-lg py-2.5 px-6', // Keeping text-lg here as it might be larger than body, or could map to h3 size
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;