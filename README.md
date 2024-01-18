# NxElectronStarter

This project provides an example boilerplate to bundle a web application with both frontend [Angular](https://angular.io/) and backend [Node.js](https://nodejs.org/en/) projects within a [Nx](https://nx.dev) worskpace into a desktop application using [Electron](https://electronjs.org/).

## Installation

```bash
npm install
```

## Structure

```treeview
nx-electron-starter/
├── apps/
│   ├── backend/
│   └── backend-e2e/
│   ├── electron/
│   ├── frontend/
│   └── frontend-e2e/
├── .eslintrc.json
├── nx.json
├── package.json
└── tsconfig.base.json
```

## How to serve

- Run `nx run <front-app-name>:serve` to serve your frontend application.
- Run `nx run <back-app-name>:serve` to serve your backend application.

## How to build

- Run `nx run <front-app-name>:build` to build your front-end application.
- Run `nx run <back-app-name>:build` to build your back-end application.
- Run `nx run <electron-app-name>:build` to build your electron application.

## How to package

- Run `nx run <electron-app-name>:package [--options]` to package your electron application.
- Or `nx run <electron-app-name>:make --prepackgeOnly` to package your electron application.

## How to make

- Run `nx run <electron-app-name>:make [--options]` to make your application.

## How to test

This project comes with Playwright and Jest configured.

- Run `nx run <front|back|electron>:test` to perform unit testing of your application.
- Run `nx run <front-e2e|back-e2e>:e2e` to perform e2e testing of your application.

## More documentation

In order to check the packaging, making and migrating options of the application, check [nx-electron](https://github.com/bennymeg/nx-electron)'s documentation.

## Attribution

This project is dependendant on Nrwl [Nx](https://nx.dev) platform and the great work of [bennymeg](https://github.com/bennymeg)'s [nx-electron](https://github.com/bennymeg/nx-electron), as this project uses the generated boilerplate of that module.
