import{j as n}from"./jsx-runtime-6eef64cc.js";import{u as s}from"./index-2d8ea55a.js";import{M as i,e as r}from"./index-12054c48.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-126a13e8.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-98964cd2.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const a=`# BOI React Design Tokens

React components for the \`@boi/design-tokens\` files.

## Installation

\`\`\`
npm i @boi/react-design-tokens
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

### Using design tokens

Then use the design tokens inside your components:

\`\`\`jsx
import { useDesignTokens } from "@boi/react-design-tokens";

export default function Layout() {
  const { tokens } = useDesignTokens();
  const { themeColor, color } = tokens;

  return (
    <>
      <div style={{ backgroundColor: themeColor.core100 }}>
        The colour of this will automatically change if your app's theme changes
      </div>
      <div style={{ backgroundColor: color.white }}>
        If you're app is not using themes, then you can use the colours directly
        like this
      </div>
    </>
  );
}
\`\`\`

### Updating the theme

To update the theme, use \`updateTheme\` in your React component, like so:

\`\`\`jsx
import { useDesignTokens } from "@boi/react-design-tokens";
...
const { updateTheme } = useDesignTokens();
...
updateTheme('dark');
\`\`\`

## Troubleshooting

If your tests fail with the following error:

\`TypeError: window.matchMedia is not a function\`

You will need to include the below jest mock into your setup tests file, so that jsdom understands the \`matchMedia\` property:

\`\`\`js
// matchMedia.mock.js
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// setupTests.js
import "./matchMedia.mock.js";
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Developer docs/react-design-tokens"}),`
`,n.jsx(r,{children:a})]})}function j(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{j as default};
