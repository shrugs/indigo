# Indigo

Indigo is Tlon's design language, and a set of web stack implementation tools.

## Development

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

## Bugs

Feel free to open an issue or make a PR.
