(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6102],{33783:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/achievements",function(){return t(25983)}])},25983:function(n,e,t){"use strict";t.r(e);var r=t(82729),i=t(85893),l=t(67294),o=t(98396),s=t(87357),c=t(11703),a=t(40044),d=t(51233),u=t(15861),h=t(61599),x=t(51053),v=t(41422),f=t(39574),p=t(2962);function j(){let n=(0,r._)(["\n  position: absolute;\n  font-size: 14px;\n  z-index: 1;\n  bottom: -24px;\n  pointer-events: none;\n  width: 80px;\n  left: -4px;\n"]);return j=function(){return n},n}function m(){let n=(0,r._)(["\n  filter: ",";\n  opacity: ",";\n  margin-left: -4px;\n  object-fit: contain;\n  width: 60px;\n"]);return m=function(){return n},n}let b=["World 1","World 2","World 3","World 4","World 5"],Z=h.Z.span(j()),g=h.Z.img(m(),n=>{let{completed:e}=n;return e?"grayscale(0)":"grayscale(.8)"},n=>{let{completed:e}=n;return e?"1":"0.3"}),_=n=>{let{name:e,desc:t,rewards:r,currentQuantity:l,quantity:o}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{variant:"h5",fontWeight:500,children:(0,f.cleanUnderscore)(e)}),(0,i.jsx)(u.Z,{variant:"body1",children:(0,f.cleanUnderscore)(t)}),l?(0,i.jsx)(s.Z,{mt:1,mb:1,children:(0,i.jsxs)(u.Z,{variant:"body1",children:["Progress: ",l," ",o>1?(0,i.jsxs)("span",{children:[" / ",o]}):null]})}):null,(0,i.jsxs)(s.Z,{mt:1,children:[(0,i.jsx)(u.Z,{variant:"body1",fontWeight:"bold",children:"Rewards:"}),(0,i.jsx)(u.Z,{variant:"body1",children:(0,f.cleanUnderscore)(r.join(", "))})]})]})};e.default=()=>{var n;let{state:e}=(0,l.useContext)(v.I),[t,r]=(0,l.useState)(null==e?void 0:null===(n=e.account)||void 0===n?void 0:n.achievements),[h,j]=(0,l.useState)(0),m=(0,o.Z)(n=>n.breakpoints.down("sm"),{noSsr:!0});(0,l.useEffect)(()=>{r(w(70*h,70*h+70))},[e]);let w=(n,t)=>{var r,i;let l=null==e?void 0:null===(r=e.account)||void 0===r?void 0:null===(i=r.achievements)||void 0===i?void 0:i.slice(n,t);return null==l||l.sort((n,e)=>(null==n?void 0:n.visualIndex)-(null==e?void 0:e.visualIndex)),l};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(p.PB,{title:"Idleon Toolbox | Achievements",description:"Keep track of your achievements progression"}),(0,i.jsx)(c.Z,{centered:!0,variant:m?"fullWidth":"standard",value:h,onChange:(n,e)=>{r(w(70*e,70*e+70)),j(e)},children:null==b?void 0:b.map((n,e)=>(0,i.jsx)(a.Z,{label:n},"".concat(n,"-").concat(e)))}),(0,i.jsx)(s.Z,{display:"flex",justifyContent:"center",children:(null==t?void 0:t.length)>0?(0,i.jsx)(d.Z,{sx:{width:{lg:900}},justifyContent:"center",mt:3,flexWrap:"wrap",direction:"row",gap:3,children:null==t?void 0:t.map((n,e)=>{let{name:t,rawName:r,completed:l,visualIndex:o,currentQuantity:s,quantity:c}=n;return -1===o||t.includes("FILLER")?null:(0,i.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,i.jsx)(x.Z,{title:(0,i.jsx)(_,{...n}),children:(0,i.jsx)(g,{completed:l,src:"".concat(f.prefix,"data/").concat(r,".png"),alt:""})}),s?(0,i.jsxs)(Z,{children:[(0,f.notateNumber)(s)," ",c>1?(0,i.jsxs)("span",{children:[" / ",(0,f.notateNumber)(c,"Big")]}):null]}):null]},"".concat(t,"-").concat(e))})}):(0,i.jsx)(u.Z,{mt:2,variant:"h4",children:"No achievements yet"})})]})}},82729:function(n,e,t){"use strict";function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{_:function(){return r}})}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=33783)}),_N_E=n.O()}]);