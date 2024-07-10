import{j as r}from"./jsx-runtime-DQ32znRX.js";import{A as Z,d as oo}from"./index-ef8Z-xiF.js";import{g as to}from"./index-B6MQ30h7.js";import{B as Q}from"./index-Cee7vv5h.js";import{r as U}from"./index-DH5ua8nC.js";import{a as p,u as L,p as w,b as i}from"./index-CWEVnOcG.js";import{T as ro}from"./Typography-BayW6epx.js";import{S as eo}from"./Spinner-DZ-iJDHg.js";const ao=p.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,no=p.span`
  ${({$isLoading:t})=>{const{tokens:s}=L(),{button:a}=s,o=w(a.topLayer.icon.width),e=w(a.topLayer.icon.width);return i`
      display: flex;
      flex-shrink: 0;
      visibility: ${t?"hidden":"visible"};

      svg {
        width: ${o};
        height: ${e};
      }
    `}}
`,so=p.div`
  ${({$isLoading:t})=>i`
      visibility: ${t?"hidden":"visible"};
      overflow: hidden;
    `}
`,io=p.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,n=p.button`
  ${({$variant:t,$isLoading:s,$fullWidth:a})=>{const{tokens:o}=L(),{button:e}=o;return[i`
        all: unset;
        position: relative;
        display: grid;
        align-items: start;
        height: ${e.height};
        width: ${a?"100%":"auto"};
        min-width: ${e.minWidth};
        cursor: pointer;

        &:disabled {
          cursor: not-allowed;
          opacity: ${e.opacity.disabled};
        }

        &[aria-disabled="true"] {
          cursor: not-allowed;
        }
      `,!s&&i`
          &:not(:disabled):focus-visible {
            border-radius: ${e.topLayer.stroke.radius};
            outline-width: ${e.focusRing.width};
            outline-style: ${e.focusRing.style};
            outline-color: ${e.focusRing.color[t]};
            outline-offset: ${e.focusRing.offset};
          }
        `]}}
`,co=p.div`
  ${({$variant:t,$isLoading:s})=>{const{tokens:a}=L(),{button:o}=a;return[i`
        position: relative;
        overflow: hidden;
        color: ${o.topLayer.color[t].base};
        background: ${o.topLayer.backgroundColor[t].base};
        height: ${o.topLayer.height[t]};
        padding-left: ${o.topLayer.padding[t].left};
        padding-right: ${o.topLayer.padding[t].right};
        border-width: ${o.topLayer.stroke.width};
        border-style: ${o.topLayer.stroke.style};
        border-color: ${o.topLayer.stroke.color[t].base};
        border-radius: ${o.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${o.topLayer.animationDuration}ms;

        ${n}:not(:disabled):hover && {
          color: ${o.topLayer.color[t].hover};
          background: ${o.topLayer.backgroundColor[t].hover};
          transform: translateY(${o.topLayer.translateY[t].hover});
        }

        ${n}:not(:disabled):active && {
          color: ${o.topLayer.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});
        }
      `,t==="secondary"&&i`
          ${n}:not(:disabled):hover && {
            border-color: ${o.topLayer.stroke.color[t].hover};
          }

          ${n}:not(:disabled):active && {
            border-color: ${o.topLayer.stroke.color[t].active};
          }
        `,s&&i`
          color: ${o.topLayer.color[t].active};
          border-color: ${o.topLayer.stroke.color[t].active};
          background: ${o.topLayer.backgroundColor[t].active};
          transform: translateY(${o.topLayer.translateY[t].active});

          ${n}:not(:disabled):hover && {
            color: ${o.topLayer.color[t].active};
            border-color: ${o.topLayer.stroke.color[t].active};
            background: ${o.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${o.topLayer.translateY[t].active}
            );
          }

          ${n}:not(:disabled):active && {
            color: ${o.topLayer.color[t].active};
            border-color: ${o.topLayer.stroke.color[t].active};
            background: ${o.topLayer.backgroundColor[t].active};
            transform: translateY(
              ${o.topLayer.translateY[t].active}
            );
          }

          ${n}:not(:disabled):focus-visible && {
            border-radius: ${o.topLayer.stroke.radius};
            outline-width: ${o.focusRing.width};
            outline-style: ${o.focusRing.style};
            outline-color: ${o.focusRing.color[t]};
            outline-offset: ${o.focusRing.offset};
          }
        `]}}
`,lo=p.div`
  ${({$variant:t,$isLoading:s})=>{const{tokens:a}=L(),{button:o}=a,{shadow:e}=o.bottomLayer;return[i`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${o.bottomLayer.height};
        border-radius: ${o.bottomLayer.radius};
        background: ${o.bottomLayer.backgroundColor[t].base};
        box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

        ${n}:not(:disabled):hover && {
          background: ${o.bottomLayer.backgroundColor[t].hover};
        }

        ${n}:not(:disabled):active && {
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;
        }
      `,s&&i`
          background: ${o.bottomLayer.backgroundColor[t].active};
          box-shadow: none;

          ${n}:not(:disabled):hover && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }

          ${n}:not(:disabled):active && {
            background: ${o.bottomLayer.backgroundColor[t].active};
          }
        `]}}
`,k=U.forwardRef((t,s)=>{const{variant:a,children:o,testID:e,type:c,isLoading:l,fullWidth:x,...$}=t;return r.jsxs(n,{...$,ref:s,$variant:a,$isLoading:l,$fullWidth:x,"data-testid":e,type:c||"button",children:[r.jsx(lo,{$variant:a,$isLoading:l}),r.jsx(co,{$variant:a,$isLoading:l,children:o})]})});k.displayName="ButtonBase";k.__docgenInfo={description:"",methods:[],displayName:"ButtonBase"};const d=U.forwardRef((t,s)=>{const{text:a,variant:o="primary",startIcon:e,isLoading:c,testID:l="button",...x}=t,{tokens:$}=L(),{button:S}=$,X={"aria-disabled":c,"aria-label":c?"Loading":void 0};return r.jsx(k,{...x,...X,ref:s,variant:o,isLoading:c,testID:l,children:r.jsxs(ao,{children:[e&&r.jsx(no,{$isLoading:c,children:e}),r.jsx(so,{$isLoading:c,children:r.jsx(ro,{variant:S.topLayer.text.typography.variant,fontFamily:S.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",testID:`${l}-text`,children:a})}),c&&r.jsx(io,{children:r.jsx(eo,{variant:Q.SPINNER_VARIANTS[o],testID:`${l}-spinner`})})]})})});d.displayName="Button";d.__docgenInfo={description:"",methods:[],displayName:"Button"};const po={title:"Components/Inputs/Button",component:d,argTypes:{text:{control:{type:"text"}},variant:{control:{type:"select"},options:Q.VARIANTS},disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:to(oo)},args:{text:"Button text"}},b={},u={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",text:"Primary button"}},y={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",text:"Secondary button"}},g={argTypes:{variant:{control:{disable:!0}}},args:{...u.args,disabled:!0}},m={argTypes:{variant:{control:{disable:!0}}},args:{...y.args,disabled:!0}},h={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(d,{variant:"primary",text:"Primary button",isLoading:!0}),r.jsx(d,{variant:"secondary",text:"Secondary button",isLoading:!0})]})},v={argTypes:{variant:{control:{disable:!0}}},render:()=>r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx(d,{variant:"primary",text:"Primary button",fullWidth:!0}),r.jsx(d,{variant:"secondary",text:"Secondary button",fullWidth:!0})]})},f={args:{startIcon:r.jsx(Z,{})},render:({startIcon:t})=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(d,{variant:"primary",text:"Primary button",startIcon:t}),r.jsx(d,{variant:"secondary",text:"Secondary button",startIcon:t})]})};var B,I,j;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(j=(I=b.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var T,P,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    text: "Primary button"
  }
}`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var C,R,_;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    text: "Secondary button"
  }
}`,...(_=(R=y.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var Y,D,A;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var N,E,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    ...Secondary.args,
    disabled: true
  }
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var z,F,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" isLoading />
      <Button variant="secondary" text="Secondary button" isLoading />
    </div>
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var M,q,G;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" fullWidth />
      <Button variant="secondary" text="Secondary button" fullWidth />
    </div>
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button variant="primary" text="Primary button" startIcon={startIcon} />
      <Button variant="secondary" text="Secondary button" startIcon={startIcon} />
    </div>
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const uo=["Basic","Primary","Secondary","PrimaryDisabled","SecondaryDisabled","Loading","Stacked","WithIcon"],xo=Object.freeze(Object.defineProperty({__proto__:null,Basic:b,Loading:h,Primary:u,PrimaryDisabled:g,Secondary:y,SecondaryDisabled:m,Stacked:v,WithIcon:f,__namedExportsOrder:uo,default:po},Symbol.toStringTag,{value:"Module"}));export{xo as B,h as L,g as P,y as S,f as W,b as a,m as b,v as c};
