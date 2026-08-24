import clsx from "clsx";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { BugButton } from "./providers/ErrorBoundary";
import {ErrorBoundary} from "./providers/ErrorBoundary";
export const App = () => {
  const { theme, toogleTheme } = useTheme()
  return (
    <div className={clsx('app', theme)}>
      <ErrorBoundary>
        <BugButton />
        <Navbar />
        <AppRouter />
        <div id="modal-root" />
      </ErrorBoundary>

    </div>
  );
};