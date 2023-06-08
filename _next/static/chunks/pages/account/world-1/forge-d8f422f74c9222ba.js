(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9378],{6242:function(n,t,e){"use strict";e.d(t,{Z:function(){return j}});var o=e(7462),r=e(3366),a=e(7294),i=e(6010),l=e(4780),c=e(948),s=e(1657),d=e(629),u=e(1588),x=e(4867);function p(n){return(0,x.Z)("MuiCard",n)}(0,u.Z)("MuiCard",["root"]);var h=e(5893);let v=["className","raised"],f=n=>{let{classes:t}=n;return(0,l.Z)({root:["root"]},p,t)},Z=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),m=a.forwardRef(function(n,t){let e=(0,s.Z)({props:n,name:"MuiCard"}),{className:a,raised:l=!1}=e,c=(0,r.Z)(e,v),d=(0,o.Z)({},e,{raised:l}),u=f(d);return(0,h.jsx)(Z,(0,o.Z)({className:(0,i.Z)(u.root,a),elevation:l?8:void 0,ref:t,ownerState:d},c))});var j=m},4267:function(n,t,e){"use strict";e.d(t,{Z:function(){return m}});var o=e(7462),r=e(3366),a=e(7294),i=e(6010),l=e(4780),c=e(948),s=e(1657),d=e(1588),u=e(4867);function x(n){return(0,u.Z)("MuiCardContent",n)}(0,d.Z)("MuiCardContent",["root"]);var p=e(5893);let h=["className","component"],v=n=>{let{classes:t}=n;return(0,l.Z)({root:["root"]},x,t)},f=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=a.forwardRef(function(n,t){let e=(0,s.Z)({props:n,name:"MuiCardContent"}),{className:a,component:l="div"}=e,c=(0,r.Z)(e,h),d=(0,o.Z)({},e,{component:l}),u=v(d);return(0,p.jsx)(f,(0,o.Z)({as:l,className:(0,i.Z)(u.root,a),ownerState:d,ref:t},c))});var m=Z},6585:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/forge",function(){return e(3415)}])},372:function(n,t,e){"use strict";var o=e(2729),r=e(5893),a=e(9574),i=e(1599),l=e(5861),c=e(1233);function s(){let n=(0,o._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return s=function(){return n},n}function d(){let n=(0,o._)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  .coin-icon {\n    width: 23px;\n    height: 27px;\n    object-fit: contain;\n  }\n\n  // .coin-value {\n  //   position: absolute;\n    //   text-shadow: ",";\n  //   bottom: -22px;\n  //   left: 50%;\n  //   transform: translateX(-50%);\n  // }\n"]);return d=function(){return n},n}let u=i.Z.img(s());i.Z.div(d(),n=>{let{noShadow:t}=n;return t?"unset":"2px 2px 0 black"}),t.Z=n=>{let{centered:t=!0,style:e={},money:o,title:i="Total Money",maxCoins:s=5,noShadow:d}=n;return(0,r.jsxs)("div",{style:e,children:[i?(0,r.jsx)(l.Z,{style:{textAlign:"center"},children:i}):null,(0,r.jsx)(c.Z,{flexWrap:"wrap",justifyContent:t?"center":"flex-start",direction:"row",gap:2.3,children:null==o?void 0:o.map((n,t)=>{let[e,o]=n;return t<s&&Number(o)>0?(0,r.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(u,{src:"".concat(a.prefix,"data/Coins").concat(e,".png"),alt:""}),(0,r.jsx)(l.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(o)})]},o+""+e):null})})]})}},3415:function(n,t,e){"use strict";e.r(t);var o=e(5893),r=e(1490),a=e(7294),i=e(8396),l=e(5861),c=e(1703),s=e(44),d=e(6886),u=e(6242),x=e(4267),p=e(1233),h=e(9574),v=e(372),f=e(2962);let Z={width:72,alignItems:"center"},m=n=>{let{style:t={},name:e,value:r}=n;return(0,o.jsxs)("div",{style:t,children:[(0,o.jsx)(l.Z,{children:e}),(0,o.jsx)(l.Z,{component:"div",children:r})]})};t.default=()=>{var n,t,e,j,w,g;let{state:C}=(0,a.useContext)(r.I),[y,b]=(0,a.useState)(0),M=(0,i.Z)(n=>n.breakpoints.down("md"),{noSsr:!0}),_=(n,t)=>t?n<5?Math.round(50*Math.pow(2.5,Math.pow(n,.51))):Math.round(400*Math.pow(t,n-5)):Math.round(200*Math.pow(5.4,Math.pow(n,.83))),N=(n,t,e,o)=>{let r=0;for(let a=o?1:n;a<t;a++)r+=_(a,e);return null!=r?r:0};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.PB,{title:"Idleon Toolbox | Forge",description:"Keep track of your forge production"}),(0,o.jsx)(l.Z,{mt:2,mb:2,variant:"h2",children:"Forge"}),(0,o.jsx)(c.Z,{centered:!0,sx:{marginBottom:3},variant:M?"fullWidth":"standard",value:y,onChange:(n,t)=>{b(t)},children:["Slots","Upgrades"].map((n,t)=>(0,o.jsx)(s.Z,{label:n},"".concat(n,"-").concat(t)))}),0===y?(0,o.jsx)(d.ZP,{container:!0,gap:2,children:null==C?void 0:null===(n=C.account)||void 0===n?void 0:null===(t=n.forge)||void 0===t?void 0:null===(e=t.list)||void 0===e?void 0:e.map((n,t)=>{let{ore:e,barrel:r,bar:a,isBrimestone:i}=n,c=[e,r,a],s=c.every(n=>{let{rawName:t}=n;return"Blank"===t});return(0,o.jsx)(d.ZP,{item:!0,children:(0,o.jsx)(u.Z,{sx:{position:"relative",borderColor:i?"#9b689bbf":"none"},variant:"outlined",children:(0,o.jsx)(x.Z,{children:(0,o.jsx)(p.Z,{direction:"row",children:null==c?void 0:c.map((n,t)=>{let{rawName:e,quantity:r}=n;return(0,o.jsxs)(p.Z,{sx:Z,children:[(0,o.jsx)("img",{style:{width:M?36:"auto",opacity:s?0:1},src:"".concat(h.prefix,"data/").concat(s?"CopperBar":e,".png"),alt:""}),r>0?(0,o.jsx)(l.Z,{variant:"body1",component:"span",children:r}):(0,o.jsx)(l.Z,{variant:"body1",component:"span",children:"\xa0"})]},"".concat(e,"-").concat(t))})})})},"".concat(e,"-").concat(r,"-").concat(a,"-").concat(t))},"".concat(e,"-").concat(r,"-").concat(a,"-").concat(t))})}):null,1===y?(0,o.jsx)(p.Z,{gap:3,children:null==C?void 0:null===(j=C.account)||void 0===j?void 0:null===(w=j.forge)||void 0===w?void 0:null===(g=w.upgrades)||void 0===g?void 0:g.map((n,t)=>{let{level:e,maxLevel:r,description:a,costMulti:i}=n,c=_(e,i),s=N(e,r,i),d=N(e,r,i,!0);return(0,o.jsx)(u.Z,{sx:{width:"fit-content"},children:(0,o.jsx)(x.Z,{children:(0,o.jsxs)(p.Z,{direction:"row",gap:3,flexWrap:"wrap",children:[(0,o.jsx)(m,{name:"Lv.",value:"".concat(e," / ").concat(r)}),(0,o.jsx)(m,{style:{width:300},name:"Description",value:a}),(0,o.jsx)(m,{style:{width:120},name:"Cost",value:e<r?(0,o.jsx)(v.Z,{centered:!1,title:"",maxCoins:3,money:(0,h.getCoinsArray)(c)}):(0,o.jsx)(l.Z,{color:"success.light",children:"Maxed"})}),(0,o.jsx)(m,{style:{minWidth:120,alignItems:"flex-start"},name:e<r?"Cost to max":"Total cost",value:(0,o.jsx)(v.Z,{centered:!1,title:"",maxCoins:3,money:(0,h.getCoinsArray)(e<r?s:d)})})]})})},"".concat(e,"-").concat(t))})}):null]})}}},function(n){n.O(0,[9912,6886,9774,2888,179],function(){return n(n.s=6585)}),_N_E=n.O()}]);