import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as: Tag = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center gap-2 font-medium text-sm tracking-wide
    transition-all duration-250 cursor-pointer no-underline
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
  `;

  const variants = {
    primary: `
      px-5 py-2.5
      bg-[#C8FF3D] text-[#08090A]
      hover:bg-[#d4ff5a]
      border border-[#C8FF3D]
    `,
    ghost: `
      px-5 py-2.5
      bg-transparent text-[#F3F1EA]
      border border-[#272A2C]
      hover:border-[#9A9A94]
    `,
    outline: `
      px-5 py-2.5
      bg-transparent text-[#F3F1EA]
      border border-[#272A2C]
      hover:border-[#C8FF3D]/40 hover:text-[#F3F1EA]
    `,
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`.replace(/\s+/g, ' ').trim();

  if (Tag === 'a') {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
