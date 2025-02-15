import type { CellProps } from "@yamada-ui/charts";
import { DonutChart } from "@yamada-ui/charts";
import { Box, Heading, Spacer, Stack } from "@yamada-ui/react";
import { useMemo } from "react";

export const BudgetCard = (props: {
	budget: number;
	amountOfExpenditure: number;
}) => {
	const mewtwo: CellProps[] = useMemo(
		() => [
			{
				name: "支出金額",
				value: props.budget - props.amountOfExpenditure,
				color: "gray.900",
			},
			{
				name: "残予算",
				value: props.amountOfExpenditure,
				color: "white",
			},
		],
		[props.budget, props.amountOfExpenditure],
	);

	return (
		<>
			<Box
				flex={"row"}
				border={"1px solid"}
				borderRadius={10}
				borderColor={"gray.800"}
				p={1}
			>
				<Stack direction={{ lg: "row" }}>
					<Box>
						<Heading as={"h2"} p={1} size={"md"}>
							定期/固定費
						</Heading>
						<Spacer />
						<Box p={1}>
							￥{props.amountOfExpenditure} / ￥{props.budget || 0}
						</Box>
					</Box>
					<Spacer />
					<Box>
						<DonutChart
							data={mewtwo}
							labelProps={{
								value: "100%",
								position: "center",
								fontSize: "sm",
							}}
							withTooltip={false}
							h={"4.5rem"}
							w={"4.5rem"}
						/>
					</Box>
				</Stack>
			</Box>
		</>
	);
};
