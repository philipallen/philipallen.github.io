import{j as e}from"./jsx-runtime-6eef64cc.js";import{R as h}from"./index-c013ead5.js";import{u as y,g as I}from"./index-4d2d77c0.js";import{T as b}from"./index-08a5cb78.js";import{g as f,a as S}from"./index-aa3a2926.js";import{S as s}from"./icons.utils-b0987da7.js";const{light:{color:T}}=I("boi"),j=Object.keys(s),x=Object.values(s),g=({Icon:c,...t})=>{const{tokens:r}=y(),{themeColor:u}=r;return h.cloneElement(c,{...t,color:t.color||u.core100})},v={title:"Components/DataDisplay/StandardIcons",component:g,argTypes:{Icon:f(s),color:S(T),height:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{Icon:e.jsx(s.AppleIcon,{}),height:48,width:48}},o={argTypes:{Icon:{control:{disable:!0}},color:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return e.jsx("div",{children:x.map((t,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",paddingBottom:"0.5rem"},children:[e.jsx(g,{Icon:e.jsx(t,{}),height:48,width:48}),e.jsx(b,{children:j[r]})]},r))})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    Icon: <StandardIcons.AppleIcon />,
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
            <IconHolder Icon={<IconComponent />} height={48} width={48} />
            <Typography>{iconNames[i]}</Typography>
          </div>)}
      </div>;
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Editable","FullList"],A=Object.freeze(Object.defineProperty({__proto__:null,Editable:n,FullList:o,__namedExportsOrder:w,default:v},Symbol.toStringTag,{value:"Module"}));export{o as F,A as S};
