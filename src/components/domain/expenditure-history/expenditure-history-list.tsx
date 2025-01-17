import { Box } from "@yamada-ui/react";
import { ExpenditureBar } from "./expenditure-history-bar";
import { ExpenditureRepository } from "../../../infrastructure/expenditure/expenditure-repository";
import { memo, useEffect, useState } from "react";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";

const expenditureRepository = new ExpenditureRepository();

export const ExpenditureList = memo(() => {
	const [expenditureHistories, setExpenditureHistories] = useState<
		ExpenditureHistory[]
	>([]);

	useEffect(() => {
		const fetchHistories = async () => {
			const histories = await expenditureRepository.getHistories();
			setExpenditureHistories(histories);
		};

		fetchHistories();
	}, []);

	return (
		<>
			{expenditureHistories.map((expenditureHistory) => (
				<Box key={expenditureHistory.id} py={1}>
					<ExpenditureBar {...expenditureHistory} />
				</Box>
			))}
		</>
	);
});
