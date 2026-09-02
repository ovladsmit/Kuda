import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /*Доп классы*/
  className?: string;
  /*Тема кнопки*/
  theme?: ThemeButton
  /*Кнопка не активна*/
  disabled?: boolean

}

export const Button = ({ className, children, theme = ThemeButton.PRIMARY, disabled, ...otherProps }: ButtonProps) => {
  return (
    <button disabled={disabled} className={clsx
      (className,
        styles.button,
        styles[theme],
        { [styles.disabled]: disabled }
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};