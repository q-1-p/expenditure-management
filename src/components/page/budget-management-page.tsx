import { Box, Heading } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";
import { BudgetBoard } from "../domain/budget/budget-board";

export const BudgetManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Box p={12} w={"100%"}>
					<Heading pb={4}>予算管理ページ</Heading>
					<BudgetBoard />
				</Box>
			</BaseTemplate>
		</>
	);
};
