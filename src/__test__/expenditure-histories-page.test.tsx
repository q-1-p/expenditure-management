import "@testing-library/jest-dom";
import { StrictMode } from "react";
import { MemoryRouter } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";
import { describe, expect, test, beforeEach } from "vitest";
import { render, act, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";

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

    // コンポーネントのレンダリング
    render(
      <StrictMode>
        <MemoryRouter initialEntries={["/"]}>
          <UIProvider>
            <ExpenditureListPage />
          </UIProvider>
        </MemoryRouter>
      </StrictMode>
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

    // 入力フォームへの値の設定
    const nameInput = screen.getByTestId("nameEntryField");
    const amountInput = screen.getByTestId("amountEntryField");
    const dateInput = screen.getByTestId("dateEntryField");

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "テスト支出" } });
      fireEvent.change(amountInput, { target: { value: "1000" } });
      fireEvent.change(dateInput, { target: { value: "2024-01-01T10:00" } });
    });

    const submitButton = screen.getByRole("button", { name: "追加" });
    await act(async () => {
      submitButton.click();
    });

    // 登録後の表示確認（非同期で待つ）
    expect(await screen.findByText("テスト支出")).toBeInTheDocument();
  });

  test("支出削除ボタン押下時、支出が削除されることを確認する", async () => {});
});
