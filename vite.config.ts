import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true, // グローバル変数 (expect など) を使用するため
		environment: "jsdom", // React コンポーネントのテストには jsdom 環境が必要
		coverage: {
			provider: "istanbul", // カバレッジツールをインストール
		},
	},
});
