import { supabase } from "../supabase";
import { Category } from "./category";

export const fetchCategories = async (): Promise<Category[]> => {
	const { data, error } = await supabase
		.from("expenditure_categories")
		.select("*");

	if (error) {
		alert(`エラーが発生しました。\n${error}`);
	}

	const categories: Category[] = data
		? data.map(
				(x) => new Category(x.id, x.name, x.is_variable_cost, x.is_fixed_cost),
			)
		: [];

	return categories;
};

export const addExpenditureHistory = async (expenditure: Category) => {
	const { error } = await supabase.from("expenditure_categories").insert({
		name: expenditure.name,
		is_variable_cost: expenditure.isPeriodic,
		is_fixed_cost: expenditure.isFixedCost,
	});

	if (error) {
		alert(`エラーが発生しました。\n${error.message}`);
	}
};

export const removeExpenditureHistory = async (expenditureIds: string[]) => {
	const { error } = await supabase
		.from("expenditure_categories")
		.delete()
		.eq("id", expenditureIds);

	if (error) {
		alert(`エラーが発生しました。\n${error.message}`);
	}
};
