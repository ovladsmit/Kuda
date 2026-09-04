import clsx from "clsx";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { BugButton } from "./providers/ErrorBoundary";
import { useEffect } from "react";
import { subscribeToAuthChanges } from "entities/User/api/UserApi";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  useEffect(() => {
    subscribeToAuthChanges((user) => {
      if (user) dispatch(userActions.setAuthData(user));
      else dispatch(userActions.logout());
    });
  }, []);
  return (
    <div className={clsx('app', theme)}>

      <BugButton />
      <Navbar />
      <AppRouter />
      <div id="modal-root" />


    </div>
  );
};