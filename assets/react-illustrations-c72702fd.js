import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as r}from"./index-2d8ea55a.js";import{M as i,e as s}from"./index-5acae0d7.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-b7e4f344.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const a=`# BOI React Illustrations

React SVG illustration components.

## Installation

\`\`\`
npm i @boi/react-design-tokens
npm i @boi/react-illustrations
\`\`\`

## Usage

### Initialising design tokens

Render the \`DesignTokensProvider\` at the root of your application:

\`\`\`jsx
import {
  DesignTokensProvider,
  DesignTokensGlobalStyles,
  BOI_THEME_TOKENS,
} from "@boi/react-design-tokens";

import Layout from "./Layout";

export default function App() {
  return (
    <DesignTokensProvider themeTokens={BOI_THEME_TOKENS}>
      <DesignTokensGlobalStyles />
      <Layout />
    </DesignTokensProvider>
  );
}
\`\`\`

### Using an illustration

Then render the illustration with an optional \`colorPalette\` prop:

\`\`\`jsx
import { CalculatorIllustration } from "@boi/react-illustrations";

export default function Layout() {
  return <CalculatorIllustration colorPalette="blue" />;
}
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/react-illustrations"}),`
`,n.jsx(s,{children:a})]})}function h(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{h as default};
