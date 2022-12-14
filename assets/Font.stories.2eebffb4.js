var y=Object.defineProperty;var d=(t,e)=>y(t,"name",{value:e,configurable:!0});import{S as p,i as x,s as b,r as u,u as B,v as r,a as f,w as T,x as N,q as m,d as L}from"./index.61d2e334.js";function h(t){let e,s;return{c(){e=u("div"),s=B(t[1]),r(e,"class",t[0])},m(n,o){f(n,e,o),T(e,s)},p(n,[o]){o&2&&N(s,n[1]),o&1&&r(e,"class",n[0])},i:m,o:m,d(n){n&&L(e)}}}d(h,"create_fragment");function H(t,e,s){let{className:n=""}=e,{text:o=""}=e;return t.$$set=i=>{"className"in i&&s(0,n=i.className),"text"in i&&s(1,o=i.text)},[n,o]}d(H,"instance");class c extends p{constructor(e){super(),x(this,e,H,h,b,{className:0,text:1})}}d(c,"Font");const g=c;c.__docgen={version:3,name:"Font.svelte",data:[{visibility:"public",description:null,keywords:[],name:"className",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"text",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const a="The quick brown fox jumps over the lazy dog",j={parameters:{storySource:{source:`import Font from "./Font.svelte";

const samepleText = "The quick brown fox jumps over the lazy dog";

export default {
  title: "Fonts/Font",
  component: Font,
  argTypes: {
    text: { control: "text" },
    className: { table: { disable: true } },
  },
};

const Template = (args) => ({
  Component: Font,
  props: args,
});

export const Heading1 = Template.bind({});
Heading1.args = { className: "heading1", text: samepleText };

export const Heading2 = Template.bind({});
Heading2.args = { className: "heading2", text: samepleText };

export const Heading3 = Template.bind({});
Heading3.args = { className: "heading3", text: samepleText };

export const Heading4 = Template.bind({});
Heading4.args = { className: "heading4", text: samepleText };

export const BodyLarge = Template.bind({});
BodyLarge.args = { className: "bodyLarge", text: samepleText };

export const BodyDefault = Template.bind({});
BodyDefault.args = { className: "bodyDefault", text: samepleText };

export const BodySmall = Template.bind({});
BodySmall.args = { className: "bodySmall", text: samepleText };

export const BodyXSmall = Template.bind({});
BodyXSmall.args = { className: "bodyXSmall", text: samepleText };
`,locationsMap:{"heading-1":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"heading-2":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"heading-3":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"heading-4":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"body-large":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"body-default":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"body-small":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}},"body-x-small":{startLoc:{col:17,line:14},endLoc:{col:2,line:17},startBody:{col:17,line:14},endBody:{col:2,line:17}}}}},title:"Fonts/Font",component:g,argTypes:{text:{control:"text"},className:{table:{disable:!0}}}},l=d(t=>({Component:g,props:t}),"Template"),S=l.bind({});S.args={className:"heading1",text:a};const _=l.bind({});_.args={className:"heading2",text:a};const v=l.bind({});v.args={className:"heading3",text:a};const F=l.bind({});F.args={className:"heading4",text:a};const k=l.bind({});k.args={className:"bodyLarge",text:a};const w=l.bind({});w.args={className:"bodyDefault",text:a};const D=l.bind({});D.args={className:"bodySmall",text:a};const X=l.bind({});X.args={className:"bodyXSmall",text:a};const z=["Heading1","Heading2","Heading3","Heading4","BodyLarge","BodyDefault","BodySmall","BodyXSmall"];export{w as BodyDefault,k as BodyLarge,D as BodySmall,X as BodyXSmall,S as Heading1,_ as Heading2,v as Heading3,F as Heading4,z as __namedExportsOrder,j as default};
//# sourceMappingURL=Font.stories.2eebffb4.js.map
