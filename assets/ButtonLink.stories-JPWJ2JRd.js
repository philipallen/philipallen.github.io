import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{L as b,B as V}from"./index-EybPYVoN.js";import{L as F,D as O,i as y}from"./index-BVyJnF54.js";import{a as $}from"./index-Doj3HQ5r.js";import{u,i as a,a as g,p as M}from"./index-BpMil6Tx.js";import{S as W}from"./Spinner-BBq1qDFt.js";import{$ as q}from"./Button-BTZi05NT.js";import{T as G}from"./Typography-G_YOndja.js";const H=g(q)`
  ${()=>{const{tokens:t}=u(),{button:n,link:o}=t;return[a`
        position: relative;
        display: inline-flex;
        align-items: center;
        width: auto;
        min-width: 0;
        height: auto;
        cursor: pointer;

        &[data-disabled]:not([data-pending]),
        &[aria-disabled]:not([data-pending]) {
          cursor: not-allowed;
          opacity: ${n.opacity.disabled};
        }

        &[data-focus-visible] {
          outline-width: ${o.focusRing.width};
          outline-style: ${o.focusRing.style};
          outline-color: ${o.focusRing.color};
          outline-offset: ${o.focusRing.offset};
          border-radius: ${o.focusRing.radius};
        }

        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        padding: 0;
        font-size: inherit;
        font-family: inherit;

        &[data-hovered],
        &[data-pressed],
        &[data-focus-visible] {
          background: transparent !important;
          border-color: transparent !important;
          box-shadow: none !important;
        }

        &[data-disabled]:not([data-pending]) [data-button-link-container],
        &[aria-disabled]:not([data-pending]) [data-button-link-container] {
          color: ${o.color.base};
          opacity: ${n.opacity.disabled};
        }

        &[data-pending] {
          cursor: not-allowed;
        }
      `]}}
`,J=g.span`
  ${()=>{const{tokens:t}=u(),{link:n}=t;return[a`
        display: inline-flex;
        align-items: center;
        gap: ${n.withIcon.gap};
        color: ${n.color.base};

        [data-hovered] & {
          color: ${n.color.hover};
        }

        [data-pressed] & {
          color: ${n.color.active};
        }
      `]}}
`,K=g(G)`
  ${({$isUnderlined:t,$isDashed:n})=>{const{tokens:o}=u(),{link:e}=o;return[a`
        color: inherit;
        background: transparent;
        text-decoration-thickness: ${e.decoration.thickness.base};
        text-underline-offset: ${e.decoration.offset};

        [data-hovered] & {
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.hover};
        }

        [data-pressed] & {
          background: ${e.backgroundColor.active};
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-thickness: ${e.decoration.thickness.active};
        }

        [data-focus-visible] & {
          text-decoration-line: ${e.decoration.line.focus};
        }

        [data-pending] & {
          visibility: hidden;
        }
      `,t&&a`
          text-decoration-line: ${e.decoration.line.base};
          text-decoration-style: ${e.decoration.style.solid};
        `,t&&n&&a`
          text-decoration-style: ${e.decoration.style.dashed};
        `]}}
`,x=g.span`
  ${({$variant:t,$isCentered:n})=>{const{tokens:o}=u(),{link:e}=o,h=t==="bodyL"?"bodyM":t,s=M(e.withIcon.size[h]);return a`
      display: inline-flex;
      flex-shrink: 0;
      color: inherit;
      align-items: ${n?"center":"flex-start"};

      svg {
        display: block;
        width: ${s};
        height: ${s};
      }

      [data-pending] & {
        visibility: hidden;
      }
    `}}
`,Q=g.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`;function X(t){const{isUnderlined:n=!0,isDashed:o=!1,variant:e=b.DEFAULT_VARIANT,startIcon:h,endIcon:s,children:E,testID:m="button-link",isPending:f,...z}=t,{tokens:C}=u(),{link:P}=C;return r.jsx(H,{...z,isPending:f,"data-testid":m,children:r.jsxs(J,{"data-button-link-container":!0,children:[h&&r.jsx(x,{$isCentered:!0,$variant:e,"data-testid":`${m}-start-icon-wrapper`,children:h}),r.jsx(K,{component:"span",color:"inherit",variant:e,fontFamily:P.typography.fontFamily,$isUnderlined:n,$isDashed:o,children:E}),s&&r.jsx(x,{$isCentered:!0,$variant:e,"data-testid":`${m}-end-icon-wrapper`,children:s}),f&&r.jsx(Q,{children:r.jsx(W,{"aria-label":"Loading...",variant:V.SPINNER_VARIANTS.secondary,testID:`${m}-spinner`})})]})})}const Y={title:"Components/Inputs/ButtonLink",component:X,argTypes:{isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},isUnderlined:{control:{type:"boolean"}},isDashed:{control:{type:"boolean"}},variant:{control:{type:"select"},options:b.VARIANTS},startIcon:{...$(y),if:{arg:"endIcon",truthy:!1}},endIcon:{...$(y),if:{arg:"startIcon",truthy:!1}}},args:{isUnderlined:!0,variant:b.DEFAULT_VARIANT}},i={args:{children:"Text button link label"}},d={argTypes:{isDashed:{control:{disable:!0}}},args:{isDashed:!0,children:"Download report"}},c={argTypes:{isUnderlined:{control:{disable:!0}}},args:{isUnderlined:!1,children:"Download report"}},l={args:{children:"Download report",startIcon:r.jsx(O,{})}},p={args:{children:"Log in",endIcon:r.jsx(F,{})}};var k,I,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Text button link label"
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var v,w,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    isDashed: {
      control: {
        disable: true
      }
    }
  },
  args: {
    isDashed: true,
    children: "Download report"
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,L,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    isUnderlined: {
      control: {
        disable: true
      }
    }
  },
  args: {
    isUnderlined: false,
    children: "Download report"
  }
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,A,R;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Download report",
    startIcon: <Icons.DownloadIcon />
  }
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var U,B,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Log in",
    endIcon: <Icons.LoginIcon />
  }
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const Z=["Basic","Dashed","NoUnderline","StartIcon","EndIcon"],de=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,Dashed:d,EndIcon:p,NoUnderline:c,StartIcon:l,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{de as B,d as D,p as E,c as N,l as S,i as a};
