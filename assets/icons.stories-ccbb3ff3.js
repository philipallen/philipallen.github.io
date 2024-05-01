import{j as e,u as h,g as I}from"./index-74fe31d7.js";import{R as y}from"./index-c013ead5.js";import{A as b,I as s}from"./index-40416c04.js";import{T as f}from"./index-d483cfe4.js";import{g as T,a as j}from"./index-219738ab.js";const{light:{color:x}}=I("boi"),v=Object.keys(s),w=Object.values(s),g=({Icon:c,...t})=>{const{tokens:r}=h(),{themeColor:u}=r;return y.cloneElement(c,{...t,color:t.color||u.core100})},S={title:"DataDisplay/Icons",component:g,argTypes:{Icon:T(s),color:j(x),height:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{Icon:e.jsx(b,{}),height:48,width:48}},o={argTypes:{Icon:{control:{disable:!0}},color:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return e.jsx("div",{children:w.map((t,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",paddingBottom:"0.5rem"},children:[e.jsx(g,{Icon:e.jsx(t,{}),height:48,width:48}),e.jsx(f,{children:v[r]})]},r))})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    Icon: <Icons.AppleIcon />,
    height: 48,
    width: 48
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _=["Editable","FullList"],R=Object.freeze(Object.defineProperty({__proto__:null,Editable:n,FullList:o,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{o as F,R as I};
