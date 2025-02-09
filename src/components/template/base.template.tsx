import { Box, Stack } from "@yamada-ui/react";
import { SideBar } from "../domain/sidebar";
import type { PropsWithChildren } from "react";

export const BaseTemplate: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Stack direction={{ lg: "row" }}>
				<SideBar />
				<Box p={8} height={"100%"} width={"100%"}>
					{children}
				</Box>
			</Stack>
		</>
	);
};
