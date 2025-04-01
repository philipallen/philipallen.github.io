import{j as t}from"./jsx-runtime-BkBIjjFT.js";import{A as H,i as J}from"./index-qhhwF6MA.js";import{g as K}from"./index-DG677SqA.js";import{B as v}from"./index-VIbBARS4.js";import{r as Q}from"./index-KmaxkdDD.js";import{a as i,u as m,b as g,p as k}from"./index-DT8u_GqS.js";import{$ as X}from"./Button-lwQFUGeW.js";import{T as Z}from"./Typography-Ck-NcY7i.js";import{S as rr}from"./Spinner-oUHXJT3k.js";const n=i(X)`
  ${({$variant:o,$fullWidth:a})=>{const{tokens:r}=m(),{button:e}=r;return g`
      all: unset;
      position: relative;
      display: grid;
      align-items: start;
      height: ${e.height};
      width: ${a?"100%":"auto"};
      min-width: ${e.minWidth};
      cursor: pointer;

      &[data-disabled] {
        cursor: not-allowed;
        opacity: ${e.opacity.disabled};
      }

      &[aria-disabled] {
        cursor: not-allowed;
      }

      &[data-focus-visible]:not([data-pending]) {
        border-radius: ${e.topLayer.stroke.radius};
        outline-width: ${e.focusRing.width};
        outline-style: ${e.focusRing.style};
        outline-color: ${e.focusRing.color[o]};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,or=i.div`
  ${({$variant:o})=>{const{tokens:a}=m(),{button:r}=a;return[g`
        position: relative;
        overflow: hidden;
        color: ${r.topLayer.color[o].base};
        background: ${r.topLayer.backgroundColor[o].base};
        height: ${r.topLayer.height[o]};
        padding-left: ${r.topLayer.padding[o].left};
        padding-right: ${r.topLayer.padding[o].right};
        border-width: ${r.topLayer.stroke.width};
        border-style: ${r.topLayer.stroke.style};
        border-color: ${r.topLayer.stroke.color[o].base};
        border-radius: ${r.topLayer.stroke.radius};
        user-select: none;

        transform: translateY(0px);
        transition: transform ${r.topLayer.animationDuration}ms;

        ${n}[data-hovered] && {
          color: ${r.topLayer.color[o].hover};
          background: ${r.topLayer.backgroundColor[o].hover};
          transform: translateY(${r.topLayer.translateY[o].hover});
        }

        ${n}[data-pressed] && {
          color: ${r.topLayer.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-hovered] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-pressed] && {
          color: ${r.topLayer.color[o].active};
          border-color: ${r.topLayer.stroke.color[o].active};
          background: ${r.topLayer.backgroundColor[o].active};
          transform: translateY(${r.topLayer.translateY[o].active});
        }

        ${n}[data-pending][data-focus-visible] && {
          border-radius: ${r.topLayer.stroke.radius};
          outline-width: ${r.focusRing.width};
          outline-style: ${r.focusRing.style};
          outline-color: ${r.focusRing.color[o]};
          outline-offset: ${r.focusRing.offset};
        }
      `,o==="secondary"&&g`
          ${n}[data-hovered] && {
            border-color: ${r.topLayer.stroke.color[o].hover};
          }

          ${n}[data-pressed] && {
            border-color: ${r.topLayer.stroke.color[o].active};
          }
        `]}}
`,tr=i.div`
  ${({$variant:o})=>{const{tokens:a}=m(),{button:r}=a,{shadow:e}=r.bottomLayer;return g`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${r.bottomLayer.height};
      border-radius: ${r.bottomLayer.radius};
      background: ${r.bottomLayer.backgroundColor[o].base};
      box-shadow: 0px ${e.blur} ${e.offsetY} ${e.color};

      ${n}[data-hovered] && {
        background: ${r.bottomLayer.backgroundColor[o].hover};
      }

      ${n}[data-pressed] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
        box-shadow: none;
      }

      ${n}[data-pending] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
        box-shadow: none;
      }

      ${n}[data-pending][data-hovered] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
      }

      ${n}[data-pending][data-pressed] && {
        background: ${r.bottomLayer.backgroundColor[o].active};
      }
    `}}
`,er=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  overflow: hidden;
`,nr=i.span`
  ${()=>{const{tokens:o}=m(),{button:a}=o,r=k(a.topLayer.icon.width),e=k(a.topLayer.icon.width);return g`
      display: flex;
      flex-shrink: 0;

      ${n}[data-pending] && {
        visibility: hidden;
      }

      svg {
        width: ${r};
        height: ${e};
      }
    `}}
