(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4495],{2761:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(4938)),l=t(5893),o=(0,i.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.Z=o},7954:function(e,n,t){var r=0/0,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=s||u||Function("return this")(),p=Object.prototype.toString,x=Math.max,m=Math.min,f=function(){return d.Date.now()};function h(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if("symbol"==typeof(n=e)||n&&"object"==typeof n&&"[object Symbol]"==p.call(n))return r;if(h(e)){var n,t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var s=o.test(e);return s||a.test(e)?c(e.slice(2),s?2:8):l.test(e)?r:+e}e.exports=function(e,n,t){var r,i,l,o,a,c,s=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(n){var t=r,l=i;return r=i=void 0,s=n,o=e.apply(l,t)}function g(e){var t=e-c,r=e-s;return void 0===c||t>=n||t<0||d&&r>=l}function Z(){var e,t,r,i=f();if(g(i))return b(i);a=setTimeout(Z,(e=i-c,t=i-s,r=n-e,d?m(r,l-t):r))}function b(e){return(a=void 0,p&&r)?v(e):(r=i=void 0,o)}function w(){var e,t=f(),l=g(t);if(r=arguments,i=this,c=t,l){if(void 0===a)return s=e=c,a=setTimeout(Z,n),u?v(e):o;if(d)return a=setTimeout(Z,n),v(c)}return void 0===a&&(a=setTimeout(Z,n)),o}return n=j(n)||0,h(t)&&(u=!!t.leading,l=(d="maxWait"in t)?x(j(t.maxWait)||0,n):l,p="trailing"in t?!!t.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=c=i=a=void 0},w.flush=function(){return void 0===a?o:b(f())},w}},7743:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/item-browser",function(){return t(9575)}])},3283:function(e,n,t){"use strict";var r=t(2729),i=t(5893),l=t(5934),o=t(9574),a=t(6447),c=t(5861),s=t(7720),u=t(5164),d=t(1909);function p(){let e=(0,r._)(["\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n"]);return p=function(){return e},e}let x=e=>{let n,{character:t,account:r,Type:l,description:p,lvReqToEquip:x,Class:f,rawName:h,displayName:j,Defence:v,Speed:g,Weapon_Power:Z,Reach:b,STR:w,AGI:y,WIS:I,LUK:S,UQ1txt:C,UQ1val:N,UQ2txt:_,UQ2val:Q,Upgrade_Slots_Left:T,desc_line1:E,desc_line2:U,desc_line3:W,desc_line4:O,desc_line5:k,desc_line6:M,desc_line7:P,desc_line8:B,Amount:A,Cooldown:F,capacity:R,capacityPerSlot:D,maxCapacity:L}=e,G=0,Y=null==j?void 0:j.includes("Golden");Y&&(G=(0,d.tE)(j,t,r));let z=[E,U,W,O,k,M,P,B].filter(e=>"Filler"!==e).join(" ").replace(/\[/,Y?(0,o.notateNumber)(G,"Small"):A).replace(/]/,F);return j&&"Empty"!==j&&"Locked"!==j?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{gap:1,direction:"row",alignItems:"center",children:[(0,i.jsx)(m,{src:"".concat(o.prefix,"data/").concat(h,".png"),alt:j}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"subtitle1",children:(0,o.cleanUnderscore)(j)})]}),(0,i.jsx)(s.Z,{flexItem:!0,sx:{my:2},color:"black"}),(null==l?void 0:l.includes("INVENTORY"))||(null==l?void 0:l.includes("CARRY"))?(0,i.jsxs)(a.Z,{alignitems:"flex-start",children:[l?(0,i.jsx)(u.uQ,{title:"Type",value:(0,o.cleanUnderscore)(l)}):null,R?(0,i.jsx)(u.uQ,{title:(null==l?void 0:l.includes("CARRY"))?"Base capacity":"Description",value:"".concat((0,o.cleanUnderscore)(R))}):null,D?(0,i.jsx)(u.uQ,{title:"Capacity per slot",value:"".concat((0,o.notateNumber)(D))}):null,L?(0,i.jsx)(u.uQ,{title:"Max capacity",value:"".concat((0,o.notateNumber)(L))}):null]}):(0,i.jsxs)(a.Z,{alignitems:"flex-start",children:[l?(0,i.jsx)(u.uQ,{title:"Type",value:(0,o.cleanUnderscore)(l)}):null,R?(0,i.jsx)(u.uQ,{title:"Description",value:"+".concat((0,o.cleanUnderscore)(R)," slots")}):null,p?(0,i.jsx)(u.uQ,{value:(0,o.cleanUnderscore)(p)}):null,z.length>0?(0,i.jsx)(u.uQ,{value:(0,o.cleanUnderscore)(z)}):null,g?(0,i.jsx)(u.uQ,{title:"Speed",value:g}):null,Z?(0,i.jsx)(u.uQ,{title:(n=(C||h).toLowerCase())?n.includes("mining")?"Mining Power":n.includes("fishin")?"Fishing Power":n.includes("choppin")?"Choppin Power":n.includes("catch")?"Catching Power":"Weapon Power":"Weapon Power",value:Z}):null,w?(0,i.jsx)(u.uQ,{title:"STR",value:w}):null,y?(0,i.jsx)(u.uQ,{title:"AGI",value:y}):null,I?(0,i.jsx)(u.uQ,{title:"WIS",value:I}):null,S?(0,i.jsx)(u.uQ,{title:"LUK",value:S}):null,v?(0,i.jsx)(u.uQ,{title:"Defence",value:v}):null,b?(0,i.jsx)(u.uQ,{title:"Reach",value:b}):null,C&&N?(0,i.jsx)(u.uQ,{title:"Misc",value:(0,o.cleanUnderscore)("+".concat(N).concat(C))}):null,_&&Q?(0,i.jsx)(u.uQ,{title:"Misc",value:(0,o.cleanUnderscore)("+".concat(Q).concat(_))}):null,T>0?(0,i.jsx)(u.uQ,{title:"Upgrade Slots Left",value:T}):null]})]}):null},m=l.Z.img(p());n.Z=x},5164:function(e,n,t){"use strict";t.d(n,{Gr:function(){return N},M5:function(){return j},Wd:function(){return C},iy:function(){return Z},j8:function(){return g},u3:function(){return S},uQ:function(){return v}});var r=t(2729),i=t(5893),l=t(7294),o=t(9574),a=t(6447),c=t(5861),s=t(1594),u=t(5934),d=t(1053),p=t(510);function x(){let e=(0,r._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return x=function(){return e},e}function m(){let e=(0,r._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return m=function(){return e},e}function f(){let e=(0,r._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return f=function(){return e},e}function h(){let e=(0,r._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return h=function(){return e},e}let j=(0,l.forwardRef)((e,n)=>{let{stat:t,icon:r}=e,{img:l,...s}=e;return(0,i.jsxs)(a.Z,{alignItems:"center",...s,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,i.jsx)("img",{...l,src:"".concat(o.prefix,"data/").concat(r,".png"),alt:""}),(0,i.jsx)(c.Z,{variant:"body1",component:"span",children:t})]})});j.displayName="IconWithText";let v=e=>{let{title:n,value:t,boldTitle:r,titleStyle:l={}}=e;return(0,i.jsxs)(a.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,i.jsxs)(c.Z,{style:l,fontWeight:r?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,i.jsx)(c.Z,{fontSize:15,component:"span",children:t})]})},g=(0,u.Z)(s.Z)(x()),Z=e=>{let{cardName:n,stars:t,cardIndex:r,name:l,variant:a,rawName:c,amount:s,nextLevelReq:u}=e,p="cardSet"===a?"".concat(o.prefix,"data/").concat(c,".png"):"".concat(o.prefix,"data/2Cards").concat(r,".png");return(0,i.jsxs)(i.Fragment,{children:[t>0?(0,i.jsx)(I,{src:"".concat(o.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,i.jsx)(d.Z,{title:(0,i.jsx)(b,{...e,cardName:"cardSet"===a?l:n,nextLevelReq:u,amount:s}),children:(0,i.jsx)(y,{isCardSet:"cardSet"===a,amount:s,src:p,alt:""})})]})},b=e=>{let{displayName:n,effect:t,bonus:r,stars:l,showInfo:s,nextLevelReq:u,amount:d}=e,x=r;return s&&(x=(0,p.BZ)({bonus:r,stars:l})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(n)}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(t.replace("{",x))}),s?(0,i.jsx)(a.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,t)=>(0,i.jsxs)(a.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,i.jsx)(c.Z,{children:"Base"}):(0,i.jsx)(w,{src:"".concat(o.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,i.jsx)(c.Z,{children:r*(t+1)})]},"".concat(n,"-").concat(t)))}):null,d>=u?(0,i.jsxs)(a.Z,{children:["You've collected ",(0,o.numberWithCommas)(d)," cards"]}):u>0?(0,i.jsxs)(a.Z,{children:["Progress: ",(0,o.numberWithCommas)(d)," / ",(0,o.numberWithCommas)(u)]}):null]})},w=u.Z.img(m()),y=u.Z.img(f(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),I=u.Z.img(h()),S=e=>{let{level:n,funcX:t,x1:r,x2:l,funcY:s,y1:u,y2:d,description:p,name:x,talentId:m}=e,f=n>0?(0,o.growth)(t,n,r,l):0,h=n>0?(0,o.growth)(s,n,u,d):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon").concat(m,".png"),alt:""}),(0,i.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(x)})]}),(0,i.jsx)(c.Z,{children:(0,o.cleanUnderscore)(p).replace("{",f).replace("}",h)})]})},C=e=>{let{players:n,characters:t}=e;return(0,i.jsx)(a.Z,{gap:1,direction:"row",children:n.map(e=>{var n;let{index:r}=e;return(0,i.jsx)(d.Z,{title:null==t?void 0:null===(n=t[r])||void 0===n?void 0:n.name,children:(0,i.jsx)("img",{src:"".concat(o.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+r)})})},N=e=>{let{name:n}=e;return(0,i.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})}},9575:function(e,n,t){"use strict";t.r(n);var r=t(2729),i=t(5893),l=t(7294),o=t(2032),a=t(2458),c=t(5949),s=t(5861),u=t(6447),d=t(4054),p=t(476),x=t(8061),m=t(480),f=t(6872),h=t(417),j=t(1903),v=t(7109),g=t(6242),Z=t(4267),b=t(7357),w=t(9368),y=t(9574),I=t(5934),S=t(3283),C=t(9597),N=t(2962),_=t(4674),Q=t(2761),T=t(7954),E=t.n(T),U=t(1053);function W(){let e=(0,r._)(["\n  padding-left: 10px;\n  margin-top: 25px;\n\n  .main-header {\n    font-size: 22px;\n    font-weight: bold;\n  }\n\n  .sub-header {\n    margin-top: 15px;\n    margin-bottom: 2em;\n  }\n\n  .results {\n    margin-top: 15px;\n    padding-left: 15px;\n    display: grid;\n    grid-template-columns: repeat(2, 250px);\n\n    & .owner-name {\n      display: inline-block;\n      width: 150px;\n    }\n\n    & .amount {\n      color: #54c34d;\n    }\n  }\n"]);return W=function(){return e},e}function O(){let e=(0,r._)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n"]);return O=function(){return e},e}function k(){let e=(0,r._)(["\n  && {\n    color: white;\n  }\n"]);return k=function(){return e},e}let M=(0,c.D)({trim:!0,limit:250}),P=e=>{var n,t;let{}=e,{state:r}=(0,l.useContext)(C.I),[c,w]=(0,l.useState)(""),[I,T]=(0,l.useState)(),[W,O]=(0,l.useState)(),[k,P]=(0,l.useState)(),[R,D]=(0,l.useState)("name"),[L,G]=(0,l.useState)(!1),Y=(0,l.useMemo)(()=>(0,a.tP)(null==r?void 0:r.characters,L),[L]),z=(0,l.useMemo)(()=>(0,a.Nx)(null==r?void 0:r.characters,null==r?void 0:r.account),[null==r?void 0:r.characters,null==r?void 0:r.account]);(0,l.useEffect)(()=>{O(o.itemsArray),(null==r?void 0:r.characters)||(null==r?void 0:r.account)?T(L?[...z||[],...Y||[]]:z):T(o.itemsArray)},[r,L]),(0,l.useEffect)(()=>{if(c&&"name"===R){let e=(0,a.QU)(I,null==c?void 0:c.displayName);P(e)}else if(c&&"description"===R){let e=(0,a.wA)(I,c);P(e)}else P([])},[c,L,I]),(0,l.useEffect)(()=>{w("")},[R]);let $=E()(e=>{w(e.target.value)},100);return(0,i.jsxs)(B,{children:[(0,i.jsx)(N.PB,{title:"Idleon Toolbox | Item Browser",description:"Browse all of your existing items with a handy search"}),(0,i.jsx)(s.Z,{my:2,variant:"h2",children:"Item Browser"}),(0,i.jsx)(s.Z,{variant:"subtitle1",children:"Browse all items in your account!"}),(0,i.jsx)(s.Z,{mb:4,variant:"subtitle1",children:"The amount of items you own will be displayed below the item's display"}),(0,i.jsx)(u.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{id:"demo-radio-buttons-group-label",children:"Search by"}),(0,i.jsxs)(x.Z,{row:!0,"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"name",name:"radio-buttons-group",onChange:e=>D(e.target.value),children:[(0,i.jsx)(m.Z,{value:"name",control:(0,i.jsx)(f.Z,{}),label:"Item Name"}),(0,i.jsx)(m.Z,{value:"description",control:(0,i.jsx)(f.Z,{}),label:"Item Description"})]})]})}),(0,i.jsxs)(u.Z,{direction:"row",alignItems:"center",gap:2,children:["name"===R&&(null==W?void 0:W.length)>0?(0,i.jsx)(h.Z,{id:"item-browser",value:c,onChange:(e,n)=>{w(n)},autoComplete:!0,options:[c,...W],filterSelectedOptions:!0,filterOptions:M,getOptionLabel:e=>{var n;return(null==e?void 0:e.displayName)?null==e?void 0:null===(n=e.displayName)||void 0===n?void 0:n.replace(/_/g," "):""},renderOption:(e,n)=>{var t;return(0,l.createElement)(u.Z,{...e,key:e.id,gap:2,direction:"row",children:[(0,i.jsx)("img",{width:24,height:24,src:"".concat(y.prefix,"data/").concat(null==n?void 0:n.rawName,".png"),alt:""},"img-".concat(e.id)),(0,i.jsx)(s.Z,{children:null==n?void 0:null===(t=n.displayName)||void 0===t?void 0:t.replace(/_/g," ")},"text-".concat(e.id))]})},style:{width:300},renderInput:e=>(0,i.jsx)(A,{...e,label:"Item Name",variant:"outlined"})}):null,"description"===R?(0,i.jsx)(j.Z,{sx:{mt:1},placeholder:"Type anything",onChange:e=>$(e),InputProps:{endAdornment:(0,i.jsx)(v.Z,{position:"end",children:(0,i.jsx)(_.Z,{children:(0,i.jsx)(Q.Z,{})})})}}):null,(0,i.jsx)(m.Z,{control:(0,i.jsx)(F,{checked:L,onChange:()=>G(!L),name:"Include Equipped Items",color:"default"}),label:"Include Equipped Items"})]}),"name"===R?(0,i.jsx)(s.Z,{component:"div",variant:"caption",sx:{width:300,mt:1},children:"Start to write to narrow down the results (max of 250 items)"}):null,c&&"name"===R?(0,i.jsx)(g.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(S.Z,{style:{marginTop:15},...c})})}):null,c&&"description"===R?(0,i.jsx)(u.Z,{direction:"row",gap:3,flexWrap:"wrap",flexShrink:0,flexGrow:0,children:Array.isArray(k)&&(null==k?void 0:k.map((e,n)=>{var t;return(0,i.jsx)(b.Z,{sx:{width:200,height:"fit-content"},children:(0,i.jsx)(U.Z,{title:null==e?void 0:null===(t=e.owners)||void 0===t?void 0:t.join(", "),children:(0,i.jsx)(g.Z,{sx:{my:2},children:(0,i.jsx)(Z.Z,{children:(0,i.jsx)(S.Z,{style:{marginTop:15},...e})})})})},(null==e?void 0:e.rawName)+n)}))}):null,"name"===R&&k&&(null===(n=Object.keys(k))||void 0===n?void 0:n.length)>0?(0,i.jsx)(g.Z,{sx:{my:2,width:"fit-content"},children:(0,i.jsx)(Z.Z,{children:null===(t=Object.keys(k))||void 0===t?void 0:t.map((e,n)=>{var t,r;return(0,i.jsxs)(u.Z,{direction:"row",gap:2,children:[(0,i.jsx)("span",{className:"owner-name",children:e}),(null==k?void 0:null===(t=k[e])||void 0===t?void 0:t.amount)?(0,i.jsxs)(s.Z,{color:"success.light",className:"amount",children:["(",(0,y.kFormatter)(null==k?void 0:null===(r=k[e])||void 0===r?void 0:r.amount),")"]}):""]},e+n)})})}):null]})},B=I.Z.div(W()),A=(0,I.Z)(j.Z)(O()),F=(0,I.Z)(w.Z)(k());n.default=P}},function(e){e.O(0,[7419,9030,3536,9774,2888,179],function(){return e(e.s=7743)}),_N_E=e.O()}]);