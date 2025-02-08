import "@testing-library/jest-dom";
import { StrictMode } from "react";
import { MemoryRouter } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";
import { ExpenditureListPage } from "../components/page/expenditure-history-list-page";
import { describe, expect, test, beforeEach } from "vitest";
import { render, act } from "@testing-library/react";
import { screen } from "@testing-library/react";

describe("支出履歴一覧ページのテスト", () => {
  const renderComponent = () => {
    return render(
      <StrictMode>
        <MemoryRouter initialEntries={["/"]}>
          <UIProvider>
            <ExpenditureListPage />
          </UIProvider>
        </MemoryRouter>
      </StrictMode>
    );
  };

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
  });

  test("支出追加ボタンをクリックした際、モーダルが表示されることを確認する", async () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: "支出追加" });

    await act(async () => {
      addButton.click();
    });

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  test("入力内容が不足している場合、バリデーションメッセージが表示されることを確認する", async () => {
    renderComponent();
    const addButton = screen.getByRole("button", { name: "支出追加" });

    await act(async () => {
      addButton.click();
    });

    const submitButton = screen.getByRole("button", { name: "追加" });

    await act(async () => {
      submitButton.click();
    });

    expect(screen.getByText("名前を入力してください")).toBeInTheDocument();
    expect(screen.getByText("金額を入力してください")).toBeInTheDocument();
  });

  test("内容を入力して登録ボタン押下時、支出が登録されることを確認する", async () => {
    // テストの実装
  });

  test("支出削除ボタン押下時、支出が削除されることを確認する", async () => {
    // テストの実装
  });
});
