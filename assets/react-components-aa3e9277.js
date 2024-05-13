import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as r}from"./index-2d8ea55a.js";import{M as i,e as s}from"./index-dfba687d.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-ac1dd81f.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const p=`# BOI React Components

Shared React component library.

## Installation

\`\`\`
npm i styled-components
npm i @boi/react-design-tokens
npm i @boi/react-components
\`\`\`

## Usage

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

[Typography component](src/Typography/README.md)
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/react-components"}),`
`,n.jsx(s,{children:p})]})}function E(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{E as default};
