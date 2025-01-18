import { BudgetManagementPage } from "../components/page/budget-management-page";
import { CategoryManagementPage } from "../components/page/category-management-page";
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";

export const Routes = [
	{
		path: "/",
		children: <ExpenditureListPage />,
	},
	{
		path: "/budget",
		children: <BudgetManagementPage />,
	},
	{
		path: "/category",
		children: <CategoryManagementPage />,
	},
];
