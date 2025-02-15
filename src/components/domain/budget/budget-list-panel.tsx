import { Box, SimpleGrid, Spacer } from "@yamada-ui/react";
import type { Category } from "../../../infrastructure/category/category";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";
import { BudgetBar } from "./budget-bar";
import { BudgetCard } from "./budget-card";

export const BudgetListPanel = (props: {
	categories: Category[];
	expenditureHistories: ExpenditureHistory[];
}) => {
	return (
		<>
			<SimpleGrid
				p={4}
				border={"1px solid"}
				borderColor={"gray.800"}
				w={"49%"}
				h={"100%"}
				columns={1}
			>
				<Box>
					<BudgetCard
						budget={props.categories.reduce(
							(sum, x) => sum + x.budgetaryAmount,
							0,
						)}
						amountOfExpenditure={props.expenditureHistories.reduce(
							(sum, x) => sum + x.amount,
							0,
						)}
					/>
				</Box>
				{props.categories.map((category) => (
					<Box key={category.id}>
						<Spacer p={2} />
						<BudgetBar
							category={category}
							amountOfExpenditure={props.expenditureHistories
								.filter((x) => x.categoryId === category.id)
								.reduce((sum, x) => sum + x.amount, 0)}
						/>
					</Box>
				))}
			</SimpleGrid>
		</>
	);
};
