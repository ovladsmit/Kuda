import clsx from "clsx";
import styles from "./ThemeToggleButton.module.scss"
import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider";
import SunIcon from "shared/assets/icons/sun.svg"
import MoonIcon from "shared/assets/icons/moon.svg"
interface ThemeToggleButtonProps {
  /*Доп классы*/
  className?: string;
  /**Обработчик клика*/
  onClick: () => void
}

export const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const {className, onClick} = props
  const {theme} = useTheme()
  return (
    <button onClick={onClick} className={clsx(className, styles.themeButton)}>
      {theme === Theme.DARK? <SunIcon/>: <MoonIcon/>}
    </button>
  );
};