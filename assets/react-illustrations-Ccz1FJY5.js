import{j as n}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as r}from"./index-COxJNofV.js";import{M as i,e as s}from"./index-BqLZ-93Z.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Bg4q0iye.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const a=`# BOI React Illustrations

React SVG illustration components.

## Installation

\`\`\`console
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
