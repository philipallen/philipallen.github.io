import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as s}from"./index-BRkUXrbv.js";import{M as i,h as r}from"./index-Cnn7Velg.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BMNJFTzx.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const a=`# Design tokens

Design tokens used for Bank of Ireland.

This package uses [Style Dictionary](https://amzn.github.io/style-dictionary) to manage our design tokens.

## Installation

\`\`\`console
npm i @boi/design-tokens
\`\`\`

## Brands / Themes

- boi (light, dark)
- newIreland (light, dark)

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

### Android Tokens:

\`\`\`java
<solid android:color="@color/theme_color_core100" />
\`\`\`

### iOS Tokens:

\`\`\`objectivec
#import "DesignTokens.h"

UIColor *baseColor = [DesignTokens colorAtKeyPath:@"themeColor.base100"];
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
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"About Solas/Developer docs/design-tokens"}),`
`,n.jsx(r,{children:a})]})}function b(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{b as default};
