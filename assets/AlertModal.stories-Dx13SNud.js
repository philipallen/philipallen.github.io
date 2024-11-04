import{j as n}from"./jsx-runtime-DQ32znRX.js";import{a as I}from"./chunk-WFFRPTHA-LPjJ2Zra.js";import{h as l,H as M,d as W}from"./index-C3m9D1_L.js";import{r as g}from"./index-DH5ua8nC.js";import{a as p,u,b as d}from"./index-C-LSVLXB.js";import{E as j,W as q,S as $,d as S}from"./index-COlUQA8Q.js";import{C as A,M as R}from"./Modal-Di7SxPRA.js";import{T as w}from"./Typography-DPnR7vBA.js";import{B as E}from"./Button-B-Lo2vev.js";const V=p(A)`
  ${({$severity:a})=>{const{tokens:r}=u(),{modal:t,alertModal:e}=r;return d`
      display: grid;
      gap: ${e.gap};
      border-top-width: ${e.stroke.top.width};
      border-top-style: ${e.stroke.top.style};
      border-top-color: ${e.stroke.top.color[a]};
      padding-top: ${e.padding.mobile.top};
      padding-left: ${e.padding.mobile.left};
      padding-right: ${e.padding.mobile.right};
      padding-bottom: ${e.padding.mobile.bottom};
      overflow-y: auto;

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-top: ${e.padding.tablet.top};
        padding-left: ${e.padding.tablet.left};
        padding-right: ${e.padding.tablet.right};
        padding-bottom: ${e.padding.tablet.bottom};
      }
    `}}
`,F=p.div`
  display: grid;
  gap: 8px;
`,N=p.div`
  ${({$severity:a})=>{const{tokens:r}=u(),{alertModal:t}=r;return d`
      svg {
        display: block;
        width: ${t.icon.width};
        height: ${t.icon.height};

        & [data-primary-color] {
          color: ${t.icon.primaryColor[a]};
        }

        & [data-secondary-color] {
          color: ${t.icon.secondaryColor[a]};
        }
      }
    `}}
`,U=p.div`
  ${()=>{const{tokens:a}=u(),{alertModal:r}=a;return d`
      color: ${r.body.color};
    `}}
`,Y=p.div`
  ${({$layout:a})=>{const{tokens:r}=u(),{alertModal:t}=r;return[d`
        gap: ${t.footer.gap};
      `,a==="inline"&&d`
          display: inline-grid;
          grid-auto-flow: column;
        `,a==="stacked"&&d`
          display: grid;
          grid-auto-flow: row;
        `]}}
`;function L(){const{tokens:a}=u(),{modal:r}=a,t=window.matchMedia(`(min-width: ${r.breakpoints.tablet})`),[e,i]=g.useState(()=>t.matches);return g.useEffect(()=>{function o(s){i(s.matches)}return t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[]),{isMobile:!e}}function H(a,r,t){const{isMobile:e}=L(),i=(r||[]).map(m=>({...m,variant:"primary"})),o=(t||[]).map(m=>({...m,variant:"secondary"})),s=[];return e||a==="stacked"?s.push(...i.reverse(),...o.reverse()):s.push(...o,...i),{orderedButtonsProps:s}}function y(a){const{heading:r,headingLevel:t=l.DEFAULT_HEADING_LEVEL,severity:e=l.DEFAULT_SEVERITY,primaryButtonsProps:i,secondaryButtonsProps:o,footerLayout:s=l.DEFAULT_FOOTER_LAYOUT,children:m,testID:x="alert-modal",...h}=a,{isOpen:C}=h,{tokens:P}=u(),{alertModal:v}=P,f=g.useId(),D={error:n.jsx(j,{}),warning:n.jsx(q,{}),success:n.jsx($,{}),info:n.jsx(S,{})},{isMobile:T}=L(),{orderedButtonsProps:_}=H(s,i,o);return n.jsx(R,{...h,"aria-labelledby":f,testID:x,children:C&&n.jsxs(V,{$severity:e,children:[n.jsxs(F,{children:[n.jsx(N,{$severity:e,children:D[e]}),n.jsx(w,{id:f,component:`h${t}`,variant:v.heading.typography.variant,fontFamily:v.heading.typography.fontFamily,children:r}),n.jsx(U,{children:m})]}),n.jsx("div",{children:n.jsx(Y,{$layout:T?"stacked":s,children:_.map(b=>n.jsx(E,{...b},b.text))})})]})})}y.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},severity:{required:!1,tsType:{name:"AlertSeverity"},description:""},primaryButtonsProps:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ButtonBaseProps,
  "variant" | "children" | "testID"
