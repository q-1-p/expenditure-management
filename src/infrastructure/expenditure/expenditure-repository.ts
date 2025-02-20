import { supabase } from "../supabase";
import { ExpenditureHistory } from "./expenditure-history";

export const fetchExpenditureHistories = async (): Promise<
	ExpenditureHistory[]
> => {
	const { data } = await supabase.from("expenditure_histories").select("*");

	const histories: ExpenditureHistory[] = data
		? data.map(
				(x) =>
					new ExpenditureHistory(
						x.id,
						x.name,
						x.category_id,
						x.amount,
						new Date(x.expended_at),
					),
			)
		: [];

	return histories;
};

export const addExpenditureHistory = async (
	expenditureHistory: ExpenditureHistory,
) => {
	const { error } = await supabase.from("expenditure_histories").insert({
		name: expenditureHistory.name,
		category_id: expenditureHistory.categoryId,
		amount: expenditureHistory.amount,
		expended_at: expenditureHistory.expendedAt,
	});
	if (error) {
		//alert(`エラーが発生しました\n${error.message}`);
		console.error(expenditureHistory);
		console.error(`エラーが発生しました\n${error.message}`);
	}
};

export const removeExpenditureHistory = async (expenditureId: string) => {
	await supabase.from("expenditure_histories").delete().eq("id", expenditureId);
};
