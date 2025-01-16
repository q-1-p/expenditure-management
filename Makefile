test:
	bun test

deploy:
	bun run build
	firebase deploy