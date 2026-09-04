import clsx from "clsx";
import styles from './Navbar.module.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "shared/config/routes";
import { ThemeToggleButton } from "features/ThemeToggleButton";
import { Button } from "shared/ui";
import { useEffect, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { signOut } from "firebase/auth";
import { auth } from "shared/api/firebase";
interface NavbarProps {
  /*Доп классы*/
  className?: string;

}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { theme, toogleTheme } = useTheme()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const authData = useSelector(getUserAuthData);

  useEffect(() => {
    if (authData) {
      setIsOpenModal(false)
    }
  }, [authData])


  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const logoutUser = async () => {
    await signOut(auth);
  };

  if (authData) {
    return (
      <header className={clsx(className, styles.navbar, theme)}>
        <div className={styles.buttons}>
          <Link to={ROUTES.MAIN} className={clsx(styles.logo, theme)}>Куда<span className={styles.accent}>?</span></Link>
          <nav className={styles.nav}>
            <NavLink to={ROUTES.MAIN} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>Главная</NavLink>
            <NavLink to={ROUTES.ABOUT} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>О сайте</NavLink>
          </nav>
        </div>
        <div className={styles.rigthGroop}>
          <ThemeToggleButton onClick={toogleTheme} />
          <Button onClick={logoutUser} className={styles.authButton}>Выйти</Button>
        </div>
      </header>
    )
  }
  return (
    <header className={clsx(className, styles.navbar, theme)}>

      <div className={styles.buttons}>
        <Link to={ROUTES.MAIN} className={clsx(styles.logo, theme)}>Куда<span className={styles.accent}>?</span></Link>
        <nav className={styles.nav}>
          <NavLink to={ROUTES.MAIN} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>Главная</NavLink>
          <NavLink to={ROUTES.ABOUT} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>О сайте</NavLink>
        </nav>
      </div>
      <div className={styles.rigthGroop}>
        <ThemeToggleButton onClick={toogleTheme} />
        <Button onClick={handleOpenModal} className={styles.authButton}>Войти</Button>
      </div>
      <LoginModal isOpen={isOpenModal} onClose={handleCloseModal} />

    </header>
  );
};