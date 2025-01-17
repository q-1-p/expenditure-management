import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExpenditureListPage } from "./components/page/expenditure-history-list-page";
import { ColorModeScript, defaultConfig, UIProvider } from "@yamada-ui/react";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
		<UIProvider>
			<ExpenditureListPage />
		</UIProvider>
	</StrictMode>,
);
