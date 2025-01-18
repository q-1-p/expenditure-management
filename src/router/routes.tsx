import { BudgetManagementPage } from "../components/page/budget-management-page";
import { CategoryManagementPage } from "../components/page/category-management-page";
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";

export const routes = [
	{
		name: "支出一覧",
		path: "/",
		exact: true,
		element: <ExpenditureListPage />,
	},
	{
		name: "予算管理",
		path: "/budget",
		exact: false,
		element: <BudgetManagementPage />,
	},
	{
		name: "カテゴリ管理",
		path: "/category",
		exact: false,
		element: <CategoryManagementPage />,
	},
];
