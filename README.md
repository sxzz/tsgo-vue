# tsdown + tsgo + Vue

Build a Vue component library with JavaScript and TypeScript declarations.

Both rolldown-plugin-dts and the Vue content mapper are still under development
and are not yet stable. APIs and behavior may change.

```sh
pnpm install
pnpm build
pnpm typecheck
pnpm test:types
```

Output: `dist/index.mjs` and `dist/index.d.mts`.

## Configuration

- `unplugin-vue` compiles Vue components to JavaScript.
- `tsconfig.json` registers the Vue content mapper.
- tsdown uses `generator: 'tsgo'` with `tsgo.runExternalCode: true`.
- pnpm overrides `rolldown-plugin-dts` with `0.29.0-beta.2`.

## Vue mapper

The mapper is not yet published to npm. `vendor/` contains local builds of
`@vue/content-mapper` and `@vue/language-core` from
[Vue Language Tools PR #6170](https://github.com/vuejs/language-tools/pull/6170),
with the upstream MIT license.

The mapper uses TypeScript 6 internally; declaration generation and type checking
use TypeScript 7.1.0-beta. No external checkout is required.

## VS Code

Install the recommended **TypeScript 7** extension and reload the window.
Workspace settings select the local TypeScript 7 package. Trust this workspace
and approve the Vue content mapper when prompted to enable editor features.
