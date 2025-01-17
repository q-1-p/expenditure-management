import { Box, Stack } from "@yamada-ui/react";
import type { PropsWithChildren } from "react";
import { SideBar } from "../domain/sidebar";

export const BaseTemplate: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Stack direction={{ lg: "row" }}>
				<SideBar />
				{children}
			</Stack>
		</>
	);
};
