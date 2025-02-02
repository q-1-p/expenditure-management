import { Box, Button, Heading } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";

export const CategoryManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Box p={12}>
					<Heading pb={4}>カテゴリ管理ページ</Heading>
					<Button>カテゴリ追加</Button>
				</Box>
			</BaseTemplate>
		</>
	);
};
