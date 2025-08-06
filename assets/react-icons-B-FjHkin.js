import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as t}from"./index-BRkUXrbv.js";import{M as s,h as c}from"./index-DdjbSnqR.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-rv7djc0Y.js";import"./index-uaANFLeC.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const a=`# React icons

React components for the \`@boi/icons\` files.

## Installation

\`\`\`console
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
`;function e(n){return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"About Solas/Developer docs/react-icons"}),`
`,o.jsx(c,{children:a})]})}function h(n={}){const{wrapper:r}={...t(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(e,{...n})}):e()}export{h as default};
