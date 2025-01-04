install: # установка зависимостей
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: # публикация
	npm publish --dry-run

lint: # linting
	npx eslint .

fix: # linting fix
	npx eslint --fix .