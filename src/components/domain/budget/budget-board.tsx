import { Wrap } from "@yamada-ui/react";
import { BudgetListPanel } from "./budget-list-panel";

export const BudgetBoard = () => {
	return (
		<>
			<Wrap gap={"sm"}>
				<BudgetListPanel />
				<BudgetListPanel />
				<BudgetListPanel />
				<BudgetListPanel />
			</Wrap>
		</>
	);
};
