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
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";

describe("支出履歴一覧ページのテスト", () => {
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

		// scrollToのモック設定
		window.HTMLElement.prototype.scrollTo = () => {};

		// コンポーネントのレンダリング
		render(
			<StrictMode>
				<MemoryRouter initialEntries={["/"]}>
					<UIProvider>
						<ExpenditureListPage />
					</UIProvider>
				</MemoryRouter>
			</StrictMode>,
		);
	});

	test("支出追加ボタンをクリックした際、モーダルが表示されることを確認する", async () => {
		const addButton = screen.getByRole("button", { name: "支出追加" });

		await act(async () => {
			addButton.click();
		});

		const dialog = await screen.findByRole("dialog");
		expect(dialog).toBeInTheDocument();
	});

	test("入力内容が不足している場合、バリデーションメッセージが表示されることを確認する", async () => {
		const addButton = screen.getByRole("button", { name: "支出追加" });
		await act(async () => {
			addButton.click();
		});

		const submitButton = screen.getByRole("button", { name: "追加" });
		await act(async () => {
			submitButton.click();
		});

		// バリデーションメッセージの確認
		expect(screen.getByText("名前を入力してください")).toBeInTheDocument();
		expect(screen.getByText("金額を入力してください")).toBeInTheDocument();
	});

	test("内容を入力して登録ボタン押下時、支出が登録されることを確認する", async () => {
		const addButton = screen.getByRole("button", { name: "支出追加" });
		await act(async () => {
			addButton.click();
		});

		await act(async () => {
			fireEvent.change(screen.getByTestId("nameEntryField"), {
				target: { value: "テスト支出" },
			});
			fireEvent.change(screen.getByTestId("amountEntryField"), {
				target: { value: "1000" },
			});
			fireEvent.change(screen.getByTestId("dateEntryField"), {
				target: { value: "2025/01/01" },
			});
		});

		const submitButton = screen.getByRole("button", { name: "追加" });
		await act(async () => {
			submitButton.click();
		});

		expect(await screen.findByText("テスト支出")).toBeInTheDocument();
	});

	test("支出削除ボタン押下時、支出が削除されることを確認する", async () => {
		// 削除ボタンをクリック
		const deleteButtons = await screen.findAllByTestId(
			"expenditureDeleteButton",
		);
		const deleteButton = deleteButtons[deleteButtons.length - 1];
		await act(async () => {
			deleteButton.click();
		});

		// 削除後の表示確認（非同期で待つ）
		await waitForElementToBeRemoved(() => screen.queryByText("テスト支出"));
	});
});
