import{j as n}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as r}from"./index-COxJNofV.js";import{M as s,e as i}from"./index-BqLZ-93Z.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Bg4q0iye.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const p=`# BOI React Components

Shared React component library.

## Installation

\`\`\`console
npm i styled-components
npm i @boi/fonts
npm i @boi/react-design-tokens
npm i @boi/react-components
\`\`\`

## Usage

You'll need @boi/fonts imported into your project. To do this, see the [fonts README](../fonts/README.md)

Render the \`DesignTokensProvider\` at the root of your application:

\`\`\`jsx
import {
  DesignTokensProvider,
  DesignTokensGlobalStyles,
  BOI_THEME_TOKENS,
} from "@boi/react-design-tokens";
import { Button } from "@boi/react-components";

export default function App() {
  return (
    <DesignTokensProvider themeTokens={BOI_THEME_TOKENS}>
      <DesignTokensGlobalStyles />
      <Button />
    </DesignTokensProvider>
  );
}
\`\`\`

## Component Specific Docs

[DatePicker component](src/DatePicker/README.md)

[Modal component](src/Modal/README.md)

[Typography component](src/Typography/README.md)
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Developer docs/react-components"}),`
`,n.jsx(i,{children:p})]})}function k(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{k as default};
