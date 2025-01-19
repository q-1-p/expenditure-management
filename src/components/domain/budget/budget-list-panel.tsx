import { Box, SimpleGrid, Spacer } from "@yamada-ui/react";
import { BudgetCard } from "./budget-card";
import { BudgetBar } from "./budget-bar";

export const BudgetListPanel = () => {
	const budgets = ["", ""];

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
					<BudgetCard />
				</Box>
				{budgets.map((budget) => (
					<Box key={budget}>
						<Spacer p={2} />
						<BudgetBar />
					</Box>
				))}
			</SimpleGrid>
		</>
	);
};
