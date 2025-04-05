# TreeRender

# Description
A mini-application that implements an algorithm for converting a string into a tree and then rendering it.

## Yarn version
v1.22.22

## Node version
v20.9.0. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

# Getting Started
To start project use
```bash
  yarn install
  yarn dev
  ```
To build and serve use
```bash
  yarn install
  yarn build
  yarn serve
  ```

## Available Scripts
In the project directory, you can run:

### `yarn run start`
This script does the following:
1. Runs `yarn run set-env:prod` to update the `.env` file with production settings.
2. Runs `react-scripts start` to start the application in production mode.
To start the application in production mode, run:
yarn run start

You will see any lint errors in the console.

Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `yarn run dev`
This script does the following:
1. Runs `npm run set-env:dev` to update the `.env` file with development settings.
2. Runs `react-scripts start` to start the application in development mode.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `yarn run set-env:prod`
This script runs the `update-env.js` script with the `prod` argument. It updates the `.env` file with the production configuration settings from `config.json`.

### `yarn run set-env:dev`
This script runs the `update-env.js` script with the `dev` argument. It updates the `.env` file with the development configuration settings from `config.json`.

### `yarn run serve`
Serves a static site (after app building via 'yarn run build:dev').

### `yarn run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run check-deps`
### `yarn run upgrade-deps`
Checks/updates available dependencies to the latest version.

### `yarn run format`
Formats code using Prettier for TypeScript, TSX, and CSS, SCSS files.

### `yarn test`
Runs unit tests using the Jest.

### `yarn lint`
Runs ESLint for static code analysis on TypeScript and TSX files.

### `yarn lint:fix`
Fixes errors found by ESLint in TypeScript and TSX files.
