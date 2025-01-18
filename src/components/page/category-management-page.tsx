import { Box, Heading } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";

export const CategoryManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Box p={12}>
					<Heading pb={4}>カテゴリ管理ページ</Heading>
				</Box>
			</BaseTemplate>
		</>
	);
};
