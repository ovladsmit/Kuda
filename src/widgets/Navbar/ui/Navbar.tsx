import clsx from "clsx";
import styles from './Navbar.module.scss'
import { useTheme } from "app/providers/ThemeProvider";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "shared/config/routes";
import { ThemeToggleButton } from "features/ThemeToggleButton";
interface NavbarProps {
  /*Доп классы*/
  className?: string;

}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { theme, toogleTheme } = useTheme()
  return (
    <header className={clsx(className, styles.navbar, theme)}>
      <Link to={ROUTES.MAIN} className={clsx(styles.logo, theme)}>Куда<span className={styles.accent}>?</span></Link>
      <div className={styles.buttons}>
        <nav className={styles.nav}>
          <NavLink to={ROUTES.MAIN} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>Главная</NavLink>
          <NavLink to={ROUTES.ABOUT} className={({ isActive }) => clsx(styles.navLink, isActive && styles.active)}>О сайте</NavLink>
        </nav>
        <ThemeToggleButton onClick={toogleTheme} />
      </div>

    </header>
  );
};