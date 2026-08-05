import "./styles/index.scss"
import { Routes, Route, Link } from "react-router-dom";
import { Suspense, useContext, useMemo, useState } from "react";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import clsx from "clsx";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export const App = () => {
  const {theme, toogleTheme} = useTheme()
  return (
    <div className={clsx('app', theme )}>
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