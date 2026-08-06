import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "pages/MainPage";
import { AboutPageAsync } from "pages/AboutPage";
import {ROUTES} from "shared/config/routes"

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPageAsync />} />
          <Route path={ROUTES.ABOUT} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
  );
};