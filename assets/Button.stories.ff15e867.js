var b=Object.defineProperty;var o=(t,e)=>b(t,"name",{value:e,configurable:!0});import{S as y,i as p,s as B,r as f,u as g,v as i,a as _,w as N,x as k,q as u,d as x}from"./index.61d2e334.js";function v(t){let e,l;return{c(){e=f("button"),l=g(t[1]),i(e,"type","button"),i(e,"class",t[0]),e.disabled=t[2]},m(n,a){_(n,e,a),N(e,l)},p(n,[a]){a&2&&k(l,n[1]),a&1&&i(e,"class",n[0]),a&4&&(e.disabled=n[2])},i:u,o:u,d(n){n&&x(e)}}}o(v,"create_fragment");function w(t,e,l){let{className:n=""}=e,{label:a=""}=e,{isDisabled:d=!1}=e;return t.$$set=s=>{"className"in s&&l(0,n=s.className),"label"in s&&l(1,a=s.label),"isDisabled"in s&&l(2,d=s.isDisabled)},[n,a,d]}o(w,"instance");class r extends y{constructor(e){super(),p(this,e,w,v,B,{className:0,label:1,isDisabled:2})}}o(r,"Button");const m=r;r.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"className",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const W={parameters:{storySource:{source:`import Button from "./Button.svelte";

export default {
  title: "Form/Button",
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
`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},warning:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}}}}},title:"Form/Button",component:m,argTypes:{label:{control:"text"},className:{table:{disable:!0}},isDisabled:{control:{type:"boolean"}}}},c=o(t=>({Component:m,props:t}),"Template"),D=c.bind({});D.args={className:"primaryButton",label:"Button"};const S=c.bind({});S.args={className:"secondaryButton",label:"Button"};const T=c.bind({});T.args={className:"warningButton",label:"Button"};const h=["Primary","Secondary","Warning"];export{D as Primary,S as Secondary,T as Warning,h as __namedExportsOrder,W as default};
//# sourceMappingURL=Button.stories.ff15e867.js.map
