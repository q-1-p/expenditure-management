import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";
import { BudgetManagementPage } from "../components/page/budget-management-page";
import { CategoryManagementPage } from "../components/page/category-management-page";

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ExpenditureListPage />} />
					<Route path="/budget" element={<BudgetManagementPage />} />
					<Route path="/category" element={<CategoryManagementPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
