# Indigo

Indigo is [Tlon's](tlon.io) design language. We created it to increase the consistency of our designs, duplicate less work and keep things simple.

## Getting Started

### Using

Download [indigo.css](https://raw.githubusercontent.com/urbit/indigo/master/indigo/css/dist/indigo.css).

### Developing

This repo contains the source for

- Indigo SASS/CSS
- Indigo React Components
- the documentation site
- a sandbox development environment.

If you need to see the results of your changes, use the sandbox by running `gulp sandbox` to display an HTML page while editing the source of the SASS/CSS or JS.

#### First Steps

1. `$ git clone git@github.com:urbit/indigo.git`
2. `$ cd Indigo`
3. `$ npm install`

#### Indigo SASS/CSS

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| gulp sass       | builds indigo.css                                    |
| gulp watch-sass | watches ./indigo/css for changes and rebuilds source |

#### Indigo React Components

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| gulp react       | builds indigo react js bundle                          |
| gulp watch-react | watches ./indigo/react for changes and rebuilds source |

#### Indigo Documentation Site

| Command               | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| gulp site             | builds indigo documentation site, runs a dev server and watches ./site for changes |
| gulp site-pull-indigo | rebuilds indigo css and react, then copies it to ./site/src                        |

#### Indigo Sandbox

| Command      | Description                                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gulp sandbox | builds indigo documentation site, runs a dev server and watches ./indigo and ./sandbox for changes. Note that indigo will rebuild and be copied into the ./sandbox when this command is run. |

## Project Structure

`./docs` contains documentation, whenever that actually exists.

`./gulp` stores modular gulp tasks that are re-used in `./gulpfile.js` for build tasks

`./indigo` the source files live here

`./indigo/css` indigo-css files and CSS dist

`./indigo/react` indigo-react React components and bundle

`./indigo/html` indigo stuff for plain HTML, technical stuff pending Jimmy

`./site` indigo's reference website

`./sandbox` QA/Validation/Development sandbox. Indigo builds are automatically copied into this dir

`./gulpfile.js` Build task definitions

## Bugs

Feel free to open an issue or make a PR.

## Feedback

We love and welcome constructive feedback.

## Acknowledgements

Much of the build tooling is based on our own [Kamaji](https://github.com/urbit/kamaji) boilerplate

Our atomic CSS utilities borrow heavily from [Tachyons](https://tachyons.io)
