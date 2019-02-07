# Indigo

Indigo is Tlon's design language, and a set of web stack implementation tools.

## Getting Started

1. `$ git clone git@github.com:urbit/Indigo.git`
2. `$ cd Indigo`
3. `$ npm install`
4. `$ npm run start` This will run the sandbox and listen to all indigo/sandbox changes.

## Usage

When working on Indigo, it is often necessary to see your changes in the context of an app or webpage for visual validation, QC or rapid iteration. Indigo offers the sandbox to perform such tasks.

### Standard Commands

| Command                    | Description                                                                      |
|----------------------------|----------------------------------------------------------------------------------|
| `start`                    | Watches `*.js` and `*.scss` in `./sandbox` and all of `./indigo` for changes and builds everything|
| `start:sass`               | Watches `*.scss` in `./indigo/css` for changes and builds CSS                    |
| `start:react`              | Watches `*.js` in `./indigo/react` for changes and builds a JS bundle            |
| `start:sandbox`            | Watches `*.js` and `*.scss` in `./sandbox` for changes and builds JS and CSS     |
| `start:sandbox-dev`        | Watches `*.js` and `*.scss` in `./sandbox` and all of `./indigo` for changes and builds everything, same as `start`|

### Other Commands

| Command                    | Description                                                                      |
|----------------------------|----------------------------------------------------------------------------------|
| `build:indigo-css`           | Builds system and utilities SCSS into one CSS file                               |
| `watch:indigo-css`           | Watches for changes in `./indigo/css`, runs `build:indigo-css`                       |
| `build:indigo-system-css`    | Builds only `./indigo/css/system.scss` to `system.css`                               |
| `build:indigo-utilities-css` | Builds only `./indigo/css/utilities.scss` to `utilities.css`                         |
| `build:indigo-all-css`       | Builds `indigo.css`, `system.css` and `utilities.css`                                  |
| `watch:indigo-all`           | Watches for changes in `./indigo/css`, runs `build:indigo-all-css`                   |
| `build:indigo-react`         | Builds indigo react components                                                   |
| `watch:indigo-react`         | Watches for changes in `./indigo/react`, runs `build:indigo-react`                   |
| `build:sandbox-react`        | Builds the sandbox and runs `build:indigo`                                         |
| `watch:sandbox`              | Watches for changes in only `./sandbox`, runs `build:sandbox`                       |
| `watch:sandbox-all`          | Watches for changes in `./sandbox` and `./indigo`, runs `build:sandbox`                |
| `build:indigo`               | Builds both `indigo.css` and `indigo-react.js` (`./indigo/react/dist/index.js`) |

## Deployment

Coming soon

## Project Structure

`./docs` contains documentation, whenever that actually exists.

`./gulp` stores modular gulp tasks that are re-used in `./gulpfile.js` for build tasks

`./indigo` the source files live here

`./indigo/css` indigo-css files and CSS dist

`./indigo/react` indigo-react React components and bundle

`./indigo/html` not sure yet, pending Jimmy

`./indigo/site` indigo's reference website

`./sandbox` QA/Validation/Development sandbox. Indigo builds are automatically copied into this dir

`./gulpfile.js` Build task definitions


## Bugs

Feel free to open an issue or make a PR.

## Acknowledgements

Much of the build tooling is based on our own [Kamaji](https://github.com/urbit/kamaji) boilerplate

The atomic CSS utilities borrow heavily from [Tachyons](https://tachyons.io)
