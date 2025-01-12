import { UIProvider } from "@yamada-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<UIProvider>
			<p>Test</p>
		</UIProvider>
	</StrictMode>,
);
