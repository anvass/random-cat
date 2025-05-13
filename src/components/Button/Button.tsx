import { type JSX } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children: JSX.Element;
}

function Button({ disabled, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={styles.btn}
    >
      {children}
    </button>
  );
}

export default Button;
