var u=Object.defineProperty;var s=(t,e)=>u(t,"name",{value:e,configurable:!0});import{S as b,i as p,s as B,r as g,u as f,v as r,a as S,w as N,x as _,q as m,d as x}from"./index.b1c955cf.js";function k(t){let e,l;return{c(){e=g("button"),l=f(t[1]),r(e,"type","button"),r(e,"class",t[0]),e.disabled=t[2]},m(n,a){S(n,e,a),N(e,l)},p(n,[a]){a&2&&_(l,n[1]),a&1&&r(e,"class",n[0]),a&4&&(e.disabled=n[2])},i:m,o:m,d(n){n&&x(e)}}}s(k,"create_fragment");function L(t,e,l){let{className:n=""}=e,{label:a=""}=e,{isDisabled:d=!1}=e;return t.$$set=o=>{"className"in o&&l(0,n=o.className),"label"in o&&l(1,a=o.label),"isDisabled"in o&&l(2,d=o.isDisabled)},[n,a,d]}s(L,"instance");class c extends b{constructor(e){super(),p(this,e,L,k,B,{className:0,label:1,isDisabled:2})}}s(c,"Button");const y=c;c.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"className",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const h={parameters:{storySource:{source:`import Button from "./Button.svelte";

export default {
  title: "Components/Form/Buttons",
  component: Button,
  argTypes: {
    label: { control: "text" },
    className: { table: { disable: true } },
    isDisabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  Component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = { className: "primaryButton", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { className: "secondaryButton", label: "Button" };

export const Warning = Template.bind({});
Warning.args = { className: "warningButton", label: "Button" };

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { className: "primarySmallButton", label: "Button" };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { className: "secondarySmallButton", label: "Button" };
`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},warning:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},"small-primary":{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},"small-secondary":{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}}}}},title:"Components/Form/Buttons",component:y,argTypes:{label:{control:"text"},className:{table:{disable:!0}},isDisabled:{control:{type:"boolean"}}}},i=s(t=>({Component:y,props:t}),"Template"),v=i.bind({});v.args={className:"primaryButton",label:"Button"};const T=i.bind({});T.args={className:"secondaryButton",label:"Button"};const w=i.bind({});w.args={className:"warningButton",label:"Button"};const P=i.bind({});P.args={className:"primarySmallButton",label:"Button"};const D=i.bind({});D.args={className:"secondarySmallButton",label:"Button"};const V=["Primary","Secondary","Warning","SmallPrimary","SmallSecondary"];export{v as Primary,T as Secondary,P as SmallPrimary,D as SmallSecondary,w as Warning,V as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.aed30c0d.js.map
