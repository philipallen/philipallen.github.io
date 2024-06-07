import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as i}from"./index-2d8ea55a.js";import{M as s,f as r}from"./index-625e1572.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-61d62775.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-4c19d496.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const a=`# BOI Design Tokens

Design tokens used for Bank of Ireland.

This package uses [Style Dictionary](https://amzn.github.io/style-dictionary) to manage our design tokens.

## Installation

\`\`\`
npm i @boi/design-tokens
\`\`\`

## Brands / Themes

- boi (light, dark, pride)
- boiKids (light, dark)

## Platforms

- web
- reactNative

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

## Troubleshooting

There may be an issue when destructuring in create-react-app. If you see this error:

\`Should not import the named export 'color':'white' (imported as 'color') from default-exporting module (only default export is available soon)\`

Instead, you could do the following:

\`\`\`jsx
import tokens from "@boi/design-tokens/dist/web/boi/light/tokens.json";

const { color } = tokens;

// color.white
\`\`\`
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Developer docs/design-tokens"}),`
`,n.jsx(r,{children:a})]})}function j(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{j as default};
