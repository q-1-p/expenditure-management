import "@testing-library/jest-dom";
import {
	act,
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { UIProvider } from "@yamada-ui/react";
import { StrictMode } from "react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test } from "vitest";
import { CategoryManagementPage } from "../components/page/category-management-page";

describe("カテゴリ管理ページのテスト", () => {
	beforeEach(() => {
		// window.matchMediaのモック設定
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: (query: string) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: () => {},
				removeListener: () => {},
				addEventListener: () => {},
				removeEventListener: () => {},
				dispatchEvent: () => false,
			}),
		});

		// コンポーネントのレンダリング
		render(
			<StrictMode>
				<MemoryRouter initialEntries={["/"]}>
					<UIProvider>
						<CategoryManagementPage />
					</UIProvider>
				</MemoryRouter>
			</StrictMode>,
		);
	});

	test("カテゴリ追加ボタンをクリックした際、モーダルが表示されることを確認する", async () => {
		await act(async () => {
			screen.getByRole("button", { name: "カテゴリ追加" }).click();
		});

		expect(await screen.findByRole("dialog")).toBeInTheDocument();
	});

	test("入力内容が不足している場合、バリデーションメッセージが表示されることを確認する", async () => {
		await act(async () => {
			screen.getByRole("button", { name: "カテゴリ追加" }).click();
		});
		await act(async () => {
			screen.getByRole("button", { name: "追加" }).click();
		});

		// バリデーションメッセージの確認
		expect(screen.getByText("名前を入力してください")).toBeInTheDocument();
	});

	test("内容を入力して登録ボタン押下時、カテゴリが登録されることを確認する", async () => {
		await act(async () => {
			screen.getByRole("button", { name: "カテゴリ追加" }).click();
		});
		await act(async () => {
			fireEvent.change(screen.getByTestId("nameEntryField"), {
				target: { value: "テストカテゴリ" },
			});
			fireEvent.change(screen.getByTestId("budgetaryAmountEntryField"), {
				target: { value: 10000 },
			});
		});

		await act(async () => {
			screen.getByRole("button", { name: "追加" }).click();
		});

		// 登録後の表示確認（非同期で待つ）
		expect(await screen.findByText("テストカテゴリ")).toBeInTheDocument();
	});

	test("カテゴリ削除ボタン押下時、カテゴリが削除されることを確認する", async () => {
		// 削除ボタンをクリック
		const deleteButtons = await screen.findAllByTestId("deleteCategoryButton");
		await act(async () => {
			deleteButtons[deleteButtons.length - 1].click();
		});

		// 削除後の表示確認（非同期で待つ）
		await waitForElementToBeRemoved(() => screen.queryByText("テストカテゴリ"));
	});
});
