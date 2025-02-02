import { Box } from "@yamada-ui/react";
import { ExpenditureBar } from "./expenditure-history-bar";
import { getExpenditureHistories } from "../../../infrastructure/expenditure/expenditure-repository";
import { memo, useEffect } from "react";
import { useAtom } from "jotai";
import { expenditureHistoriesAtom } from "../../atom";

export const ExpenditureList = memo(() => {
	const [expenditureHistories, setExpenditureHistories] = useAtom(
		expenditureHistoriesAtom,
	);

	useEffect(() => {
		const fetchHistories = async () => {
			const histories = await getExpenditureHistories();
			setExpenditureHistories(histories);
		};

		fetchHistories();
	}, [setExpenditureHistories]);

	return (
		<>
			{expenditureHistories?.map((expenditureHistory) => (
				<Box key={expenditureHistory.id} py={1}>
					<ExpenditureBar {...expenditureHistory} />
				</Box>
			))}
		</>
	);
});
