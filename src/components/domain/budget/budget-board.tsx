import { Wrap } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import type { Category } from "../../../infrastructure/category/category";
import { fetchCategories } from "../../../infrastructure/category/category-repository";
import type { ExpenditureHistory } from "../../../infrastructure/expenditure/expenditure-history";
import { fetchExpenditureHistories } from "../../../infrastructure/expenditure/expenditure-repository";
import { BudgetListPanel } from "./budget-list-panel";

export const BudgetBoard = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [expenditureHistories, setExpenditureHistories] = useState<
		ExpenditureHistory[]
	>([]);

	useEffect(() => {
		const fetchData = async () => {
			const categoriesData = await fetchCategories();
			const expenditureHistoriesData = await fetchExpenditureHistories();
			setCategories(categoriesData);
			setExpenditureHistories(expenditureHistoriesData);
		};

		fetchData();
	}, []);

	return (
		<>
			<Wrap gap={"sm"}>
				<BudgetListPanel
					title="定期/固定費"
					categories={categories.filter((x) => x.isPeriodic && x.isFixedCost)}
					expenditureHistories={expenditureHistories.filter(
						(x) => x.isPeriodic && x.isFixedCost,
					)}
				/>
				<BudgetListPanel
					title="定期/変動費"
					categories={categories.filter((x) => x.isPeriodic && !x.isFixedCost)}
					expenditureHistories={expenditureHistories.filter(
						(x) => x.isPeriodic && !x.isFixedCost,
					)}
				/>
				<BudgetListPanel
					title="不定期/固定費"
					categories={categories.filter((x) => !x.isPeriodic && !x.isFixedCost)}
					expenditureHistories={expenditureHistories.filter(
						(x) => !x.isPeriodic && !x.isFixedCost,
					)}
				/>
				<BudgetListPanel
					title="不定期/変動費"
					categories={categories.filter((x) => !x.isPeriodic && x.isFixedCost)}
					expenditureHistories={expenditureHistories.filter(
						(x) => !x.isPeriodic && x.isFixedCost,
					)}
				/>
			</Wrap>
		</>
	);
};
