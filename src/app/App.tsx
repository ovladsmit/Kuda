import "./styles/index.scss"
import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import { MainPageAsync } from "pages/MainPage";
import { AboutPageAsync } from "pages/AboutPage";
import clsx from "clsx";
import { useTheme } from "app/providers/ThemeProvider";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export const App = () => {
  const { theme, toogleTheme } = useTheme()
  return (
    <div className={clsx('app', theme)}>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};