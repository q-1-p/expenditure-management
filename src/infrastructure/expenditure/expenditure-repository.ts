import { ExpenditureHistory } from "./expenditure-history";
import { supabase } from "../supabase";

export const getExpenditureHistories = async (): Promise<
	ExpenditureHistory[]
> => {
	const { data } = await supabase.from("expenditure_histories").select("*");

	const histories: ExpenditureHistory[] = data
		? data.map(
				(x) =>
					new ExpenditureHistory(
						x.id,
						x.name,
						x.amount,
						x.is_variable_cost,
						x.is_fixed_cost,
						x.expended_at,
					),
			)
		: [];

	return histories;
};

export const addExpenditureHistory = async (
	expenditure: ExpenditureHistory,
) => {
	const { error } = await supabase.from("expenditure_histories").insert({
		name: expenditure.name,
		amount: expenditure.amount,
		is_variable_cost: expenditure.isPeriodic,
		is_fixed_cost: expenditure.isFixedCost,
		expended_at: expenditure.expendedAt,
	});
	if (error) {
		alert(`エラーが発生しました\n${error.message}`);
	}
};

export const removeExpenditureHistory = async (expenditureId: string) => {
	await supabase.from("expenditure_histories").delete().eq("id", expenditureId);
};
