# Indigo

Indigo is Tlon's design language, and a set of web stack implementation tools.

## Getting Started

1. `$ git clone git@github.com:urbit/Indigo.git`
2. `$ cd Indigo`
3. `$ npm install`
4. `$ npm run start` This will run the sandbox and listen to all Indigo/sandbox changes.

Note: the sandbox is currently broken. (March 12 2019)

## Usage

When working on Indigo, it is often necessary to see your changes in the context of an app or webpage for visual validation, QC or rapid iteration. Indigo offers ./sandbox to perform such tasks.

### Standard Commands

| Command                 | Description                                                                      |
| ----------------------- | -------------------------------------------------------------------------------- |
| gulp indigo-sass        | builds indigo.css                                                                |
| gulp indigo-react       | bundles indigo react components                                                  |
| gulp sandbox            | builds the sandbox and watches indigo/css, indigo/react and /sandbox for changes |
| gulp site               | builds the site, and watches indigo/site for changes                             |
| gulp update-site-indigo | rebuild indigo/css and indigo/react and updates them in /indigo/site             |

## Deployment

Coming soon

## Project Structure

`./docs` contains documentation, whenever that actually exists.

`./gulp` stores modular gulp tasks that are re-used in `./gulpfile.js` for build tasks

`./indigo` the source files live here

`./indigo/css` indigo-css files and CSS dist

`./indigo/react` indigo-react React components and bundle

`./indigo/html` indigo stuff for plain HTML, technical stuff pending Jimmy

`./indigo/site` indigo's reference website

`./sandbox` QA/Validation/Development sandbox. Indigo builds are automatically copied into this dir

`./gulpfile.js` Build task definitions

## Bugs

Feel free to open an issue or make a PR.

## Feedback

We love and welcome constructive feedback.

## Acknowledgements

Much of the build tooling is based on our own [Kamaji](https://github.com/urbit/kamaji) boilerplate

The atomic CSS utilities borrow heavily from [Tachyons](https://tachyons.io)
