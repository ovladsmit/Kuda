import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import { Input } from 'shared/ui';
import { Button } from 'shared/ui';
import React from 'react';
interface LoginFormProps {
  /*Доп классы*/
  className?: string;

}

export const LoginForm = ({ className }: LoginFormProps) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className={clsx(className, styles.loginForm)}>
      <span className={styles.title}>Форма авторизации</span>
      <div className={styles.form}>
        <label>
          Логин
          <Input placeholder='Введите логин' />
        </label>
        <label>
          Пароль
          <Input placeholder='Введите пароль' />
        </label>
        <Button type='submit' className={styles.submitBtn}>
          Войти
        </Button>
      </div>

    </form>
  );
};