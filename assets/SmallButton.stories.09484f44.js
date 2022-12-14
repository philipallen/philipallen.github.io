var p=Object.defineProperty;var i=(e,t)=>p(e,"name",{value:t,configurable:!0});import{S as b,i as B,s as S,r as f,u as g,v as r,a as _,w as k,x as v,q as c,d as x}from"./index.61d2e334.js";function D(e){let t,a,o;return{c(){t=f("button"),a=g(e[1]),r(t,"type","button"),r(t,"class",o=e[3][e[0]]),t.disabled=e[2]},m(l,n){_(l,t,n),k(t,a)},p(l,[n]){n&2&&v(a,l[1]),n&1&&o!==(o=l[3][l[0]])&&r(t,"class",o),n&4&&(t.disabled=l[2])},i:c,o:c,d(l){l&&x(t)}}}i(D,"create_fragment");function T(e,t,a){let{smallButtonStyle:o=""}=t,{label:l=""}=t,{isDisabled:n=!1}=t;const y={primary:"primarySmallButton",secondary:"secondarySmallButton"};return e.$$set=s=>{"smallButtonStyle"in s&&a(0,o=s.smallButtonStyle),"label"in s&&a(1,l=s.label),"isDisabled"in s&&a(2,n=s.isDisabled)},[o,l,n,y]}i(T,"instance");class d extends b{constructor(t){super(),B(this,t,T,D,S,{smallButtonStyle:0,label:1,isDisabled:2})}}i(d,"SmallButton");const u=d;d.__docgen={version:3,name:"SmallButton.svelte",data:[{visibility:"public",description:null,keywords:[],name:"smallButtonStyle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const C={parameters:{storySource:{source:`import SmallButton from "./SmallButton.svelte";

export default {
  title: "Form/Small Button",
  component: SmallButton,
  argTypes: {
    label: { control: "text" },
    smallButtonStyle: { table: { disable: true } },
    isDisabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  Component: SmallButton,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  smallButtonStyle: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  smallButtonStyle: "secondary",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}}}}},title:"Form/Small Button",component:u,argTypes:{label:{control:"text"},smallButtonStyle:{table:{disable:!0}},isDisabled:{control:{type:"boolean"}}}},m=i(e=>({Component:u,props:e}),"Template"),w=m.bind({});w.args={smallButtonStyle:"primary",label:"Button"};const L=m.bind({});L.args={smallButtonStyle:"secondary",label:"Button"};const V=["Primary","Secondary"];export{w as Primary,L as Secondary,V as __namedExportsOrder,C as default};
//# sourceMappingURL=SmallButton.stories.09484f44.js.map