> & {
  text: string;
  variant?: CoreButton.Variant;
  startIcon?: JSX.Element;
  isLoading?: boolean;
  testID?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className"
> & {
  variant: CoreButton.Variant;
  testID: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  variant: CoreButton.Variant;
  testID: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"variant",value:{name:"CoreButton.Variant",required:!0}},{key:"testID",value:{name:"string",required:!0}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"variant" | "children" | "testID"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"children"'},{name:"literal",value:'"testID"'}]}],raw:`Omit<
  ButtonBaseProps,
  "variant" | "children" | "testID"
>`},{name:"signature",type:"object",raw:`{
  text: string;
  variant?: CoreButton.Variant;
  startIcon?: JSX.Element;
  isLoading?: boolean;
  testID?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"variant",value:{name:"CoreButton.Variant",required:!1}},{key:"startIcon",value:{name:"JSX.Element",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"testID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"variant" | "fullWidth"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"fullWidth"'}]}],raw:'Omit<ButtonProps, "variant" | "fullWidth">'}],raw:'Omit<ButtonProps, "variant" | "fullWidth">[]'},description:""},secondaryButtonsProps:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ButtonBaseProps,
  "variant" | "children" | "testID"
> & {
  text: string;
  variant?: CoreButton.Variant;
  startIcon?: JSX.Element;
  isLoading?: boolean;
  testID?: string;
}`,elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className"
> & {
  variant: CoreButton.Variant;
  testID: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"ComponentPropsWithRef",elements:[{name:"literal",value:'"button"'}],raw:'ComponentPropsWithRef<"button">'},{name:"union",raw:'"style" | "className"',elements:[{name:"literal",value:'"style"'},{name:"literal",value:'"className"'}]}],raw:`Omit<
  ComponentPropsWithRef<"button">,
  "style" | "className"
>`},{name:"signature",type:"object",raw:`{
  variant: CoreButton.Variant;
  testID: string;
  isLoading?: boolean;
  fullWidth?: boolean;
}`,signature:{properties:[{key:"variant",value:{name:"CoreButton.Variant",required:!0}},{key:"testID",value:{name:"string",required:!0}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}}]}}]},{name:"union",raw:'"variant" | "children" | "testID"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"children"'},{name:"literal",value:'"testID"'}]}],raw:`Omit<
  ButtonBaseProps,
  "variant" | "children" | "testID"
>`},{name:"signature",type:"object",raw:`{
  text: string;
  variant?: CoreButton.Variant;
  startIcon?: JSX.Element;
  isLoading?: boolean;
  testID?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"variant",value:{name:"CoreButton.Variant",required:!1}},{key:"startIcon",value:{name:"JSX.Element",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"testID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"variant" | "fullWidth"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"fullWidth"'}]}],raw:'Omit<ButtonProps, "variant" | "fullWidth">'}],raw:'Omit<ButtonProps, "variant" | "fullWidth">[]'},description:""},footerLayout:{required:!1,tsType:{name:"CoreAlertModal.FooterLayout"},description:""}}};const{useArgs:J}=__STORYBOOK_MODULE_PREVIEW_API__,X={title:"Components/Surfaces/AlertModal",component:y,render:function(r){const[{isOpen:t},e]=J();function i(){e({isOpen:!0}),I("openModal")()}function o(){e({isOpen:!1}),I("modalClosed")()}return n.jsxs(n.Fragment,{children:[n.jsx(E,{variant:"primary",text:"Open Modal",disabled:t,onClick:i}),n.jsx(y,{...r,isOpen:t,primaryButtonsProps:[{text:"Login",onClick:o}],secondaryButtonsProps:[{text:"Contact us",onClick:o}]})]})},argTypes:{heading:{control:{type:"text"}},headingLevel:{control:{type:"select"},options:M},severity:{control:{type:"select"},options:W},primaryButtonsProps:{control:{disable:!0}},secondaryButtonsProps:{control:{disable:!0}},footerLayout:{control:{type:"select"},options:l.FOOTER_LAYOUTS},children:{control:{disable:!0}}},args:{isOpen:!1,severity:l.DEFAULT_SEVERITY,footerLayout:l.DEFAULT_FOOTER_LAYOUT}},c={args:{heading:"We cannot complete your request just now",children:n.jsx(w,{variant:"bodyM",color:"inherit",children:"Sorry about that. You could try again later or you can access your account through 365 phone banking by contacting us."})}};var B,O,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    heading: "We cannot complete your request just now",
    children: <Typography variant="bodyM" color="inherit">
        Sorry about that. You could try again later or you can access your
        account through 365 phone banking by contacting us.
      </Typography>
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const G=["Basic"],oe=Object.freeze(Object.defineProperty({__proto__:null,Basic:c,__namedExportsOrder:G,default:X},Symbol.toStringTag,{value:"Module"}));export{oe as A,c as B};
