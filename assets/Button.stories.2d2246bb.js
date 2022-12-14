var p=Object.defineProperty;var i=(n,t)=>p(n,"name",{value:t,configurable:!0});import{S as m,i as f,s as g,r as B,u as S,v as r,a as _,w as k,x as v,q as u,d as w}from"./index.61d2e334.js";function x(n){let t,o,a;return{c(){t=B("button"),o=S(n[1]),r(t,"type","button"),r(t,"class",a=n[3][n[0]]),t.disabled=n[2]},m(e,l){_(e,t,l),k(t,o)},p(e,[l]){l&2&&v(o,e[1]),l&1&&a!==(a=e[3][e[0]])&&r(t,"class",a),l&4&&(t.disabled=e[2])},i:u,o:u,d(e){e&&w(t)}}}i(x,"create_fragment");function D(n,t,o){let{buttonStyle:a=""}=t,{label:e=""}=t,{isDisabled:l=!1}=t;const b={primary:"primaryButton",secondary:"secondaryButton",warning:"warningButton"};return n.$$set=s=>{"buttonStyle"in s&&o(0,a=s.buttonStyle),"label"in s&&o(1,e=s.label),"isDisabled"in s&&o(2,l=s.isDisabled)},[a,e,l,b]}i(D,"instance");class d extends m{constructor(t){super(),f(this,t,D,x,g,{buttonStyle:0,label:1,isDisabled:2})}}i(d,"Button");const y=d;d.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"buttonStyle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isDisabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const C={parameters:{storySource:{source:`import Button from "./Button.svelte";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    buttonStyle: { buttonStyletable: { disable: true } },
    isDisabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  Component: Button,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  buttonStyle: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonStyle: "secondary",
  label: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  buttonStyle: "warning",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}},warning:{startLoc:{col:17,line:13},endLoc:{col:2,line:16},startBody:{col:17,line:13},endBody:{col:2,line:16}}}}},title:"Form/Button",component:y,argTypes:{label:{control:"text"},buttonStyle:{buttonStyletable:{disable:!0}},isDisabled:{control:{type:"boolean"}}}},c=i(n=>({Component:y,props:n}),"Template"),T=c.bind({});T.args={buttonStyle:"primary",label:"Button"};const L=c.bind({});L.args={buttonStyle:"secondary",label:"Button"};const P=c.bind({});P.args={buttonStyle:"warning",label:"Button"};const V=["Primary","Secondary","Warning"];export{T as Primary,L as Secondary,P as Warning,V as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories.2d2246bb.js.map
