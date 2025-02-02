import { Box, IconButton } from "@yamada-ui/react";
import { Trash2Icon } from "@yamada-ui/lucide";
import { memo } from "react";
import {
	getExpenditureHistories,
	removeExpenditureHistory,
} from "../../../infrastructure/expenditure/expenditure-repository";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";
import { useSetAtom } from "jotai";
import { expenditureHistoriesAtom } from "../../atom";

export const ExpenditureBar = memo((expenditureHistory: ExpenditureHistory) => {
	const setExpenditureHistories = useSetAtom(expenditureHistoriesAtom);
	const remove = async () => {
		await removeExpenditureHistory(expenditureHistory.id);
		const histories = await getExpenditureHistories();
		setExpenditureHistories(histories);
	};

	return (
		<>
			<Box
				border={1}
				bg={"whiteAlpha.100"}
				p={3}
				borderRadius={8}
				display="flex"
				alignItems="center"
			>
				<Box flex={7} pr={1}>
					{expenditureHistory.name}
				</Box>
				<Box pr={5}>¥{expenditureHistory.amount}</Box>
				<Box width={"4rem"}>
					{expenditureHistory.isPeriodic ? "定期" : "不定期"}
				</Box>
				<Box width={"4rem"}>
					{expenditureHistory.isFixedCost ? "固定費" : "変動費"}
				</Box>
				<Box width={"6.5rem"}>{expenditureHistory.expendedAt.toString()}</Box>
				<IconButton as="button" icon={<Trash2Icon />} onClick={remove} />
			</Box>
		</>
	);
});
