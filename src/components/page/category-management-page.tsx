import { PlusIcon } from "@yamada-ui/lucide";
import { HStack, Heading, IconButton, useDisclosure } from "@yamada-ui/react";
import { CategoryAddDialog } from "../domain/category/category-add-dialog";
import { CategoryList } from "../domain/category/category-list";
import { BaseTemplate } from "../template/base.template";

export const CategoryManagementPage = () => {
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<>
			<BaseTemplate>
				<Heading pb={4}>カテゴリ管理ページ</Heading>
				<CategoryList />
				<HStack position={"absolute"} bottom={"4vh"} right={"4vw"}>
					<IconButton
						as="button"
						colorScheme={"primary"}
						variant={"outline"}
						size={"lg"}
						icon={<PlusIcon />}
						onClick={onOpen}
						aria-label="カテゴリ追加"
					/>
				</HStack>
				<CategoryAddDialog open={open} onClose={onClose} />
			</BaseTemplate>
		</>
	);
};
