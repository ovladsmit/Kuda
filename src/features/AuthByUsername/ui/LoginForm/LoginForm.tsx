import clsx from 'clsx';
import styles from './LoginForm.module.scss';
import { Input } from 'shared/ui';
import { Button } from 'shared/ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByEmail } from 'features/AuthByUsername/model/services/loginByEmail';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
interface LoginFormProps {
  /*Доп классы*/
  className?: string;

}

export const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const loginForm = useSelector(getLoginState)
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginByEmail({ username: loginForm.username, password: loginForm.password }))
  }

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value))
  }

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value))
  }

  return (
    <form onSubmit={handleSubmit} className={clsx(className, styles.loginForm)}>
      <span className={styles.title}>Форма авторизации</span>
      <div className={styles.form}>
        <label>
          Логин
          <Input value={loginForm.username} placeholder='Введите логин' onChange={onChangeUsername} />
        </label>
        <label>
          Пароль
          <Input value={loginForm.password} placeholder='Введите пароль' onChange={onChangePassword} />
        </label>
        <Button disabled={loginForm.isLoading}type='submit' className={styles.submitBtn}>
          Войти
        </Button>
      </div>

    </form>
  );
};