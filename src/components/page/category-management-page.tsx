import { Button, Heading, HStack, Input } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";
import { CategoryTable } from "../domain/category/category-table";

export const CategoryManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Heading pb={4}>カテゴリ管理ページ</Heading>
				<HStack w={"100%"}>
					<Input placeholder="カテゴリ名" />
					<Button bg={"primary"} w={150}>
						カテゴリ追加
					</Button>
					<Button bg={"danger"} w={150}>
						カテゴリ削除
					</Button>
				</HStack>
				<br />
				<CategoryTable />
			</BaseTemplate>
		</>
	);
};
