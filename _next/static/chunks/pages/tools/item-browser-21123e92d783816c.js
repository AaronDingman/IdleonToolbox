(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{97743:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-browser",function(){return t(49575)}])},63283:function(e,n,t){"use strict";var l=t(82729),r=t(85893),i=t(61599),a=t(39574),o=t(51233),c=t(15861),s=t(67720),u=t(25164),d=t(91909);function x(){let e=(0,l._)(["\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n"]);return x=function(){return e},e}let p=i.Z.img(x());n.Z=e=>{let n,{character:t,account:l,Type:i,description:x,lvReqToEquip:h,Class:m,rawName:j,displayName:f,Defence:g,Speed:v,Weapon_Power:Z,Reach:w,STR:b,AGI:y,WIS:I,LUK:N,UQ1txt:C,UQ1val:S,UQ2txt:_,UQ2val:Q,Upgrade_Slots_Left:U,desc_line1:k,desc_line2:E,desc_line3:W,desc_line4:P,desc_line5:T,desc_line6:B,desc_line7:A,desc_line8:M,Amount:O,Cooldown:R,capacity:F,capacityPerSlot:D,maxCapacity:G}=e,L=0,Y=null==f?void 0:f.includes("Golden");Y&&(L=(0,d.tE)(f,t,l));let q=[k,E,W,P,T,B,A,M].filter(e=>"Filler"!==e).join(" ").replace(/\[/,Y?(0,a.notateNumber)(L,"Small"):O).replace(/]/,R);return f&&"Empty"!==f&&"Locked"!==f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{gap:1,direction:"row",alignItems:"center",children:[(0,r.jsx)(p,{src:"".concat(a.prefix,"data/").concat(j,".png"),alt:f}),(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"subtitle1",children:(0,a.cleanUnderscore)(f)})]}),(0,r.jsx)(s.Z,{flexItem:!0,sx:{my:2},color:"black"}),(null==i?void 0:i.includes("INVENTORY"))||(null==i?void 0:i.includes("CARRY"))?(0,r.jsxs)(o.Z,{alignitems:"flex-start",children:[i?(0,r.jsx)(u.uQ,{title:"Type",value:(0,a.cleanUnderscore)(i)}):null,F?(0,r.jsx)(u.uQ,{title:(null==i?void 0:i.includes("CARRY"))?"Base capacity":"Description",value:"".concat((0,a.cleanUnderscore)(F))}):null,D?(0,r.jsx)(u.uQ,{title:"Capacity per slot",value:"".concat((0,a.notateNumber)(D))}):null,G?(0,r.jsx)(u.uQ,{title:"Max capacity",value:"".concat((0,a.notateNumber)(G))}):null]}):(0,r.jsxs)(o.Z,{alignitems:"flex-start",children:[i?(0,r.jsx)(u.uQ,{title:"Type",value:(0,a.cleanUnderscore)(i)}):null,F?(0,r.jsx)(u.uQ,{title:"Description",value:"+".concat((0,a.cleanUnderscore)(F)," slots")}):null,x?(0,r.jsx)(u.uQ,{value:(0,a.cleanUnderscore)(x)}):null,q.length>0?(0,r.jsx)(u.uQ,{value:(0,a.cleanUnderscore)(q)}):null,v?(0,r.jsx)(u.uQ,{title:"Speed",value:v}):null,Z?(0,r.jsx)(u.uQ,{title:(n=(C||j).toLowerCase())?n.includes("mining")?"Mining Power":n.includes("fishin")?"Fishing Power":n.includes("choppin")?"Choppin Power":n.includes("catch")?"Catching Power":"Weapon Power":"Weapon Power",value:Z}):null,b?(0,r.jsx)(u.uQ,{title:"STR",value:b}):null,y?(0,r.jsx)(u.uQ,{title:"AGI",value:y}):null,I?(0,r.jsx)(u.uQ,{title:"WIS",value:I}):null,N?(0,r.jsx)(u.uQ,{title:"LUK",value:N}):null,g?(0,r.jsx)(u.uQ,{title:"Defence",value:g}):null,w?(0,r.jsx)(u.uQ,{title:"Reach",value:w}):null,C&&S?(0,r.jsx)(u.uQ,{title:"Misc",value:(0,a.cleanUnderscore)("+".concat(S).concat(C))}):null,_&&Q?(0,r.jsx)(u.uQ,{title:"Misc",value:(0,a.cleanUnderscore)("+".concat(Q).concat(_))}):null,U>0?(0,r.jsx)(u.uQ,{title:"Upgrade Slots Left",value:U}):null]})]}):null}},25164:function(e,n,t){"use strict";t.d(n,{Gr:function(){return S},M5:function(){return f},Wd:function(){return C},iy:function(){return Z},j8:function(){return v},u3:function(){return N},uQ:function(){return g}});var l=t(82729),r=t(85893),i=t(67294),a=t(39574),o=t(51233),c=t(15861),s=t(49425),u=t(61599),d=t(51053),x=t(60510);function p(){let e=(0,l._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return p=function(){return e},e}function h(){let e=(0,l._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return h=function(){return e},e}function m(){let e=(0,l._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return m=function(){return e},e}function j(){let e=(0,l._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return j=function(){return e},e}let f=(0,i.forwardRef)((e,n)=>{let{stat:t,icon:l}=e,{img:i,...s}=e;return(0,r.jsxs)(o.Z,{alignItems:"center",...s,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,r.jsx)("img",{...i,src:"".concat(a.prefix,"data/").concat(l,".png"),alt:""}),(0,r.jsx)(c.Z,{variant:"body1",component:"span",children:t})]})});f.displayName="IconWithText";let g=e=>{let{title:n,value:t,boldTitle:l,titleStyle:i={}}=e;return(0,r.jsxs)(o.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,r.jsxs)(c.Z,{style:i,fontWeight:l?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,r.jsx)(c.Z,{fontSize:15,component:"span",children:t})]})},v=(0,u.Z)(s.Z)(p()),Z=e=>{let{cardName:n,stars:t,cardIndex:l,name:i,variant:o,rawName:c,amount:s,nextLevelReq:u}=e,x="cardSet"===o?"".concat(a.prefix,"data/").concat(c,".png"):"".concat(a.prefix,"data/2Cards").concat(l,".png");return(0,r.jsxs)(r.Fragment,{children:[t>0?(0,r.jsx)(I,{src:"".concat(a.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,r.jsx)(d.Z,{title:(0,r.jsx)(w,{...e,cardName:"cardSet"===o?i:n,nextLevelReq:u,amount:s}),children:(0,r.jsx)(y,{isCardSet:"cardSet"===o,amount:s,src:x,alt:""})})]})},w=e=>{let{displayName:n,effect:t,bonus:l,stars:i,showInfo:s,nextLevelReq:u,amount:d}=e,p=l;return s&&(p=(0,x.BZ)({bonus:l,stars:i})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(n)}),(0,r.jsx)(c.Z,{children:(0,a.cleanUnderscore)(t.replace("{",p))}),s?(0,r.jsx)(o.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,t)=>(0,r.jsxs)(o.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,r.jsx)(c.Z,{children:"Base"}):(0,r.jsx)(b,{src:"".concat(a.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,r.jsx)(c.Z,{children:l*(t+1)})]},"".concat(n,"-").concat(t)))}):null,d>=u?(0,r.jsxs)(o.Z,{children:["You've collected ",(0,a.numberWithCommas)(d)," cards"]}):u>0?(0,r.jsxs)(o.Z,{children:["Progress: ",(0,a.numberWithCommas)(d)," / ",(0,a.numberWithCommas)(u)]}):null]})},b=u.Z.img(h()),y=u.Z.img(m(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),I=u.Z.img(j()),N=e=>{let{level:n,funcX:t,x1:l,x2:i,funcY:s,y1:u,y2:d,description:x,name:p,talentId:h}=e,m=n>0?(0,a.growth)(t,n,l,i):0,j=n>0?(0,a.growth)(s,n,u,d):0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,r.jsx)("img",{src:"".concat(a.prefix,"data/UISkillIcon").concat(h,".png"),alt:""}),(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,a.cleanUnderscore)(p)})]}),(0,r.jsx)(c.Z,{children:(0,a.cleanUnderscore)(x).replace("{",m).replace("}",j)})]})},C=e=>{let{players:n,characters:t}=e;return(0,r.jsx)(o.Z,{gap:1,direction:"row",children:n.map(e=>{var n;let{index:l}=e;return(0,r.jsx)(d.Z,{title:null==t?void 0:null===(n=t[l])||void 0===n?void 0:n.name,children:(0,r.jsx)("img",{src:"".concat(a.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+l)})})},S=e=>{let{name:n}=e;return(0,r.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})}},49575:function(e,n,t){"use strict";t.r(n);var l=t(82729),r=t(85893),i=t(67294),a=t(72032),o=t(12458),c=t(21785),s=t(15861),u=t(51233),d=t(94054),x=t(40476),p=t(72890),h=t(50480),m=t(36872),j=t(417),f=t(61903),g=t(87109),v=t(66242),Z=t(44267),w=t(87357),b=t(69368),y=t(39574),I=t(61599),N=t(63283),C=t(41422),S=t(2962),_=t(93946),Q=t(42761),U=t(91296),k=t.n(U),E=t(51053);function W(){let e=(0,l._)(["\n\n  .main-header {\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .sub-header {\n    margin-top: 15px;\n    margin-bottom: 2em;\n  }\n\n  .results {\n    margin-top: 15px;\n    padding-left: 15px;\n    display: grid;\n    grid-template-columns: repeat(2, 250px);\n\n    & .owner-name {\n      display: inline-block;\n      width: 150px;\n    }\n\n    & .amount {\n      color: #54c34d;\n    }\n  }\n"]);return W=function(){return e},e}function P(){let e=(0,l._)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return P=function(){return e},e}function T(){let e=(0,l._)(["\n  && {\n    color: white;\n  }\n"]);return T=function(){return e},e}let B=(0,c.D)({trim:!0,limit:250}),A=I.Z.div(W()),M=(0,I.Z)(f.Z)(P()),O=(0,I.Z)(b.Z)(T());n.default=e=>{var n,t;let{}=e,{state:l}=(0,i.useContext)(C.I),[c,b]=(0,i.useState)(""),[I,U]=(0,i.useState)(),[W,P]=(0,i.useState)(),[T,R]=(0,i.useState)(),[F,D]=(0,i.useState)("name"),[G,L]=(0,i.useState)(!1),Y=(0,i.useMemo)(()=>(0,o.tP)(null==l?void 0:l.characters,G),[G]),q=(0,i.useMemo)(()=>(0,o.Nx)(null==l?void 0:l.characters,null==l?void 0:l.account),[null==l?void 0:l.characters,null==l?void 0:l.account]);(0,i.useEffect)(()=>{P(a.itemsArray),(null==l?void 0:l.characters)||(null==l?void 0:l.account)?U(G?[...q||[],...Y||[]]:q):U(a.itemsArray)},[l,G]),(0,i.useEffect)(()=>{if(c&&"name"===F){let e=(0,o.QU)(I,null==c?void 0:c.displayName);R(e)}else if(c&&"description"===F){let e=(0,o.wA)(I,c);R(e)}else R([])},[c,G,I]),(0,i.useEffect)(()=>{b("")},[F]);let X=k()(e=>{b(e.target.value)},100);return(0,r.jsxs)(A,{children:[(0,r.jsx)(S.PB,{title:"Idleon Toolbox | Item Browser",description:"Browse all of your existing items with a handy search"}),(0,r.jsx)(s.Z,{my:2,variant:"h2",children:"Item Browser"}),(0,r.jsx)(s.Z,{variant:"subtitle1",children:"Browse all items in your account!"}),(0,r.jsx)(s.Z,{mb:4,variant:"subtitle1",children:"The amount of items you own will be displayed below the item's display"}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(x.Z,{id:"demo-radio-buttons-group-label",children:"Search by"}),(0,r.jsxs)(p.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"name",name:"radio-buttons-group",onChange:e=>D(e.target.value),children:[(0,r.jsx)(h.Z,{value:"name",control:(0,r.jsx)(m.Z,{}),label:"Item Name"}),(0,r.jsx)(h.Z,{value:"description",control:(0,r.jsx)(m.Z,{}),label:"Item Description"})]})]})}),(0,r.jsxs)(u.Z,{direction:"row",alignItems:"center",gap:2,children:["name"===F&&(null==W?void 0:W.length)>0?(0,r.jsx)(j.Z,{id:"item-browser",value:c,onChange:(e,n)=>{b(n)},autoComplete:!0,options:[c,...W],filterSelectedOptions:!0,filterOptions:B,getOptionLabel:e=>{var n;return(null==e?void 0:e.displayName)?null==e?void 0:null===(n=e.displayName)||void 0===n?void 0:n.replace(/_/g," "):""},renderOption:(e,n)=>{var t;return(0,i.createElement)(u.Z,{...e,key:e.id,gap:2,direction:"row",children:[(0,r.jsx)("img",{width:24,height:24,src:"".concat(y.prefix,"data/").concat(null==n?void 0:n.rawName,".png"),alt:""},"img-".concat(e.id)),(0,r.jsx)(s.Z,{children:null==n?void 0:null===(t=n.displayName)||void 0===t?void 0:t.replace(/_/g," ")},"text-".concat(e.id))]})},style:{width:300},renderInput:e=>(0,r.jsx)(M,{...e,label:"Item Name",variant:"outlined"})}):null,"description"===F?(0,r.jsx)(f.Z,{sx:{mt:1},placeholder:"Type anything",onChange:e=>X(e),InputProps:{endAdornment:(0,r.jsx)(g.Z,{position:"end",children:(0,r.jsx)(_.Z,{children:(0,r.jsx)(Q.Z,{})})})}}):null,(0,r.jsx)(h.Z,{control:(0,r.jsx)(O,{checked:G,onChange:()=>L(!G),name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]}),"name"===F?(0,r.jsx)(s.Z,{component:"div",variant:"caption",sx:{width:300,mt:1},children:"Start to write to narrow down the results (max of 250 items)"}):null,c&&"name"===F?(0,r.jsx)(v.Z,{sx:{my:2,width:"fit-content"},children:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(N.Z,{style:{marginTop:15},...c})})}):null,c&&"description"===F?(0,r.jsx)(u.Z,{direction:"row",gap:3,flexWrap:"wrap",flexShrink:0,flexGrow:0,children:Array.isArray(T)&&(null==T?void 0:T.map((e,n)=>{var t;return(0,r.jsx)(w.Z,{sx:{width:200,height:"fit-content"},children:(0,r.jsx)(E.Z,{title:null==e?void 0:null===(t=e.owners)||void 0===t?void 0:t.join(", "),children:(0,r.jsx)(v.Z,{sx:{my:2},children:(0,r.jsx)(Z.Z,{children:(0,r.jsx)(N.Z,{style:{marginTop:15},...e})})})})},(null==e?void 0:e.rawName)+n)}))}):null,"name"===F&&T&&(null===(n=Object.keys(T))||void 0===n?void 0:n.length)>0?(0,r.jsx)(v.Z,{sx:{my:2,width:"fit-content"},children:(0,r.jsx)(Z.Z,{children:null===(t=Object.keys(T))||void 0===t?void 0:t.map((e,n)=>{var t,l;return(0,r.jsxs)(u.Z,{direction:"row",gap:2,children:[(0,r.jsx)("span",{className:"owner-name",children:e}),(null==T?void 0:null===(t=T[e])||void 0===t?void 0:t.amount)?(0,r.jsxs)(s.Z,{color:"success.light",className:"amount",children:["(",(0,y.kFormatter)(null==T?void 0:null===(l=T[e])||void 0===l?void 0:l.amount),")"]}):""]},e+n)})})}):null]})}}},function(e){e.O(0,[4377,9584,3103,9774,2888,179],function(){return e(e.s=97743)}),_N_E=e.O()}]);