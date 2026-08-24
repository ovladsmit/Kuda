import clsx from 'clsx';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  /*Доп классы*/
  className?: string;
  
}
const handleRestartPage = () => {
  location.reload()
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
  return (
    <div className={clsx(className, styles.errorPage)}>
      <span className={styles.emoji}>💔</span>
      <h1 className={styles.title}>Что-то пошло не так</h1>
      <p className={styles.text}>
        Приложение столкнулось с ошибкой. Попробуйте перезагрузить страницу — обычно это помогает.
      </p>
      <button onClick={handleRestartPage} className={styles.button}>
        Перезагрузить страницу
      </button>
    </div>
  );
};