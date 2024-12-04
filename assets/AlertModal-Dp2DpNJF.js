import{j as r}from"./jsx-runtime-DQ32znRX.js";import{r as c}from"./index-DH5ua8nC.js";import{e as p}from"./index-DKJt7waT.js";import{a as u,u as d,b as l}from"./index-CtBUti8q.js";import{E as C,W as D,S as L,d as x}from"./index-Bkh50RYL.js";import{C as P,M as W}from"./Modal-Bl7JyHHb.js";import{T as q}from"./Typography-v4_88_aK.js";import{B as O}from"./Button-ClpVcpa0.js";const E=u(P)`
  ${({$severity:n})=>{const{tokens:a}=d(),{modal:t,alertModal:e}=a;return l`
      display: grid;
      gap: ${e.gap};
      border-top-width: ${e.stroke.top.width};
      border-top-style: ${e.stroke.top.style};
      border-top-color: ${e.stroke.top.color[n]};
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
`,M=u.div`
  display: grid;
  gap: 8px;
`,j=u.div`
  ${({$severity:n})=>{const{tokens:a}=d(),{alertModal:t,modal:e}=a;return l`
      svg {
        display: block;
        width: ${t.icon.width.mobile};
        height: ${t.icon.height.mobile};

        & [data-primary-color] {
          color: ${t.icon.primaryColor[n]};
        }

        & [data-secondary-color] {
          color: ${t.icon.secondaryColor[n]};
        }
      }

      @media (min-width: ${e.breakpoints.tablet}) {
        svg {
          width: ${t.icon.width.tablet};
          height: ${t.icon.height.tablet};
        }
      }
    `}}
`,T=u.div`
  ${()=>{const{tokens:n}=d(),{alertModal:a}=n;return l`
      color: ${a.body.color};
    `}}
`,V=u.div`
  ${({$layout:n})=>{const{tokens:a}=d(),{alertModal:t}=a;return[l`
        gap: ${t.footer.gap};
      `,n==="inline"&&l`
          display: inline-grid;
          grid-auto-flow: column;
        `,n==="stacked"&&l`
          display: grid;
          grid-auto-flow: row;
        `]}}
`;function f(){const{tokens:n}=d(),{modal:a}=n,t=window.matchMedia(`(min-width: ${a.breakpoints.tablet})`),[e,s]=c.useState(()=>t.matches);return c.useEffect(()=>{function i(o){s(o.matches)}return t.addEventListener("change",i),()=>{t.removeEventListener("change",i)}},[]),{isMobile:!e}}function A(n,a,t){const{isMobile:e}=f(),s=(a||[]).map(m=>({...m,variant:"primary"})),i=(t||[]).map(m=>({...m,variant:"secondary"})),o=[];return e||n==="stacked"?o.push(...s.reverse(),...i.reverse()):o.push(...i,...s),{orderedButtonsProps:o}}function S(n){const{heading:a,headingLevel:t=p.DEFAULT_HEADING_LEVEL,severity:e=p.DEFAULT_SEVERITY,primaryButtonsProps:s,secondaryButtonsProps:i,footerLayout:o=p.DEFAULT_FOOTER_LAYOUT,children:m,testID:b="alert-modal",...g}=n,{isOpen:w}=g,{tokens:I}=d(),{alertModal:v}=I,h=c.useId(),B={error:r.jsx(C,{}),warning:r.jsx(D,{}),success:r.jsx(L,{}),info:r.jsx(x,{})},{isMobile:k}=f(),{orderedButtonsProps:$}=A(o,s,i);return r.jsx(W,{...g,"aria-labelledby":h,testID:b,children:w&&r.jsxs(E,{$severity:e,children:[r.jsxs(M,{children:[r.jsx(j,{$severity:e,children:B[e]}),r.jsx(q,{id:h,component:`h${t}`,variant:v.heading.typography.variant,fontFamily:v.heading.typography.fontFamily,children:a}),r.jsx(T,{children:m})]}),r.jsx("div",{children:r.jsx(V,{$layout:k?"stacked":o,children:$.map(y=>r.jsx(O,{...y},y.text))})})]})})}S.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},severity:{required:!1,tsType:{name:"AlertSeverity"},description:""},primaryButtonsProps:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"variant",value:{name:"CoreButton.Variant",required:!1}},{key:"startIcon",value:{name:"JSX.Element",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"testID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"variant" | "fullWidth"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"fullWidth"'}]}],raw:'Omit<ButtonProps, "variant" | "fullWidth">'}],raw:'Omit<ButtonProps, "variant" | "fullWidth">[]'},description:""},footerLayout:{required:!1,tsType:{name:"CoreAlertModal.FooterLayout"},description:""}}};export{S as A};
