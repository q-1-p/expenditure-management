import { supabase } from "../supabase";
import { Category } from "./category";

export const fetchCategories = async (): Promise<Category[]> => {
	const { data, error } = await supabase
		.from("expenditure_categories")
		.select("*");

	if (error) {
		alert(`カテゴリ取得中にエラーが発生しました。\n${error}`);
	}

	const categories: Category[] = data
		? data.map(
				(x) =>
					new Category(
						x.id,
						x.name,
						x.is_periodic,
						x.is_fixed_cost,
						x.budgetary_amount,
					),
			)
		: [];

	return categories;
};

export const addCategory = async (category: Category) => {
	const { error } = await supabase.from("expenditure_categories").insert({
		name: category.name,
		is_periodic: category.isPeriodic,
		is_fixed_cost: category.isFixedCost,
		budgetary_amount: category.budgetaryAmount,
	});

	if (error) {
		alert(`カテゴリ追加中にエラーが発生しました。\n${error.message}`);
	}
};

export const deleteCategory = async (categoryId: string) => {
	const { error } = await supabase
		.from("expenditure_categories")
		.delete()
		.eq("id", categoryId);

	if (error) {
		alert(`カテゴリ削除中にエラーが発生しました。\n${error.message}`);
	}
};
