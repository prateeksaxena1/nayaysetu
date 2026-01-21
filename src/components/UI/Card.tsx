import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
}) => {
  const baseStyles = 'bg-bg-default dark:bg-bg-dark rounded-lg overflow-hidden transition-colors duration-300';

  const variantStyles = {
    default: 'shadow-sm', // Updated to token
    elevated: 'shadow-md', // Updated to token
    bordered: 'border border-gray-200 dark:border-gray-700', // Kept gray scale for borders as it wasnt strictly tokenized yet but could be border-primary/10
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:shadow-lg md:hover:-translate-y-1'
    : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;