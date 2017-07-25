# Monzo Web App

This is a web app leveraging the [monzo api](https://monzo.com/docs/).

## Initial local steps

Make sure you have node with [yarn](https://yarnpkg.com/lang/en/docs/install/) or npm, and [Sass](http://sass-lang.com/install) installed on your system.

In the root directory run `yarn`.

Register a client at [this page](https://developers.monzo.com/apps/home) with the redirect URL set to `http://localhost:3000/int.html`. Note your `clientId` and `clientSecret`.

Open `/src/js/const.example.js` and add your id and secret from the previous step.

Rename the file `const.js`.

## Run a development server

`yarn serve` from the project root.

## Build the project

`yarn build` from the project root.
