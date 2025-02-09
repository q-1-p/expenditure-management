import { useEffect, useMemo, useState } from "react";
import { fetchCategories } from "../../../infrastructure/category/category-repository";
import { Table } from "@yamada-ui/table";
import type { Column } from "@yamada-ui/table";
import type { Category } from "../../../infrastructure/category/category";

export const CategoryTable = () => {
	const columns = useMemo<Column<Category>[]>(
		() => [
			{
				header: "カテゴリ名",
				accessorKey: "name",
			},
			{
				header: "定期/不定期",
				accessorFn: (row) => (row.isPeriodic ? "定期" : "不定期"),
				cellProps: { style: { width: "120px" } },
			},
			{
				header: "固定費/変動費",
				accessorFn: (row) => (row.isFixedCost ? "固定費" : "変動費"),
				cellProps: { style: { width: "120px" } },
			},
		],
		[],
	);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const loadCategories = async () => {
			const data = await fetchCategories();
			setCategories(data);
		};
		loadCategories();
	}, []);

	return <Table size={"sm"} columns={columns} data={categories} />;
};
