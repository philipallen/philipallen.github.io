import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as r}from"./index-BRkUXrbv.js";import{M as s,h as i}from"./index-D2Bc_5_R.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BbIl1j5b.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const p=`# React components

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
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"About Solas/Developer docs/react-components"}),`
`,n.jsx(i,{children:p})]})}function M(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{M as default};
