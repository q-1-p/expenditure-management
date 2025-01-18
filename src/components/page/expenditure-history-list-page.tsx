import { Box, Heading, IconButton, useColorMode } from "@yamada-ui/react";
import { ExpenditureList } from "../domain/expenditure-history/expenditure-history-list";
import { BaseTemplate } from "../template/base.template";
import { PlusIcon } from "@yamada-ui/lucide";

export const ExpenditureListPage = () => {
	const { changeColorMode } = useColorMode();
	changeColorMode("system");

	return (
		<>
			<BaseTemplate>
				<Box p={8} height={"100%"} width={"100%"}>
					<Heading pb={4}>支出一覧ページ</Heading>
					<ExpenditureList />
					<IconButton
						as="button"
						colorScheme={"primary"}
						variant={"outline"}
						size={"lg"}
						icon={<PlusIcon />}
						position={"absolute"}
						bottom={"4vh"}
						right={"4vw"}
					/>
				</Box>
			</BaseTemplate>
		</>
	);
};
