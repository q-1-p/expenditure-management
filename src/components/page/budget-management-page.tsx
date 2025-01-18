import { Box, Heading } from "@yamada-ui/react";
import { BaseTemplate } from "../template/base.template";

export const BudgetManagementPage = () => {
	return (
		<>
			<BaseTemplate>
				<Box p={12}>
					<Heading pb={4}>予算管理ページ</Heading>
				</Box>
			</BaseTemplate>
		</>
	);
};
