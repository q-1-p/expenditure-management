import { Heading } from "@yamada-ui/react";
import { BudgetBoard } from "../domain/budget/budget-board";
import { BaseTemplate } from "../template/base.template";

export const BudgetManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Heading pb={4}>支出状況確認ページ</Heading>
				<BudgetBoard />
			</BaseTemplate>
		</>
	);
};
