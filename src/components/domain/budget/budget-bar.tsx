import type { CellProps } from "@yamada-ui/charts";
import { DonutChart } from "@yamada-ui/charts";
import { Box, HStack, Spacer } from "@yamada-ui/react";
import { useMemo } from "react";
import type { Category } from "../../../infrastructure/category/category";

export const BudgetBar = (props: {
	category: Category;
	amountOfExpenditure: number;
}) => {
	const mewtwo: CellProps[] = useMemo(
		() => [
			{
				name: "残予算",
				value: props.category.budgetaryAmount - props.amountOfExpenditure,
				color: "gray.900",
			},
			{
				name: "支出金額",
				value: props.amountOfExpenditure,
				color: "white",
			},
		],
		[props.amountOfExpenditure, props.category.budgetaryAmount],
	);

	return (
		<>
			<Box
				flex={"row"}
				border={"1px solid"}
				borderRadius={10}
				borderColor={"gray.800"}
				px={2}
			>
				<HStack>
					<Box>{props.category.name}</Box>
					<Box>
						¥{props.amountOfExpenditure} / ¥
						{props.category.budgetaryAmount || 0}
					</Box>
					<Spacer />
					<Box>
						<DonutChart data={mewtwo} h={"2rem"} w={"2rem"} />
					</Box>
				</HStack>
			</Box>
		</>
	);
};
