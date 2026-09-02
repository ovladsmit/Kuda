import clsx from 'clsx';
import styles from './Input.module.scss';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  /*Доп классы*/
  className?: string;
  /*Значение инпута*/
  value?: string;
  /*Функция изменения*/
  onChange?: (value: string) => void
  /*Автофокус*/
  autoFocus?: boolean
}

export const Input = ({
  className,
  value,
  onChange,
  autoFocus,
  placeholder,
  type = 'text',
  ...otherProps }: InputProps) => {
  
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if(autoFocus){
      ref.current?.focus()
    }
  }, [autoFocus])
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
      {...otherProps}
      className={clsx(className, styles.input)}
    />
  );
};