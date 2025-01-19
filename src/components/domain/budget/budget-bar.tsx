import { useMemo } from "react";
import { Box, Spacer, HStack } from "@yamada-ui/react";
import { DonutChart } from "@yamada-ui/charts";
import type { CellProps } from "@yamada-ui/charts";

export const BudgetBar = () => {
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
				px={2}
			>
				<HStack>
					<Box>カテゴリ名</Box>
					<Box>￥100,000 / ¥10000000</Box>
					<Spacer />
					<Box>
						<DonutChart
							data={mewtwo}
							withTooltip={false}
							h={"2rem"}
							w={"2rem"}
						/>
					</Box>
				</HStack>
			</Box>
		</>
	);
};
