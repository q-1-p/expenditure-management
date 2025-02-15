import { supabase } from "../supabase";
import { Budget } from "./budget";

const tableName = "budgets";

export const getExpenditureHistories = async (): Promise<Budget[]> => {
	const { data } = await supabase.from(tableName).select("*");

	const budgets: Budget[] = data
		? data.map(
				(x) =>
					new Budget(
						x.id,
						x.name,
						x.is_variable_cost,
						x.is_fixed_cost,
						x.season,
					),
			)
		: [];

	return budgets;
};

export const addBudget = async (budget: Budget) => {
	const { error } = await supabase.from(tableName).insert({
		name: budget.name,
		is_periodic: budget.isPeriodic,
		is_fixed_cost: budget.isFixedCost,
		season: budget.season,
	});
	if (error) {
		alert(`エラーが発生しました\n${error.message}`);
	}
};

export const deleteBudget = async (id: string) => {
	await supabase.from(tableName).delete().eq("id", id);
};