`,ar=i.div`
  overflow: hidden;

  ${n}[data-pending] && {
    visibility: hidden;
  }
`,sr=i.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`,s=Q.forwardRef((o,a)=>{const{variant:r=v.DEFAULT_VARIANT,startIcon:e,fullWidth:M,children:h,testID:f="button",...$}=o,{isPending:U}=$,{tokens:q}=m(),{button:L}=q;return t.jsx(n,{...$,ref:a,$variant:r,$fullWidth:M,"data-testid":f,children:G=>t.jsxs(t.Fragment,{children:[t.jsx(tr,{$variant:r}),t.jsx(or,{$variant:r,children:t.jsxs(er,{children:[e&&t.jsx(nr,{children:e}),t.jsx(ar,{children:t.jsx(Z,{variant:L.topLayer.text.typography.variant,fontFamily:L.topLayer.text.typography.fontFamily,noWrap:!0,color:"inherit",component:"div",testID:`${f}-text`,children:typeof h=="function"?h(G):h})}),U&&t.jsx(sr,{children:t.jsx(rr,{variant:v.SPINNER_VARIANTS[r],testID:`${f}-spinner`})})]})})]})})}),ir={title:"Components/Inputs/ButtonV2",component:s,argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"},options:v.VARIANTS},isDisabled:{control:{type:"boolean"}},isPending:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},startIcon:K(J)},args:{children:"Button text"}},d={},c={argTypes:{variant:{control:{disable:!0}}},args:{variant:"primary",children:"Primary button"}},l={argTypes:{variant:{control:{disable:!0}}},args:{variant:"secondary",children:"Secondary button"}},p={argTypes:{variant:{control:{disable:!0}},isDisabled:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(s,{variant:"primary",isDisabled:!0,children:"Primary button"}),t.jsx(s,{variant:"secondary",isDisabled:!0,children:"Secondary button"})]})},u={argTypes:{isPending:{control:{disable:!0}},children:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(s,{variant:"primary",isPending:!0,children:"Primary button"}),t.jsx(s,{variant:"secondary",isPending:!0,children:"Secondary button"})]})},y={argTypes:{variant:{control:{disable:!0}}},render:()=>t.jsxs("div",{style:{display:"grid",gap:10},children:[t.jsx(s,{variant:"primary",fullWidth:!0,children:"Primary button"}),t.jsx(s,{variant:"secondary",fullWidth:!0,children:"Secondary button"})]})},b={args:{startIcon:t.jsx(H,{})},render:({startIcon:o})=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(s,{variant:"primary",startIcon:o,children:"Primary button"}),t.jsx(s,{variant:"secondary",startIcon:o,children:"Secondary button"})]})};var x,S,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,w,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "primary",
    children: "Primary button"
  }
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var I,T,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  args: {
    variant: "secondary",
    children: "Secondary button"
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,W,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    },
    isDisabled: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" isDisabled>
        Primary button
      </ButtonV2>
      <ButtonV2 variant="secondary" isDisabled>
        Secondary button
      </ButtonV2>
    </div>
}`,...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var R,Y,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    isPending: {
      control: {
        disable: true
      }
    },
    children: {
      control: {
        disable: true
      }
    }
  },
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" isPending>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" isPending>
        Secondary button
      </ButtonV2>
    </div>
}`,...(A=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var _,E,N;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <ButtonV2 variant="primary" fullWidth>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" fullWidth>
        Secondary button
      </ButtonV2>
    </div>
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var F,O,z;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    startIcon: <Icons.ArrowLeftIcon />
  },
  render: ({
    startIcon
  }) => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <ButtonV2 variant="primary" startIcon={startIcon}>
        Primary button
      </ButtonV2>

      <ButtonV2 variant="secondary" startIcon={startIcon}>
        Secondary button
      </ButtonV2>
    </div>
}`,...(z=(O=b.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const dr=["Basic","Primary","Secondary","Disabled","Pending","Stacked","WithIcon"],fr=Object.freeze(Object.defineProperty({__proto__:null,Basic:d,Disabled:p,Pending:u,Primary:c,Secondary:l,Stacked:y,WithIcon:b,__namedExportsOrder:dr,default:ir},Symbol.toStringTag,{value:"Module"}));export{fr as B,p as D,u as P,l as S,b as W,d as a,y as b};
