import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}) => {
  const baseClasses = 'btn-glow font-bold transition-all duration-300 rounded-lg flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/30',
    secondary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30',
    glass: 'glass hover:bg-white/10 text-white border-white/20',
    outlined: 'border border-white/20 hover:bg-white/10 text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <i className={`fas fa-${icon}`}></i>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <i className={`fas fa-${icon}`}></i>}
      {children}
    </button>
  );
};
