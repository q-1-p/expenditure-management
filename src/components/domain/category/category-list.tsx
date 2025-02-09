import { Box } from "@yamada-ui/react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { fetchCategories } from "../../../infrastructure/category/category-repository";
import { categoriesAtom } from "../../atom";
import { CategoryBar } from "./category-bar";

export const CategoryList = () => {
	const [categories, setCategories] = useAtom(categoriesAtom);

	useEffect(() => {
		const loadCategories = async () => {
			const data = await fetchCategories();
			setCategories(data);
		};
		loadCategories();
	}, [setCategories]);

	return (
		<ul>
			{categories?.map((category) => (
				<Box key={category.id} py={1}>
					<CategoryBar {...category} />
				</Box>
			))}
		</ul>
	);
};
