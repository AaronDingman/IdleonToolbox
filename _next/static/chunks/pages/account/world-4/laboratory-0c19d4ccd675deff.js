(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{18972:function(e,n,t){"use strict";t.d(n,{Z:function(){return $}});var l=t(63366),i=t(87462),r=t(67294),a=t(86010),o=t(94780),c=t(41796),s=t(90948),d=t(71657),u=t(59773),p=t(47739),v=t(58974),h=t(51705),x=t(35097),m=t(84592),g=t(26336),j=t(1588),Z=t(34867);function f(e){return(0,Z.Z)("MuiMenuItem",e)}let b=(0,j.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var y=t(85893);let w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=e=>{let{disabled:n,dense:t,divider:l,disableGutters:r,selected:a,classes:c}=e,s=(0,o.Z)({root:["root",t&&"dense",n&&"disabled",!r&&"gutters",l&&"divider",a&&"selected"]},f,c);return(0,i.Z)({},c,s)},I=(0,s.ZP)(p.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,t.dense&&n.dense,t.divider&&n.divider,!t.disableGutters&&n.gutters]}})(({theme:e,ownerState:n})=>(0,i.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${m.Z.root}`]:{minWidth:36}},!n.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},n.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${m.Z.root} svg`]:{fontSize:"1.25rem"}}))),k=r.forwardRef(function(e,n){let t;let o=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:s="li",dense:p=!1,divider:x=!1,disableGutters:m=!1,focusVisibleClassName:g,role:j="menuitem",tabIndex:Z,className:f}=o,b=(0,l.Z)(o,w),k=r.useContext(u.Z),$=r.useMemo(()=>({dense:p||k.dense||!1,disableGutters:m}),[k.dense,p,m]),N=r.useRef(null);(0,v.Z)(()=>{c&&N.current&&N.current.focus()},[c]);let O=(0,i.Z)({},o,{dense:$.dense,divider:x,disableGutters:m}),_=C(o),F=(0,h.Z)(N,n);return o.disabled||(t=void 0!==Z?Z:-1),(0,y.jsx)(u.Z.Provider,{value:$,children:(0,y.jsx)(I,(0,i.Z)({ref:F,role:j,tabIndex:t,component:s,focusVisibleClassName:(0,a.Z)(_.focusVisible,g),className:(0,a.Z)(_.root,f)},b,{ownerState:O,classes:_}))})});var $=k},71767:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-4/laboratory",function(){return t(36673)}])},33583:function(e,n,t){"use strict";var l=t(85893),i=t(67294),r=t(98396),a=t(11703),o=t(40044);n.Z=e=>{let{tabs:n,children:t,onTabChange:c}=e,[s,d]=(0,i.useState)(0),u=(0,r.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),p=Array.isArray(t)?t:[t];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{centered:!u||u&&n.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&n.length>4?"scrollable":"standard",value:s,onChange:(e,n)=>{d(n),c&&c(n)},children:null==n?void 0:n.map((e,n)=>(0,l.jsx)(o.Z,{label:e},"".concat(e,"-").concat(n)))}),c?t:null==p?void 0:p.map((e,n)=>n===s?e:null)]})}},36673:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var l=t(85893),i=t(15861),r=t(67294),a=t(41422),o=t(82729),c=t(51233),s=t(66242),d=t(44267),u=t(39574),p=t(61599),v=t(51053),h=t(9798);function x(){let e=(0,o._)(["\n  width: 64px;\n"]);return x=function(){return e},e}function m(){let e=(0,o._)(["\n  width: 64px;\n"]);return m=function(){return e},e}let g=p.Z.img(x()),j=p.Z.img(m()),Z=e=>{let{name:n,description:t,bonusDesc:r,extraData:a}=e,o=a?null==t?void 0:t.replace(/\+[0-9]+%/,"+".concat(a,"%")):t;return o=r?o.replace(/{/,r):null==o?void 0:o.split("@_-_@")[0],(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{my:1,fontWeight:"bold",variant:"h5",children:(0,u.cleanUnderscore)(n.toLowerCase().capitalize())}),(0,l.jsx)(i.Z,{children:(0,u.cleanUnderscore)(o)})]})},f=e=>{let{effect:n,bonus:t,name:r,multiplier:a=1}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{mb:1,fontWeight:"bold",variant:"h5",children:(0,u.cleanUnderscore)(r.toLowerCase().capitalize())}),(0,l.jsx)(i.Z,{sx:{color:a>1?"multi":""},children:(0,u.cleanUnderscore)(null==n?void 0:n.replace(/}/g,t*a)).split("@")[0]})]})};var b=e=>{let{characters:n,jewels:t,labBonuses:r,playersCords:a,divinity:o}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{my:4,direction:"row",flexWrap:"wrap",justifyContent:"center",gap:2,children:null==a?void 0:a.map((e,t)=>{var r,a,p,v;if(t>9)return null;let x=null==n?void 0:null===(r=n[t])||void 0===r?void 0:r.name,m=null==n?void 0:null===(a=n[t])||void 0===a?void 0:a.classIndex,g=(null==n?void 0:null===(p=n[t])||void 0===p?void 0:p.afkTarget)==="Laboratory"||(null==o?void 0:null===(v=o.linkedDeities)||void 0===v?void 0:v[t])===1||(0,h.Rp)(null==n?void 0:n[t],1);return g?(0,l.jsx)(s.Z,{sx:{width:200},variant:"outlined",children:(0,l.jsx)(d.Z,{children:(0,l.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:2,children:[(0,l.jsx)("img",{className:"class-icon",src:"".concat(u.prefix,"data/ClassIcons").concat(m,".png"),alt:""}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(i.Z,{children:x}),(0,l.jsxs)(i.Z,{children:[null==e?void 0:e.lineWidth,"px"]}),(0,l.jsxs)(i.Z,{variant:"caption",children:["(",e.x,",",e.y,")"]})]})]})})},"".concat(e.x).concat(e.y,"-").concat(t)):null})}),(0,l.jsx)(c.Z,{direction:"row",justifyContent:"center",gap:2,flexWrap:"wrap",children:null==r?void 0:r.map((e,n)=>(0,l.jsx)(s.Z,{variant:"outlined",sx:{borderColor:(null==e?void 0:e.active)?"success.dark":""},children:(0,l.jsx)(d.Z,{children:(0,l.jsx)(v.Z,{title:(0,l.jsx)(Z,{...e}),children:(0,l.jsx)(g,{src:"".concat(u.prefix,"data/LabBonus").concat(null==e?void 0:e.index,".png"),alt:""})})})},"bonus-".concat(null==e?void 0:e.name,"-").concat(n)))}),(0,l.jsx)(c.Z,{my:4,direction:"row",justifyContent:"center",gap:2,flexWrap:"wrap",children:null==t?void 0:t.map((e,n)=>(0,l.jsx)(s.Z,{variant:"outlined",sx:{borderColor:(null==e?void 0:e.active)?"success.dark":"",opacity:(null==e?void 0:e.acquired)?1:.3},children:(0,l.jsx)(d.Z,{children:(0,l.jsx)(v.Z,{title:(0,l.jsx)(f,{...e}),children:(0,l.jsx)(j,{style:{borderRadius:"50%"},src:"".concat(u.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""})})})},"".concat(null==e?void 0:e.name,"-").concat(n)))})]})},y=t(87357);function w(){let e=(0,o._)(["\n"]);return w=function(){return e},e}let C=[5,10,15,25,35,50,75],I=p.Z.img(w()),k=e=>{let{name:n,bonus:t,baseVal:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{mb:1,fontWeight:"bold",variant:"h6",children:(0,u.cleanUnderscore)(n.toLowerCase().capitalize())}),(0,l.jsx)(i.Z,{children:(0,u.cleanUnderscore)(null==t?void 0:t.replace(/{/g,r))})]})};var $=e=>{let{chips:n,playersChips:t,characters:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{gap:3,alignItems:"center",children:null==t?void 0:t.map((e,n)=>{var t,a,o,p,h,x;let m=null==r?void 0:null===(t=r[n])||void 0===t?void 0:t.name,g=null==r?void 0:null===(a=r[n])||void 0===a?void 0:a.classIndex,j=null!==(x=null==r?void 0:null===(o=r[n])||void 0===o?void 0:null===(p=o.skillsInfo)||void 0===p?void 0:null===(h=p.laboratory)||void 0===h?void 0:h.level)&&void 0!==x?x:0;return(0,l.jsx)(s.Z,{children:(0,l.jsx)(d.Z,{children:(0,l.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:3,children:[(0,l.jsxs)(c.Z,{sx:{width:175,textAlign:"center"},direction:"row",alignItems:"center",gap:2,children:[(0,l.jsxs)(c.Z,{alignItems:"center",justifyContent:"center",children:[(0,l.jsx)("img",{className:"class-icon",src:"".concat(u.prefix,"data/ClassIcons").concat(g,".png"),alt:""}),(0,l.jsxs)(i.Z,{children:["Lv. ",j]})]}),(0,l.jsx)(i.Z,{className:"character-name",children:m})]}),(0,l.jsx)(c.Z,{direction:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"center",gap:3,children:null==e?void 0:e.map((e,n)=>{let t=j>=C[n];return(0,l.jsx)(s.Z,{elevation:5,children:(0,l.jsx)(d.Z,{children:(0,l.jsx)(c.Z,{justifyContent:"center",children:-1!==e?(0,l.jsx)(v.Z,{title:(0,l.jsx)(k,{...e}),children:(0,l.jsx)(I,{src:"".concat(u.prefix,"data/ConsoleChip").concat(null==e?void 0:e.index,".png"),alt:""})}):(0,l.jsx)(y.Z,{sx:{width:42,height:42,display:"flex",alignItems:"center"},children:t?"":"Lv. ".concat(null==C?void 0:C[n])})})})},"".concat(null==e?void 0:e.name,"-").concat(n))})})]})})},"player-".concat(n))})}),(0,l.jsx)(c.Z,{direction:"row",gap:3,justifyContent:"center",my:5,alignItems:"center",children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(d.Z,{children:(0,l.jsx)(c.Z,{direction:"row",gap:2,justifyContent:"center",flexWrap:"wrap",children:null==n?void 0:n.map((e,n)=>(0,l.jsx)(s.Z,{elevation:5,children:(0,l.jsx)(d.Z,{children:(0,l.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(v.Z,{title:(0,l.jsx)(k,{...e}),children:(0,l.jsx)("img",{src:"".concat(u.prefix,"data/ConsoleChip").concat(n,".png"),alt:""})}),(null==e?void 0:e.repoAmount)>=0?(0,l.jsx)("div",{className:"amount",children:null==e?void 0:e.repoAmount}):null]})})},"".concat(null==e?void 0:e.name,"-").concat(n)))})})})})]})},N=t(2962),O=t(33583),_=t(21994),F=t(98396),M=t(417),W=t(61903),L=t(94054),S=t(47312),T=t(153),B=t(61436),U=t(40929),z=t(12458),A=t(18972);function R(){let e=(0,o._)(["\n  width: 42px;\n  height: 42px;\n  object-fit: contain;\n"]);return R=function(){return e},e}let P=p.Z.img(R());var q=()=>{let{state:e}=(0,r.useContext)(a.I),n=(0,F.Z)(e=>e.breakpoints.down("sm"),{noSsr:!0}),[t,o]=(0,r.useState)([]),[p,h]=(0,r.useState)(10),[x,m]=(0,r.useState)(0),g=(0,r.useMemo)(()=>(0,_.GF)(null==e?void 0:e.account,p),[null==e?void 0:e.account,p]),j=(0,r.useMemo)(()=>{var n,t,l,i;return[...null==e?void 0:null===(n=e.account)||void 0===n?void 0:null===(t=n.lab)||void 0===t?void 0:t.chips,...null==e?void 0:null===(l=e.account)||void 0===l?void 0:null===(i=l.lab)||void 0===i?void 0:i.jewels]},[null==e?void 0:e.account]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.Z,{sx:{mb:3},children:[(0,l.jsx)(M.Z,{size:"small",multiple:!0,limitTags:n?2:3,value:t,onChange:(e,n)=>o(n),disablePortal:!0,id:"combo-box-demo",options:j,sx:{width:{xs:300,sm:700}},filterSelectedOptions:!0,getOptionLabel:e=>e?(0,u.cleanUnderscore)(null==e?void 0:e.name):"",renderOption:(e,n)=>{var t;return n?(0,r.createElement)(c.Z,{gap:2,...e,key:"option-"+(null==n?void 0:n.rawName),direction:"row",children:[(0,l.jsx)("img",{width:24,height:24,src:"".concat(u.prefix,"data/").concat(null==n?void 0:n.rawName,".png"),alt:""}),null==n?void 0:null===(t=n.name)||void 0===t?void 0:t.replace(/_/g," ")]}):(0,l.jsx)("span",{style:{height:0}},"empty"+(null==n?void 0:n.index))},renderInput:e=>(0,l.jsx)(W.Z,{...e,label:"Filter by jewel or chip"})}),(0,l.jsxs)(c.Z,{direction:"row",gap:1,children:[(0,l.jsxs)(L.Z,{sx:{mt:2},size:"small",children:[(0,l.jsx)(S.Z,{children:"Weeks"}),(0,l.jsxs)(T.Z,{label:"Weeks",sx:{width:{xs:100}},value:p,onChange:e=>h(e.target.value),children:[(0,l.jsx)(A.Z,{value:10,children:"10"}),(0,l.jsx)(A.Z,{value:20,children:"20"}),(0,l.jsx)(A.Z,{value:30,children:"30"}),(0,l.jsx)(A.Z,{value:40,children:"40"}),(0,l.jsx)(A.Z,{value:50,children:"50"})]})]}),(0,l.jsx)(W.Z,{onChange:e=>m(e.target.value),size:"small",sx:{mt:2,width:200},type:"number",label:"Chip count threshold",helperText:(0,l.jsx)(i.Z,{sx:{width:200},variant:"caption",children:"This will highlight the chip when your threshold is met"})})]})]}),(0,l.jsx)(c.Z,{gap:2,children:null==g?void 0:g.map((n,r)=>{let{items:a,date:o}=n;if(t.length>0){let e=null==a?void 0:a.some(e=>{let{name:n}=e;return t.map(e=>{let{name:n}=e;return n}).includes(n)});if(!e)return null}return(0,l.jsx)(s.Z,{sx:{width:"fit-content"},children:(0,l.jsx)(d.Z,{sx:{"&:last-child":{p:3}},children:(0,l.jsxs)(c.Z,{gap:2,flexWrap:"wrap",children:[(0,l.jsx)(i.Z,{sx:{textAlign:"center"},variant:"h6",children:(0,B.Z)(o)?(0,U.Z)(o,"dd/MM/yyyy HH:mm:ss"):null}),(0,l.jsx)(c.Z,{direction:"row",gap:1,flexWrap:"wrap",children:null==a?void 0:a.map((n,t)=>{let{name:r,requirements:a=[],rawName:o,index:p,bonus:h,effect:m,baseVal:g,acquired:j,amount:Z}=n,f=(null==o?void 0:o.includes("Chip"))?h.replace(/{/g,g):m.replace(/}/g,h);return(0,l.jsx)(s.Z,{variant:"outlined",sx:{width:250,borderColor:j||Z>x?"success.light":""},children:(0,l.jsx)(d.Z,{sx:{"&:last-child":{p:3}},children:(0,l.jsxs)(c.Z,{alignItems:"center",gap:2,children:[(0,l.jsx)(v.Z,{title:(0,u.cleanUnderscore)(f),children:(0,l.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,l.jsx)(P,{src:"".concat(u.prefix,"data/").concat(o||"ConsoleChip".concat(p),".png"),alt:""}),(0,l.jsx)(i.Z,{children:(0,u.cleanUnderscore)(r)})]})}),(0,l.jsx)(c.Z,{direction:"row",gap:2,children:null==a?void 0:a.map((n,t)=>{var r,a,o,s,d,p,h,x;let m,{name:g,rawName:j,amount:Z}=n;if(j.includes("Spice")){let n=null==e?void 0:null===(r=e.account)||void 0===r?void 0:null===(a=r.cooking)||void 0===a?void 0:null===(o=a.spices)||void 0===o?void 0:null===(s=o.available)||void 0===s?void 0:s.find(e=>{let{rawName:n}=e;return n===j});m=(null==n?void 0:n.amount)||0}else if(j.includes("CookingM")){let n=null==e?void 0:null===(d=e.account)||void 0===d?void 0:null===(p=d.cooking)||void 0===p?void 0:null===(h=p.meals)||void 0===h?void 0:h.find(e=>{let{name:n}=e;return n===g});m=(null==n?void 0:n.amount)||0}else m=(0,z.ju)(null==e?void 0:null===(x=e.account)||void 0===x?void 0:x.storage,j,!0,!0);return(0,l.jsxs)(c.Z,{alignItems:"center",gap:1,children:[(0,l.jsx)(v.Z,{title:(0,u.cleanUnderscore)(g),children:(0,l.jsx)(P,{src:"".concat(u.prefix,"data/").concat(j,".png"),alt:""})}),(0,l.jsx)(v.Z,{title:"".concat((0,u.notateNumber)(Z)," / ").concat((0,u.notateNumber)(m)),children:(0,l.jsx)(i.Z,{color:Z<m?"success.light":"error.light",children:(0,u.notateNumber)(Z)})})]},"req-".concat(j,"-").concat(t))})})]})})},"items"+t)})})]},"rotation"+r)})},"rotation"+r)})})]})},E=()=>{var e;let{state:n}=(0,r.useContext)(a.I),{lab:t}=null==n?void 0:n.account;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.PB,{title:"Idleon Toolbox | Laboratory",description:"Keep track of your lab upgrades, lab connected players, chips and more"}),(0,l.jsx)(i.Z,{variant:"h2",textAlign:"center",mb:3,children:"Laboratory"}),(0,l.jsxs)(O.Z,{tabs:["Main frame","Console","Chips And Jewels Rotation"],children:[(0,l.jsx)(b,{...t,characters:null==n?void 0:n.characters,divinity:null==n?void 0:null===(e=n.account)||void 0===e?void 0:e.divinity}),(0,l.jsx)($,{...t,characters:null==n?void 0:n.characters}),(0,l.jsx)(q,{})]})]})}}},function(e){e.O(0,[4377,9774,2888,179],function(){return e(e.s=71767)}),_N_E=e.O()}]);