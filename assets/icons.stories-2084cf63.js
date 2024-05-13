import{j as e}from"./jsx-runtime-6eef64cc.js";import{R as h}from"./index-c013ead5.js";import{u as I,g as y}from"./index-22f9e29b.js";import{A as b,I as s}from"./index-b1e3628a.js";import{T as f}from"./index-c1539e58.js";import{g as T,a as j}from"./index-aa3a2926.js";const{light:{color:x}}=y("boi"),v=Object.keys(s),w=Object.values(s),g=({Icon:c,...t})=>{const{tokens:r}=I(),{themeColor:u}=r;return h.cloneElement(c,{...t,color:t.color||u.core100})},C={title:"Components/DataDisplay/Icons",component:g,argTypes:{Icon:T(s),color:j(x),height:{control:{type:"number"}},width:{control:{type:"number"}}}},o={args:{Icon:e.jsx(b,{}),height:48,width:48}},n={argTypes:{Icon:{control:{disable:!0}},color:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return e.jsx("div",{children:w.map((t,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",paddingBottom:"0.5rem"},children:[e.jsx(g,{Icon:e.jsx(t,{}),height:48,width:48}),e.jsx(f,{children:v[r]})]},r))})}};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    Icon: <Icons.AppleIcon />,
    height: 48,
    width: 48
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    return <div>
        {iconComponents.map((IconComponent, i) => <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        paddingBottom: "0.5rem"
      }} key={i}>
            <IconHolder Icon={<IconComponent />} height={48} width={48}></IconHolder>
            <Typography>{iconNames[i]}</Typography>
          </div>)}
      </div>;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["Editable","FullList"],D=Object.freeze(Object.defineProperty({__proto__:null,Editable:o,FullList:n,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{n as F,D as I};
