import { Box } from "@yamada-ui/react";
import { memo } from "react";

export const SideBar = memo(() => {
	return (
		<>
			<Box bg={"gray.900"} p={4} pt={16} height={"100vh"} width={"12rem"}>
				<Box p={1}>支出一覧</Box>
				<Box p={1}>予算管理</Box>
				<Box p={1}>カテゴリ管理</Box>
			</Box>
		</>
	);
});
