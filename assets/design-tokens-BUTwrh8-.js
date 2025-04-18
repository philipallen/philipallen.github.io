import{j as n}from"./jsx-runtime-BkBIjjFT.js";import{useMDXComponents as s}from"./index-CNwVr1BN.js";import{M as i,h as r}from"./index-Bfa_Y5mY.js";import"./index-KmaxkdDD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Mxng_W-2.js";import"./index-CVhlOzZO.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const a=`# BOI Design Tokens

Design tokens used for Bank of Ireland.

This package uses [Style Dictionary](https://amzn.github.io/style-dictionary) to manage our design tokens.

## Installation

\`\`\`console
npm i @boi/design-tokens
\`\`\`

## Brands / Themes

- boi (light, dark)

## Platforms

- web
- reactNative
- android
- ios

## Usage

### Web Tokens:

\`\`\`jsx
import { color } from "@boi/design-tokens/dist/web/boi/light/tokens.json";

// color.white
\`\`\`

### React Native Tokens:

\`\`\`jsx
import { color } from "@boi/design-tokens/dist/reactNative/boi/light/tokens.json";

// color.white
\`\`\`

### [Coming soon] Android Tokens:

\`\`\`jsx
// TODO
\`\`\`

### [Coming soon] iOS Tokens:

\`\`\`jsx
// TODO
\`\`\`

## Troubleshooting

There may be an issue when destructuring in create-react-app. If you see this error:

\`\`\`console
Should not import the named export 'color':'white' (imported as 'color') from
default-exporting module (only default export is available soon)
\`\`\`

Instead, you could do the following:

\`\`\`jsx
import tokens from "@boi/design-tokens/dist/web/boi/light/tokens.json";

const { color } = tokens;

// color.white
\`\`\`
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/design-tokens"}),`
`,n.jsx(r,{children:a})]})}function f(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{f as default};
