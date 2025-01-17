import { ExpenditureHistory } from "./expenditure-history";
import { supabase } from "../supabase";

export class ExpenditureRepository {
	getHistories = async (): Promise<ExpenditureHistory[]> => {
		const { data, error } = await supabase
			.from("expenditure_histories")
			.select("*");

		const histories: ExpenditureHistory[] = data
			? data.map(
					(x) =>
						new ExpenditureHistory(
							x.id,
							x.name,
							x.is_periodic,
							x.is_fixed_cost,
							x.expended_at,
						),
				)
			: [];

		return histories;
	};

	add = async (expenditure: ExpenditureHistory) => {
		await supabase.from("expenditure_histories").insert(expenditure);
	};

	remove = async (expenditureId: string) => {
		await supabase
			.from("expenditure_histories")
			.delete()
			.eq("id", expenditureId);
	};
}
