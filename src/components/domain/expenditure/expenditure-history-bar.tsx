import { Trash2Icon } from "@yamada-ui/lucide";
import { Box, IconButton } from "@yamada-ui/react";
import { useSetAtom } from "jotai";
import { memo } from "react";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";
import {
	fetchExpenditureHistories,
	removeExpenditureHistory,
} from "../../../infrastructure/expenditure/expenditure-repository";
import { expenditureHistoriesAtom } from "../../atom";

export const ExpenditureBar = memo((expenditureHistory: ExpenditureHistory) => {
	const setExpenditureHistories = useSetAtom(expenditureHistoriesAtom);
	const remove = async () => {
		await removeExpenditureHistory(expenditureHistory.id);
		const histories = await fetchExpenditureHistories();
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
				<Box width={"6rem"}>{expenditureHistory.categoryName}</Box>
				<Box width={"6.5rem"}>
					{`${expenditureHistory.expendedAt.getFullYear()}-${String(expenditureHistory.expendedAt.getMonth() + 1).padStart(2, "0")}-${String(expenditureHistory.expendedAt.getDate()).padStart(2, "0")}`}
				</Box>
				<IconButton
					as="button"
					icon={<Trash2Icon />}
					data-testid="expenditureDeleteButton"
					onClick={remove}
				/>
			</Box>
		</>
	);
});
