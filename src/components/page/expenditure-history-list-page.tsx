import { Box, Heading, useColorMode } from "@yamada-ui/react";
import { ExpenditureList } from "../domain/expenditure-history/expenditure-history-list";
import { BaseTemplate } from "../template/base.template";

export const ExpenditureListPage = () => {
	const { changeColorMode } = useColorMode();
	changeColorMode("system");

	return (
		<>
			<BaseTemplate>
				<Box p={8} height={"100%"} width={"100%"}>
					<Heading pb={4}>支出一覧ページ</Heading>
					<ExpenditureList />
				</Box>
			</BaseTemplate>
		</>
	);
};
