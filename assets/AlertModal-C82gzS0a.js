import{j as r}from"./jsx-runtime-DQ32znRX.js";import{d as u}from"./index-BrtwDHqb.js";import{a as p,u as m,b as s}from"./index-CzvSJj6w.js";import{E as L,W as x,d as D,e as P}from"./index-BYwLR37K.js";import{C as q,M as W}from"./Modal-BQIbOlDl.js";import{r as b}from"./index-DH5ua8nC.js";import{T as O}from"./Typography-RMDmhaRB.js";import{B as E}from"./Button-Bah0dgkQ.js";import{S as M}from"./ScrollShadowContainer-5PBttQuR.js";const j=p(q)`
  display: grid;
  grid-template-rows: auto 1fr auto;
`,T=p.div`
  ${({$severity:a})=>{const{tokens:n}=m(),{modal:t,alertModal:e}=n;return s`
      display: grid;
      border-top-width: ${e.stroke.top.width};
      border-top-style: ${e.stroke.top.style};
      border-top-color: ${e.stroke.top.color[a]};
      padding-top: ${e.padding.mobile.top};
      padding-left: ${e.padding.mobile.left};
      padding-right: ${e.padding.mobile.right};

      padding-bottom: ${e.header.padding.bottom};
      gap: ${e.header.gap};

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-top: ${e.padding.tablet.top};
        padding-left: ${e.padding.tablet.left};
        padding-right: ${e.padding.tablet.right};
      }
    `}}
`,S=p.div`
  ${({$severity:a})=>{const{tokens:n}=m(),{alertModal:t,modal:e}=n;return s`
      svg {
        display: block;
        width: ${t.icon.width.mobile};
        height: ${t.icon.height.mobile};

        & [data-primary-color] {
          color: ${t.icon.primaryColor[a]};
        }

        & [data-secondary-color] {
          color: ${t.icon.secondaryColor[a]};
        }
      }

      @media (min-width: ${e.breakpoints.tablet}) {
        svg {
          width: ${t.icon.width.tablet};
          height: ${t.icon.height.tablet};
        }
      }
    `}}
`,V=p.div`
  ${()=>{const{tokens:a}=m(),{alertModal:n,modal:t}=a;return s`
      color: ${n.body.color};

      padding-left: ${n.padding.mobile.left};
      padding-right: ${n.padding.mobile.right};

      @media (min-width: ${t.breakpoints.tablet}) {
        padding-left: ${n.padding.tablet.left};
        padding-right: ${n.padding.tablet.right};
      }
    `}}
`,A=p.div`
  ${({$layout:a,$stickFooter:n})=>{const{tokens:t}=m(),{alertModal:e,modal:i}=t;return[s`
        gap: ${e.footer.gap};
      `,a==="inline"&&s`
          display: inline-grid;
          grid-auto-flow: column;
        `,a==="stacked"&&s`
          display: grid;
          grid-auto-flow: row;
        `,s`
        padding-top: ${e.padding.mobile.top};
        padding-left: ${e.padding.mobile.left};
        padding-right: ${e.padding.mobile.right};
        padding-bottom: ${e.padding.mobile.bottom};

        @media (min-width: ${i.breakpoints.tablet}) {
          padding-top: ${e.padding.tablet.top};
          padding-left: ${e.padding.tablet.left};
          padding-right: ${e.padding.tablet.right};
          padding-bottom: ${e.padding.tablet.bottom};
        }
      `,n&&s`
          padding-top: ${e.footer.sticky.padding.top};
          padding-bottom: ${e.footer.sticky.padding.bottom};
          @media (min-width: ${i.breakpoints.tablet}) {
            padding-top: ${e.footer.sticky.padding.top};
            padding-bottom: ${e.footer.sticky.padding.bottom};
          }
        `]}}
`;function v(){const{tokens:a}=m(),{modal:n}=a,t=window.matchMedia(`(min-width: ${n.breakpoints.tablet})`),[e,i]=b.useState(()=>t.matches);return b.useEffect(()=>{function l(o){i(o.matches)}return t.addEventListener("change",l),()=>{t.removeEventListener("change",l)}},[]),{isMobile:!e}}function _(a,n,t){const{isMobile:e}=v(),i=(n||[]).map(d=>({...d,variant:"primary"})),l=(t||[]).map(d=>({...d,variant:"secondary"})),o=[];return e||a==="stacked"?o.push(...i.reverse(),...l.reverse()):o.push(...l,...i),{orderedButtonsProps:o}}function F(a){const{heading:n,headingLevel:t=u.DEFAULT_HEADING_LEVEL,severity:e=u.DEFAULT_SEVERITY,primaryButtonsProps:i,secondaryButtonsProps:l,footerLayout:o=u.DEFAULT_FOOTER_LAYOUT,hasStickyFooter:d=!1,children:y,testID:$="alert-modal",...c}=a,{isOpen:k}=c,{tokens:w}=m(),{alertModal:g}=w,B={error:r.jsx(L,{}),warning:r.jsx(x,{}),success:r.jsx(D,{}),info:r.jsx(P,{})},{isMobile:I}=v(),{orderedButtonsProps:C}=_(o,i,l),h=r.jsx("div",{children:r.jsx(A,{$layout:I?"stacked":o,$stickFooter:d,children:C.map(f=>r.jsx(E,{...f},f.text))})});return r.jsx(W,{"aria-label":n,testID:$,...c,children:k&&r.jsxs(j,{children:[r.jsxs(T,{$severity:e,children:[r.jsx(S,{$severity:e,children:B[e]}),r.jsx(O,{component:`h${t}`,variant:g.heading.typography.variant,fontFamily:g.heading.typography.fontFamily,children:n})]}),r.jsxs(M,{children:[r.jsx(V,{children:y}),d?void 0:h]}),d?h:void 0]})})}F.__docgenInfo={description:"",methods:[],displayName:"AlertModal",props:{heading:{required:!0,tsType:{name:"string"},description:""},headingLevel:{required:!1,tsType:{name:"HeadingLevel"},description:""},severity:{required:!1,tsType:{name:"AlertSeverity"},description:""},primaryButtonsProps:{required:!1,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"variant",value:{name:"CoreButton.Variant",required:!1}},{key:"startIcon",value:{name:"JSX.Element",required:!1}},{key:"isLoading",value:{name:"boolean",required:!1}},{key:"testID",value:{name:"string",required:!1}}]}}]},{name:"union",raw:'"variant" | "fullWidth"',elements:[{name:"literal",value:'"variant"'},{name:"literal",value:'"fullWidth"'}]}],raw:'Omit<ButtonProps, "variant" | "fullWidth">'}],raw:'Omit<ButtonProps, "variant" | "fullWidth">[]'},description:""},footerLayout:{required:!1,tsType:{name:"CoreAlertModal.FooterLayout"},description:""},hasStickyFooter:{required:!1,tsType:{name:"boolean"},description:""}}};export{F as A};
