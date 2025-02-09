import { Heading, HStack, IconButton, useDisclosure } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";
import { CategoryTable } from "../domain/category/category-table";
import { PlusIcon, Trash2Icon } from "@yamada-ui/lucide";

export const CategoryManagementPage = () => {
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<>
			<BaseTemplate>
				<Heading pb={4}>カテゴリ管理ページ</Heading>
				<CategoryTable />
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
					<IconButton
						as="button"
						colorScheme={"danger"}
						variant={"outline"}
						size={"lg"}
						icon={<Trash2Icon />}
						onClick={onOpen}
						aria-label="カテゴリ削除"
					/>
				</HStack>
			</BaseTemplate>
		</>
	);
};
