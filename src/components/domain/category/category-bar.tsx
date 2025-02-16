import { Trash2Icon } from "@yamada-ui/lucide";
import { Box, IconButton } from "@yamada-ui/react";
import { useSetAtom } from "jotai";
import { memo } from "react";
import type { Category } from "../../../infrastructure/category/category";
import {
	deleteCategory,
	fetchCategories,
} from "../../../infrastructure/category/category-repository";
import { categoriesAtom } from "../../atom";

export const CategoryBar = memo((category: Category) => {
	const setCategories = useSetAtom(categoriesAtom);
	const remove = async () => {
		await deleteCategory(category.id);
		const histories = await fetchCategories();
		setCategories(histories);
	};

	return (
		<>
			<Box
				border={1}
				bg={"whiteAlpha.100"}
				p={3}
				borderRadius={8}
				display="flex"
				alignItems="center"
			>
				<Box flex={7} pr={1}>
					{category.name}
				</Box>
				<Box width={"10rem"}>予算：¥{category.budgetaryAmount}</Box>
				<Box width={"4rem"}>{category.isPeriodic ? "定期" : "不定期"}</Box>
				<Box width={"4rem"}>{category.isFixedCost ? "固定費" : "変動費"}</Box>
				<IconButton
					as="button"
					icon={<Trash2Icon />}
					data-testid="deleteCategoryButton"
					onClick={remove}
				/>
			</Box>
		</>
	);
});
