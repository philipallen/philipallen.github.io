import{j as o}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as t}from"./index-COxJNofV.js";import{M as s,e as c}from"./index-C8ejTS2r.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DaYnyDGg.js";import"../sb-preview/runtime.js";import"./index-5Gu-hNp0.js";import"./index-DXimoRZY.js";import"./extends-CF3RwP-h.js";import"./doctrine-DmI4-aq3.js";import"./index-DrFu-skq.js";const a=`# BOI React Icons

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
`;function e(n){return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Developer docs/react-icons"}),`
`,o.jsx(c,{children:a})]})}function I(n={}){const{wrapper:r}={...t(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e()}export{I as default};
