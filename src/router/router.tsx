import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { useColorMode } from "@yamada-ui/react";

export const Router = () => {
  const { changeColorMode } = useColorMode();
  changeColorMode("system");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <>
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            </>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};
