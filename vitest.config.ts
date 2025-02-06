import react from '@vitejs/plugin-react-swc'
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";
import { defaultConfig, getColorModeScript } from "@yamada-ui/react"

function injectScript(): Plugin {
    return {
        name: "vite-plugin-inject-scripts",
        transformIndexHtml(html) {
            const content = getColorModeScript({
                initialColorMode: defaultConfig.initialColorMode,
            })

            return html.replace("<body>", `<body><script>${content}</script>`)
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), injectScript()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/__test__/setup.ts']
    }
})
