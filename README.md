# Scriptable for iOS TypeScript Starter

This is a starter project for building [Scriptable](https://scriptable.app) scripts using TypeScript. It uses [Bun](https://bun.sh) to compile TypeScript to JavaScript and minify the output.

## Install dependencies

```bash
bun install
```

## Build

```bash
bun build ./src/index.ts --minify --outdir ./dist
```

If you have MacOS, you can also pipe the minified output straight to your clipboard and paste it into the Scriptable app:

```bash
bun build ./src/index.ts --minify | pbcopy
```
