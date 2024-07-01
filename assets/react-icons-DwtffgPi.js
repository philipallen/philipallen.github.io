import{j as o}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as e}from"./index-COxJNofV.js";import{M as s,f as c}from"./index-Db7hi5zx.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CGZiHNGN.js";import"../sb-preview/runtime.js";import"./index-5Gu-hNp0.js";import"./extends-CF3RwP-h.js";import"./index-DXimoRZY.js";import"./index-BPhVFo-B.js";import"./index-DrFu-skq.js";const a=`# BOI React Icons

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
