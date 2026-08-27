# Lal Kitab Insights

An interactive application built on Lal Kitab knowledge to help users discover remedies, insights, and astrological guides to balance their karma.

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
