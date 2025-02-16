import { Box } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { memo, useEffect } from "react";
import { fetchExpenditureHistories } from "../../../infrastructure/expenditure/expenditure-repository";
import { expenditureHistoriesAtom } from "../../atom";
import { ExpenditureBar } from "./expenditure-history-bar";

export const ExpenditureList = memo(() => {
	const [expenditureHistories, setExpenditureHistories] = useAtom(
		expenditureHistoriesAtom,
	);

	useEffect(() => {
		const fetchHistories = async () => {
			const histories = await fetchExpenditureHistories();
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
