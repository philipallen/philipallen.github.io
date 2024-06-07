import{j as o}from"./jsx-runtime-6eef64cc.js";import{u as e}from"./index-2d8ea55a.js";import{M as s,f as c}from"./index-625e1572.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-61d62775.js";import"../sb-preview/runtime.js";import"./index-cda6679a.js";import"./extends-4c19d496.js";import"./index-8c3ac41d.js";import"./index-bce99968.js";import"./index-356e4a49.js";const a=`# BOI React Icons

React components for the \`@boi/icons\` files.

## Installation

\`\`\`
npm i @boi/react-icons
\`\`\`

## Usage

\`\`\`jsx
import { CloseIcon, ErrorIcon } from "@boi/react-icons";
\`\`\`

To change the color of standard icons, use the \`color\` prop:

\`\`\`jsx
<CloseIcon color={modal.icons.close.color} />
\`\`\`

To change the color of multicolor icons, use the \`primaryColor\` and \`secondaryColor\` props:

\`\`\`jsx
<ErrorIcon
  primaryColor={modal.icons.error.primaryColor}
  secondaryColor={modal.icons.error.secondaryColor}
/>
\`\`\`

Alternatively, you can use the \`data-primary-color\` and \`data-secondary-color\` attributes:

\`\`\`js
export const StyledErrorIcon = styled(ErrorIcon)\`
  \${() => {
    const { tokens } = useDesignTokens();
    const { modal } = tokens;

    return css\`
      & [data-primary-color] {
        color: \${modal.icons.error.primaryColor};
      }

      & [data-secondary-color] {
        color: \${modal.icons.error.secondaryColor};
      }
    \`;
  }}
\`;
\`\`\`
`;function t(n){return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Developer docs/react-icons"}),`
`,o.jsx(c,{children:a})]})}function I(n={}){const{wrapper:r}={...e(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(t,{...n})}):t()}export{I as default};
