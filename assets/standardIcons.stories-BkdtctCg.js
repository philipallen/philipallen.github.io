import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{e as h}from"./index-CcKhGcwW.js";import{u as y,g as I}from"./index-BHlkTKmU.js";import{a as b}from"./index-DW7EiedC.js";import{j as T,k as f}from"./index-DlgNzAt3.js";import{S as s}from"./icons.utils-CM9esz5T.js";const{light:{color:j}}=I("boi"),S=Object.keys(s),x=Object.values(s),u=({Icon:a,...t})=>{const{tokens:r}=y(),{themeColor:g}=r;return h.cloneElement(a,{...t,color:t.color||g.core100})},C={title:"Components/Data Display/Standard Icons",component:u,argTypes:{Icon:T(s),color:f(j),height:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{Icon:e.jsx(s.AgricultureIcon,{}),height:48,width:48}},o={argTypes:{Icon:{control:{disable:!0}},color:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto auto auto"},children:x.map((t,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",paddingBottom:"0.5rem"},children:[e.jsx(u,{Icon:e.jsx(t,{}),height:48,width:48}),e.jsx(b,{children:S[r]})]},r))})}};var c,i,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    Icon: <StandardIcons.AgricultureIcon />,
    height: 48,
    width: 48
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    Icon: {
      control: {
        disable: true
      }
    },
    color: {
      control: {
        disable: true
      }
    },
    height: {
      control: {
        disable: true
      }
    },
    width: {
      control: {
        disable: true
      }
    }
  },
  render: function Render() {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "auto auto auto"
    }}>
        {iconComponents.map((IconComponent, i) => <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        paddingBottom: "0.5rem"
      }} key={i}>
            <IconHolder Icon={<IconComponent />} height={48} width={48} />
            <Typography>{iconNames[i]}</Typography>
          </div>)}
      </div>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["Basic","FullList"],D=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,FullList:o,__namedExportsOrder:v,default:C},Symbol.toStringTag,{value:"Module"}));export{n as B,o as F,D as S};
