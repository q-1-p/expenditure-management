import { useMemo } from "react";
import { Box, Heading, Spacer, Stack } from "@yamada-ui/react";
import { DonutChart } from "@yamada-ui/charts";
import type { CellProps } from "@yamada-ui/charts";

export const BudgetCard = () => {
	const mewtwo: CellProps[] = useMemo(
		() => [
			{
				name: "HP",
				value: 106,
				color: "gray.900",
			},
			{
				name: "こうげき",
				value: 110,
				color: "white",
			},
		],
		[],
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
						<Box p={1}>￥100,000 / ¥10000000</Box>
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
