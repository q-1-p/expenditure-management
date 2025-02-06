test:
	bun vitest --watch false

deploy:
	bun run build
	firebase deploy