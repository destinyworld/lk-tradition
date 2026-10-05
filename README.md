# LK Tradition

An elegant, responsive companion for exploring Lal Kitab planets, houses, and traditional practices.

## Development

Prefer working locally? You need Node.js and Bun (or npm/yarn).

### Install Dependencies

```sh
bun install
```

### Start Development Server

```sh
bun run dev
```

### Build for Production

```sh
bun run build
```

For a Node.js server deployment where build-time prerendering is unavailable,
use `npm run build:server`. This builds the SSR server and client without making
prerender requests during the build; the running server still renders pages.

## Run as an Android app

Install Android Studio with its Android SDK, then build and sync the local web app:

```sh
npm run android:sync
npm run android:open
```

In Android Studio, wait for Gradle sync and launch the `app` configuration on an
emulator or connected device. The Android app loads the prerendered single-page
web experience from `dist/client`; run `npm run android:sync` again after web
changes to refresh the native project assets.

## Create a single deployable folder

This application uses server-side rendering, so it must run on a Node.js web
server. Create the complete deployment folder with:

```sh
npm run package
```

The command creates `dist-prod/`, including the compiled client and server
artifacts, `server-runner.js`, and production dependencies. Copy that entire
folder to the server and run:

```sh
npm start
```

The default port is `3000`; set `PORT` to change it. Keep the `dist` directory
inside `dist-prod` because TanStack Start uses both its client and server
artifacts at runtime.

For GitHub-based Node.js hosting, use `npm run build:server` as the build
command and `npm start` as the start command. The regular `npm run build`
continues to prerender pages for deployments that need a static client build,
such as the Android app.
