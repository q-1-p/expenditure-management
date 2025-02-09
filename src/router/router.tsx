import { useColorMode } from "@yamada-ui/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
	const { changeColorMode } = useColorMode();

	useEffect(() => changeColorMode("system"), [changeColorMode]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route) => (
						<Route key={route.name} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</>
	);
};
