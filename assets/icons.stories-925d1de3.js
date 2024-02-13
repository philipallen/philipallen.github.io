import{j as e,u,g as y}from"./index-771fcc08.js";import{R as I}from"./index-c013ead5.js";import{A as b,I as s}from"./index-23ffefe9.js";import{T as f}from"./index-8cc54a97.js";import{g as T,a as j}from"./index-1225df13.js";const{light:{color:x}}=y("boi"),v=Object.keys(s),w=Object.values(s),g=({Icon:c,...t})=>{const{tokens:r}=u(),{themeColor:h}=r;return I.cloneElement(c,{...t,color:t.color||h.core100})},R={title:"DataDisplay/Icons",component:g,argTypes:{Icon:T(s),color:j(x),height:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{Icon:e.jsx(b,{}),height:48,width:48}},o={argTypes:{Icon:{control:{disable:!0}},color:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return e.jsx("div",{children:w.map((t,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",paddingBottom:"0.5rem"},children:[e.jsx(g,{Icon:e.jsx(t,{style:{paddingRight:"1rem"}}),height:48,width:48}),e.jsx(f,{children:v[r]})]},r))})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        paddingBottom: "0.5rem"
      }} key={i}>
            <IconHolder Icon={<IconComponent style={{
          paddingRight: "1rem"
        }} />} height={48} width={48}></IconHolder>
            <Typography>{iconNames[i]}</Typography>
          </div>)}
      </div>;
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["Editable","FullList"],O=Object.freeze(Object.defineProperty({__proto__:null,Editable:n,FullList:o,__namedExportsOrder:S,default:R},Symbol.toStringTag,{value:"Module"}));export{o as F,O as I};
