(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7127],{6242:function(h,b,a){"use strict";a.d(b,{Z:function(){return t}});var i=a(7462),j=a(3366),c=a(7294),k=a(6010),l=a(4780),d=a(948),m=a(1657),e=a(5113),n=a(4867),f=a(1588);function o(a){return(0,n.Z)("MuiCard",a)}(0,f.Z)("MuiCard",["root"]);var p=a(5893);const q=["className","raised"],r=a=>{const{classes:b}=a;return(0,l.Z)({root:["root"]},o,b)},s=(0,d.ZP)(e.Z,{name:"MuiCard",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({overflow:"hidden"})),g=c.forwardRef(function(d,e){const a=(0,m.Z)({props:d,name:"MuiCard"}),{className:f,raised:b=!1}=a,g=(0,j.Z)(a,q),c=(0,i.Z)({},a,{raised:b}),h=r(c);return(0,p.jsx)(s,(0,i.Z)({className:(0,k.Z)(h.root,f),elevation:b?8:void 0,ref:e,ownerState:c},g))});var t=g},4267:function(g,b,a){"use strict";a.d(b,{Z:function(){return s}});var h=a(7462),i=a(3366),c=a(7294),j=a(6010),k=a(4780),d=a(948),l=a(1657),m=a(4867),e=a(1588);function n(a){return(0,m.Z)("MuiCardContent",a)}(0,e.Z)("MuiCardContent",["root"]);var o=a(5893);const p=["className","component"],q=a=>{const{classes:b}=a;return(0,k.Z)({root:["root"]},n,b)},r=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(b,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=c.forwardRef(function(d,e){const a=(0,l.Z)({props:d,name:"MuiCardContent"}),{className:f,component:b="div"}=a,g=(0,i.Z)(a,p),c=(0,h.Z)({},a,{component:b}),k=q(c);return(0,o.jsx)(r,(0,h.Z)({as:b,className:(0,j.Z)(k.root,f),ownerState:c,ref:e},g))});var s=f},7191:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/prayers",function(){return c(7076)}])},7076:function(f,b,a){"use strict";a.r(b);var g=a(5893),h=a(7294),i=a(6998),j=a(5861),k=a(6447),l=a(6242),m=a(4267),n=a(3133),c=a(5934),o=a(2962);function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function q(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){p(d,a,c[a])})}return d}function r(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function d(){var a=r(["\n  width: 36px;\n  height: 36px;\n"]);return d=function(){return a},a}function e(){var a=r(["\n  width: 36px;\n  height: 36px;\n"]);return e=function(){return a},a}var s=c.Z.img(d()),t=c.Z.img(e());b.default=function(){var a=(0,h.useContext)(i.I).state,b=(null==a?void 0:a.account).prayers,c=function(b){var a=b.level,d=b.costMulti,c=b.prayerIndex;return a<6?Math.round(d*(1+(4+c/25)*a)):Math.round(Math.min(2e9,d*(1+(1+c/20)*a)*Math.pow(9===c?1.3:1.12,a-5)))},d=function(a){for(var b=0,d=null==a?void 0:a.level;d<(null==a?void 0:a.maxLevel);d++)b+=c(q({},a,{level:d}));return null!=b?b:0};return(0,g.jsxs)("div",{children:[(0,g.jsx)(o.PB,{title:"Idleon Toolbox | Prayers",description:"Prayers information"}),(0,g.jsx)(j.Z,{variant:"h2",mb:3,children:"Prayers"}),(0,g.jsx)(k.Z,{direction:"row",flexWrap:"wrap",gap:3,children:null==b?void 0:b.map(function(a,p){var e=a.name,f=a.x1,h=a.x2,b=a.level,q=a.prayerIndex,r=a.effect,u=a.curse,v=a.soul,w=a.maxLevel,i=a.totalAmount,x=a.unlockWave,y=a.unlockZone,z=f+f*(b-1)/10,A=h+h*(b-1)/10,o=c(a);return(0,g.jsx)(l.Z,{sx:{width:300,display:"flex"},children:(0,g.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",flex:1,justifyContent:"space-between"},children:[(0,g.jsxs)(k.Z,{direction:"row",alignItems:"center",gap:2,mb:2,children:[(0,g.jsxs)(k.Z,{alignItems:"center",children:[(0,g.jsx)(s,{src:"".concat(n.prefix,"data/Prayer").concat(q,".png"),alt:""}),(0,g.jsxs)(j.Z,{fontWeight:"bold",children:["Lv.",b]})]}),(0,g.jsx)(j.Z,{variant:"h6",children:(0,n.cleanUnderscore)(e)})]}),(0,g.jsxs)(k.Z,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(j.Z,{sx:{color:"success.light"},children:"Bonus:"})," ",(0,n.cleanUnderscore)(r).replace("{",z)]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(j.Z,{sx:{color:"error.light"},children:"Curse:"})," ",(0,n.cleanUnderscore)(u).replace("{",A)]})]}),(0,g.jsxs)(j.Z,{mt:1,children:["Unlock: lv. ",x," at ",y]}),(0,g.jsxs)(k.Z,{mt:3,direction:"row",alignItems:"center",gap:2,children:[(0,g.jsx)(t,{src:"".concat(n.prefix,"data/").concat(v,".png"),alt:""}),w===b?(0,g.jsx)(j.Z,{sx:{color:"success.main"},children:"MAXED"}):(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{children:["Cost: ",(0,g.jsx)(j.Z,{component:"span",sx:{color:0===b?"":o<=i?"success.light":"error.light"},children:(0,n.kFormatter)((0,n.round)(o),2)})," (",(0,n.kFormatter)(i,2),")"]}),(0,g.jsxs)("div",{children:["Cost To Max: ",(0,n.kFormatter)((0,n.round)(d(a)))]})]})]})]})},e+p)})})]})}}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=7191)}),_N_E=a.O()}])