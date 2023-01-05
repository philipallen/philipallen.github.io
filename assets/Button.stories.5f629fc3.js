var u=Object.defineProperty;var o=(n,e)=>u(n,"name",{value:e,configurable:!0});import{S as p,i as b,s as B,r as g,u as f,v as r,a as S,w as N,x as _,q as m,d as x}from"./index.d90a5e80.js";function k(n){let e,l;return{c(){e=g("button"),l=f(n[1]),r(e,"type","button"),r(e,"class",n[0]),e.disabled=n[2]},m(t,a){S(t,e,a),N(e,l)},p(t,[a]){a&2&&_(l,t[1]),a&1&&r(e,"class",t[0]),a&4&&(e.disabled=t[2])},i:m,o:m,d(t){t&&x(e)}}}o(k,"create_fragment");function L(n,e,l){let{className:t=""}=e,{label:a="button"}=e,{isDisabled:d=!1}=e;return n.$$set=s=>{"className"in s&&l(0,t=s.className),"label"in s&&l(1,a=s.label),"isDisabled"in s&&l(2,d=s.isDisabled)},[t,a,d]}o(L,"instance");class c extends p{constructor(e){super(),b(this,e,L,k,B,{className:0,label:1,isDisabled:2})}}o(c,"Button");const y=c;c.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"className",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"button"},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const h={parameters:{storySource:{source:`import Button from "./Button.svelte";

export default {
  title: "Composites/Form/Buttons",
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
Primary.args = { className: "primaryButton" };

export const Secondary = Template.bind({});
Secondary.args = { className: "secondaryButton" };

export const Warning = Template.bind({});
Warning.args = { className: "warningButton" };

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { className: "primarySmallButton" };

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { className: "secondarySmallButton" };
`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},warning:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},"small-primary":{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},"small-secondary":{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}}}}},title:"Composites/Form/Buttons",component:y,argTypes:{label:{control:"text"},className:{table:{disable:!0}},isDisabled:{control:{type:"boolean"}}}},i=o(n=>({Component:y,props:n}),"Template"),v=i.bind({});v.args={className:"primaryButton"};const T=i.bind({});T.args={className:"secondaryButton"};const w=i.bind({});w.args={className:"warningButton"};const P=i.bind({});P.args={className:"primarySmallButton"};const D=i.bind({});D.args={className:"secondarySmallButton"};const V=["Primary","Secondary","Warning","SmallPrimary","SmallSecondary"];export{v as Primary,T as Secondary,P as SmallPrimary,D as SmallSecondary,w as Warning,V as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.5f629fc3.js.map
