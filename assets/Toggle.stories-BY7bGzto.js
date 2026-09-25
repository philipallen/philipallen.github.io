import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{fn as I}from"./index-DeN4tkzB.js";import{m as D}from"./index-EybPYVoN.js";import{r as O}from"./index-BVaTkfsr.js";import{a as n,u as i,p as c,i as g}from"./index-BpMil6Tx.js";import{$ as _,a as R}from"./Switch-DQDVrdar.js";import{T as b}from"./Typography-G_YOndja.js";const B=n(_)`
  display: contents;
`,o=n(R)`
  display: inline-grid;
`,F=n.div`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=c(e.size[t].width),d=c(e.size[t].height);return g`
      cursor: pointer;
      width: ${s};

      outline-style: solid;
      border-radius: ${d};
      outline-offset: 0;
      outline-width: 0;

      ${o}[data-disabled] && {
        cursor: not-allowed;
      }

      ${o}[data-focus-visible] && {
        outline-color: ${e.focusRing.color};
        outline-width: ${e.focusRing.width};
        outline-offset: ${e.focusRing.offset};
      }
    `}}
`,W=n.div`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=c(e.size[t].width);return g`
      width: ${s};
      background-color: transparent;
    `}}
`,m="0.4s",E=n.div`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=c(e.size[t].width),d=c(e.size[t].height);return g`
      position: relative;
      width: ${s};
      height: ${d};
      display: flex;
      align-items: center;
      border-radius: ${d};

      ${o}[data-hovered]:not([data-selected]) && {
        background-color: ${e.backgroundColor.unchecked.hover};
      }

      ${o}[data-hovered][data-selected] && {
        background-color: ${e.backgroundColor.checked.hover};
      }

      ${o}:not([data-selected]) && {
        background-color: ${e.backgroundColor.unchecked.base};
      }

      ${o}[data-selected] && {
        background-color: ${e.backgroundColor.checked.base};
      }

      ${o}[data-disabled][data-selected] && {
        background-color: ${e.backgroundColor.checked.disabled};
      }

      ${o}[data-disabled]:not([data-selected]) && {
        background-color: ${e.backgroundColor.unchecked.disabled};
      }
    `}}
`,N=n.div`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=c(e.size[t].width);return[g`
        position: relative;
        width: ${e.thumb.size[t]};
        height: ${e.thumb.size[t]};
        display: flex;
        align-items: center;
        background-color: ${e.thumb.backgroundColor.base};
        border-radius: ${e.thumb.size[t]};
        margin: ${e.thumb.padding};
        transition: transform ${m};

        ${o}[data-selected] && {
          transform: translateX(
            calc(
              ${s} - ${e.thumb.padding} - ${e.thumb.padding} -
                100%
            )
          );
        }

        ${o}:not([data-selected]) && {
          transform: translateX(0px);
        }
      `]}}
`,j=t=>{const{tokens:a}=i(),{toggle:e}=a;return`${parseInt(e.thumb.size[t])+parseInt(e.thumb.padding)*3}px`},A=n(b)`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=j(t);return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        text-align: right;
        padding-right: ${s};
        transition: opacity ${m};

        ${o}[data-disabled] && {
          color: ${e.text.color.disabled};
        }

        ${o}[data-selected] && {
          opacity: 1;
        }

        ${o}:not([data-selected]) && {
          opacity: 0;
        }
      `]}}
`,L=n(b)`
  ${({$size:t})=>{const{tokens:a}=i(),{toggle:e}=a,s=j(t);return[g`
        position: absolute;
        width: 100%;
        color: ${e.text.color.base};
        padding-left: ${s};
        transition: opacity ${m};

        ${o}[data-disabled] && {
          color: ${e.text.color.disabled};
        }

        ${o}[data-selected] && {
          opacity: 0;
        }

        ${o}:not([data-selected]) && {
          opacity: 1;
        }
      `]}}
`,P=n.div`
  position: absolute;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`,C=O.forwardRef((t,a)=>{const{size:e="default",testID:s="toggle",...d}=t,{tokens:S}=i(),{toggle:h}=S;return r.jsx(B,{...d,children:r.jsx(o,{ref:a,"data-testid":s,children:r.jsx(F,{$size:e,"aria-hidden":!0,children:r.jsx(W,{$size:e,children:r.jsxs(E,{$size:e,children:[r.jsxs(P,{children:[r.jsx(A,{component:"span",variant:h.text.size[e].typography.variant,fontFamily:h.text.size[e].typography.fontFamily,$size:e,children:"On"}),r.jsx(L,{component:"span",variant:h.text.size[e].typography.variant,fontFamily:h.text.size[e].typography.fontFamily,$size:e,children:"Off"})]}),r.jsx(N,{$size:e})]})})})})})});C.displayName="Toggle";const V={title:"Components/Inputs/Toggle",component:C,argTypes:{isSelected:{control:"boolean"},isDisabled:{control:"boolean"},size:{control:{type:"select"},options:D.SIZES}},args:{onChange:I()}},l={args:{"aria-label":"Toggle label"}},p={decorators:[t=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center"},children:[r.jsx(b,{id:"external-label",children:"Toggle label"}),r.jsx("div",{children:r.jsx(t,{})})]})],args:{"aria-labelledby":"external-label"}},u={args:{...l.args,isDisabled:!0}};var $,f,x;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    "aria-label": "Toggle label"
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,k,T;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center"
  }}>
        <Typography id="external-label">Toggle label</Typography>
        <div>
          <Story />
        </div>
      </div>],
  args: {
    "aria-labelledby": "external-label"
  }
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var v,w,z;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    isDisabled: true
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const M=["Basic","WithLabel","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,Disabled:u,WithLabel:p,__namedExportsOrder:M,default:V},Symbol.toStringTag,{value:"Module"}));export{l as B,u as D,K as T,p as W};
