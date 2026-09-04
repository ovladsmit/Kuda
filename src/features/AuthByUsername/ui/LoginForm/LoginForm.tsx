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
import { ThemeButton } from 'shared/ui/Button/Button';
import { registerByEmail } from 'features/AuthByUsername/model/services/registredByEmail';
interface LoginFormProps {
  /*Доп классы*/
  className?: string;

}

export const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const loginForm = useSelector(getLoginState)
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginForm.mode === 'login') {
      dispatch(loginByEmail({ username: loginForm.username, password: loginForm.password }))
    } else {
      dispatch(registerByEmail({ username: loginForm.username, password: loginForm.password }))
    }

  }

  const handleRegistration = () => {
    dispatch(loginActions.setMode('register'))
  }

  const handleLogin = () => {
    dispatch(loginActions.setMode('login'))
  }

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value))
  }

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value))
  }

  return (
    <form onSubmit={handleSubmit} className={clsx(className, styles.loginForm)}>
      <span className={styles.title}>{loginForm.mode === 'login' ? "Вход" : "Регистрация"}</span>
      <div className={styles.form}>
        <label>
          Email
          <Input value={loginForm.username} placeholder='Ваша почта' onChange={onChangeUsername} />
        </label>
        <label>
          Пароль
          <Input value={loginForm.password} placeholder='Введите пароль' onChange={onChangePassword} />
        </label>
        <div className={styles.formBtn}>
          {loginForm.mode === "login" ? (
            <div className={styles.formBtn}>
              <Button onClick={handleRegistration} theme={ThemeButton.SECONDARY} type='button'>
                Зарегестрироваться
              </Button>
              <Button disabled={loginForm.isLoading} type='submit' >
                Войти
              </Button>
            </div>
          ) : (
            <div className={styles.formBtn}>
              <Button theme={ThemeButton.SECONDARY} onClick={handleLogin}>Уже есть аккуунт?</Button>
              <Button disabled={loginForm.isLoading} onClick={handleRegistration} theme={ThemeButton.PRIMARY} type='submit'>
                Зарегестрироваться
              </Button>
            </div>
          )}

        </div>
      </div >
    </form>
  );
};