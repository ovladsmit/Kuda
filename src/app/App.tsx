import clsx from "clsx";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toogleTheme } = useTheme()
  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <AppRouter />
      <div id="modal-root" />
    </div>
  );
};