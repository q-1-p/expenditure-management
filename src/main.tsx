import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorModeScript, defaultConfig, UIProvider } from "@yamada-ui/react";
import { Router } from "./router/router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
		<UIProvider>
			<Router />
		</UIProvider>
	</StrictMode>,
);
