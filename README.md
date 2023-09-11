Порядок действий после готовности вашей фичи: 
   - git add . <!-- выделить все документы для обновления -->
   - git commit -m '(название коммита)' <!-- сделать коммит всех изменений документов -->
   - git push -u origin (название рабочей ветки) <!-- отправить коммит в ваш репозиторий -->
   - делаем пул реквест
   - ждем пока ПЛ примут
   - git checkout main <!-- перейти на мейн ветку -->
   - git pull upstream main <!-- стянуть данные с основного репозитория -->
   - git checkout -b (рабочая ветка) <!-- создать новую ветку и сразу переключиться на неё -->
   - git merge main <!-- стянуть все данные с вашей MAIN ветки и загрузить на вашу рабочую ветку -->










<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
