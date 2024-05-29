import{j as o}from"./jsx-runtime-6eef64cc.js";import{R as I}from"./index-c013ead5.js";import{u as C,g as f}from"./index-40766bf6.js";import{T}from"./index-61f1eb78.js";import{g as j,a}from"./index-aa3a2926.js";import{M as s}from"./icons.utils-7ed2e5f0.js";const{light:{color:i}}=f("boi"),x=Object.keys(s),v=Object.values(s),y=({Icon:c,...e})=>{const{tokens:t}=C(),{color:h,themeColor:b}=t;return I.cloneElement(c,{...e,primaryColor:e.primaryColor||b.core100,secondaryColor:e.secondaryColor||h.white})},w={title:"Components/DataDisplay/Multicolor Icons",component:y,argTypes:{Icon:j(s),primaryColor:a(i),secondaryColor:a(i),height:{control:{type:"number"}},width:{control:{type:"number"}}}},n={args:{Icon:o.jsx(s.ErrorIcon,{}),height:48,width:48}},r={argTypes:{Icon:{control:{disable:!0}},primaryColor:{control:{disable:!0}},secondaryColor:{control:{disable:!0}},height:{control:{disable:!0}},width:{control:{disable:!0}}},render:function(){return o.jsx("div",{children:v.map((e,t)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",paddingBottom:"0.5rem"},children:[o.jsx(y,{Icon:o.jsx(e,{}),height:48,width:48}),o.jsx(T,{children:x[t]})]},t))})}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    Icon: <MulticolorIcons.ErrorIcon />,
    height: 48,
    width: 48
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    Icon: {
      control: {
        disable: true
      }
    },
    primaryColor: {
      control: {
        disable: true
      }
    },
    secondaryColor: {
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["Editable","FullList"],D=Object.freeze(Object.defineProperty({__proto__:null,Editable:n,FullList:r,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{r as F,D as M};
