(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{84986:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/stamps",function(){return e(19450)}])},10372:function(n,t,e){"use strict";var l=e(82729),i=e(85893),a=e(39574),o=e(61599),r=e(15861),c=e(51233);function d(){let n=(0,l._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return d=function(){return n},n}let s=o.Z.img(d());t.Z=n=>{let{centered:t=!0,style:e={},money:l,title:o="Total Money",maxCoins:d=5}=n;return(0,i.jsxs)("div",{style:e,children:[o?(0,i.jsx)(r.Z,{style:{textAlign:"center"},children:o}):null,(0,i.jsx)(c.Z,{flexWrap:"wrap",justifyContent:t?"center":"flex-start",direction:"row",gap:2.3,children:null==l?void 0:l.map((n,t)=>{let[e,l]=n;return t<d&&Number(l)>0?(0,i.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(s,{src:"".concat(a.prefix,"data/Coins").concat(e,".png"),alt:""}),(0,i.jsx)(r.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(l)})]},l+""+e):null})})]})}},19450:function(n,t,e){"use strict";e.r(t);var l=e(82729),i=e(85893),a=e(98396),o=e(15861),r=e(87357),c=e(51233),d=e(66242),s=e(44267),u=e(50480),v=e(69368),m=e(61903),p=e(11703),x=e(40044),h=e(67294),g=e(41422),j=e(39574),f=e(61599),Z=e(29222),y=e(10372),b=e(51053),w=e(91296),C=e.n(w),_=e(2962),N=e(65492),I=e(12458),M=e(72032),S=e(91909);function k(){let n=(0,l._)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transform: translate(10%, -50%);\n  position: absolute;\n  top: 0;\n  right: 0;\n"]);return k=function(){return n},n}function E(){let n=(0,l._)(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return E=function(){return n},n}function P(){let n=(0,l._)(["\n  opacity: ",";\n"]);return P=function(){return n},n}function A(){let n=(0,l._)(["\n  width: 32px;\n  height: 32px;\n  opacity: ",";\n"]);return A=function(){return n},n}let B=f.Z.div(k()),G=f.Z.img(E()),O=n=>{let{func:t,level:e,goalLevel:l,x1:a,x2:r,displayName:c,effect:d,multiplier:s=1,goalBonus:u}=n,v=(0,j.growth)(t,e,a,r,!0)*s;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"h5",children:(0,j.cleanUnderscore)(c)}),(0,i.jsxs)(o.Z,{sx:{color:e>0&&s>1?"multi":""},variant:"body1",children:["+",(0,j.cleanUnderscore)(d.replace(/\+{/,v))]}),e!==l?(0,i.jsxs)(o.Z,{mt:1,sx:{color:e>0&&s>1?"multi":""},variant:"body1",children:["Goal: +",(0,j.cleanUnderscore)(d.replace(/\+{/,u))]}):null]})},F=f.Z.img(P(),n=>{let{level:t}=n;return 0===t?.5:1}),q=f.Z.img(A(),n=>{let{hide:t}=n;return t?.5:1});t.default=()=>{var n,t,e,l,f,w,k;let{state:E}=(0,h.useContext)(g.I),P=(0,N.R)(null==E?void 0:null===(n=E.account)||void 0===n?void 0:n.rift,"Stamp_Mastery")?null==E?void 0:null===(t=E.account)||void 0===t?void 0:null===(e=t.accountOptions)||void 0===e?void 0:e[154]:0,A=null==E?void 0:null===(l=E.account)||void 0===l?void 0:null===(f=l.atoms)||void 0===f?void 0:f.stampReducer,[L,T]=(0,h.useState)(0),[U,R]=(0,h.useState)(),[V,W]=(0,h.useState)(A),[z,X]=(0,h.useState)(!1),[Y,K]=(0,h.useState)(!1),D=(0,a.Z)(n=>n.breakpoints.down("md"),{noSsr:!0}),H=()=>{var n,t,e,l;let i=null===(n=Object.keys(null==E?void 0:null===(t=E.account)||void 0===t?void 0:t.stamps))||void 0===n?void 0:n[L];return null==E?void 0:null===(e=E.account)||void 0===e?void 0:null===(l=e.stamps)||void 0===l?void 0:l[i]},J=(0,h.useMemo)(()=>H(),[L]),Q=(n,t,e,l)=>{let i=(null==U?void 0:U[n])-t,a="gold"===e?ne:nt;if(i<=0){let n=a(t,l);return"material"===e?Math.floor(n):n}let o=Array(i||0).fill(1).map((n,t)=>t+1),r=o.reduce((n,i)=>{if("material"===e&&(t+i)%(null==l?void 0:l.reqItemMultiplicationLevel)==0||"gold"===e){let e=a(t+i,l);return n+e}return n},a(t,l));return"material"===e?Math.floor(r):r},$=(0,h.useCallback)((n,t,e,l)=>Q(n,t,e,l),[U,V,z]),nn=(0,h.useCallback)((n,t,e)=>(0,S.tc)(n,t,e),[E]),nt=(n,t)=>{var e,l,i,a,o;let{reqItemMultiplicationLevel:r,baseMatCost:c,powMatBase:d}=t,s=(0,Z.YG)(null==E?void 0:null===(e=E.account)||void 0===e?void 0:null===(l=e.alchemy)||void 0===l?void 0:l.vials,"material_cost_for_stamps"),u=(0,Z.Vq)(null==E?void 0:null===(i=E.account)||void 0===i?void 0:null===(a=i.alchemy)||void 0===a?void 0:null===(o=a.p2w)||void 0===o?void 0:o.sigils,"ENVELOPE_PILE"),v=Math.max(.1,1-(V!==A?V:A)/100);return c*(P>0||z?.05:1)*v*(1/(1+u/100))*Math.pow(d,Math.pow(Math.round(n/r)-1,.8))*Math.max(.1,1-s/100)||0},ne=(n,t)=>{var e,l,i,a;let{reqItemMultiplicationLevel:o,baseCoinCost:r,powCoinBase:c}=t,d=(0,Z.YG)(null==E?void 0:null===(e=E.account)||void 0===e?void 0:null===(l=e.alchemy)||void 0===l?void 0:l.vials,"material_cost_for_stamps"),s=null==E?void 0:null===(i=E.account)||void 0===i?void 0:null===(a=i.bribes)||void 0===a?void 0:a[0],u=(null==s?void 0:s.done)?r*(1-(null==s?void 0:s.value)/100):r;return Math.floor(u*Math.pow(c-n/(n+5*o)*.25,n*(10/o))*Math.max(.1,1-d/100))},nl=C()((n,t)=>{let{value:e}=n.target;R({...U,[t]:e?parseInt(e):0})},100);return(0,i.jsxs)("div",{children:[(0,i.jsx)(_.PB,{title:"Idleon Toolbox | Stamps",description:"Keep track of your stamps levels and requirements"}),(0,i.jsx)(o.Z,{textAlign:"center",variant:"h2",mb:3,children:"Stamps"}),(0,i.jsx)(o.Z,{textAlign:"center",component:"div",variant:"caption",mb:3,children:"* Green border means you have enough material, money and space to craft"}),(0,i.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"center",my:1},children:[(0,i.jsxs)(c.Z,{gap:1,children:[(0,i.jsx)(d.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,i.jsx)("img",{src:"".concat(j.prefix,"data/GildedStamp.png"),alt:""}),P]})}),(0,i.jsx)(d.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,i.jsx)("img",{src:"".concat(j.prefix,"data/Atom0.png"),height:36,alt:""}),null!=A?A:0,"%"]})})]}),(0,i.jsxs)(c.Z,{sx:{mx:2},children:[(0,i.jsx)(u.Z,{control:(0,i.jsx)(v.Z,{name:"mini",checked:Y,onChange:()=>K(!Y),size:"small"}),label:"Subtract green stacks"}),(0,i.jsx)(u.Z,{control:(0,i.jsx)(v.Z,{name:"mini",checked:z,onChange:()=>X(!z),size:"small"}),label:"Force gilded stamp"}),(0,i.jsx)(m.Z,{label:"Stamp Reducer",value:V,onChange:n=>W(n.target.value),type:"number",InputProps:{inputProps:{min:0,max:90}}})]})]}),(0,i.jsx)(p.Z,{centered:!0,sx:{marginBottom:3},variant:D?"fullWidth":"standard",value:L,onChange:(n,t)=>{T(t)},children:null===(w=Object.keys(null==E?void 0:null===(k=E.account)||void 0===k?void 0:k.stamps))||void 0===w?void 0:w.map((n,t)=>(0,i.jsx)(x.Z,{label:n},"".concat(n,"-").concat(t)))}),(0,i.jsx)(c.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",gap:3,children:null==J?void 0:J.map((n,t)=>{var e,l,a,r;let u,v,p;let{displayName:x,rawName:g,level:f,itemReq:Z,multiplier:w=1,func:C,x1:_,x2:N,reqItemMultiplicationLevel:S}=n,k=(null==U?void 0:U[t])?(null==U?void 0:U[t])<f?f:null==U?void 0:U[t]:f,P=(0,j.growth)(C,k,_,N,!0)*w,A=null==Z?void 0:Z.map(e=>{var l,i,a,o,r,c;let{rawName:d}=e,s=(0,I.F6)(M.crafts[null===M.items||void 0===M.items?void 0:null===(l=M.items[d])||void 0===l?void 0:l.displayName]),m=$(t,f,"material",n),p=$(t,f,"gold",n),x=k%S==0;if(p&&(v=(null==E?void 0:null===(i=E.account)||void 0===i?void 0:null===(a=i.currencies)||void 0===a?void 0:a.rawMoney)>=p),(null==s?void 0:s.length)>0)u=null==s?void 0:s.every(n=>{var t,e,l;let{rawName:i,type:a,itemQuantity:o}=n;if("Equip"===a)return!0;let r=null===(t=null==E?void 0:null===(e=E.account)||void 0===e?void 0:null===(l=e.storage)||void 0===l?void 0:l.find(n=>{let{rawName:t}=n;return t===i}))||void 0===t?void 0:t.amount;return(r=Y?r-1e7:r)>=o*m});else{let n=null===(o=null==E?void 0:null===(r=E.account)||void 0===r?void 0:null===(c=r.storage)||void 0===c?void 0:c.find(n=>{let{rawName:t}=n;return t===d}))||void 0===o?void 0:o.amount;u=(n=Y?n-1e7:n)>=m}return{...e,materials:s,materialCost:m,goldCost:p,isMaterialCost:x,hasMaterials:u,hasMoney:v}}),L=nn(null===M.items||void 0===M.items?void 0:M.items[null==Z?void 0:null===(e=Z[0])||void 0===e?void 0:e.rawName],null==E?void 0:E.characters,null==E?void 0:E.account);return p=(null==L?void 0:L.maxCapacity)>=(null==A?void 0:null===(l=A[0])||void 0===l?void 0:l.materialCost),(0,i.jsx)(h.Fragment,{children:(0,i.jsx)(d.Z,{sx:{overflow:"visible",position:"relative",width:230,border:u&&v&&p&&f>0?"1px solid #81c784":""},children:(0,i.jsxs)(s.Z,{sx:{"&:last-child":{paddingBottom:4}},children:[f>0?(0,i.jsxs)(B,{children:[u?null:(0,i.jsx)(b.Z,{title:"Not enough ".concat((0,j.cleanUnderscore)(null==Z?void 0:null===(a=Z[0])||void 0===a?void 0:a.name)),children:(0,i.jsx)("img",{width:24,height:24,src:"".concat(j.prefix,"data/").concat(null==Z?void 0:null===(r=Z[0])||void 0===r?void 0:r.rawName,".png"),alt:""})}),v?null:(0,i.jsx)(b.Z,{title:"Not enough coins",children:(0,i.jsx)("img",{width:20,height:20,src:"".concat(j.prefix,"data/Coins5.png"),alt:""})}),p?null:(0,i.jsx)(b.Z,{title:"Not enough capacity",children:(0,i.jsx)("img",{width:24,height:24,style:{objectFit:"contain"},src:"".concat(j.prefix,"etc/Character.png"),alt:""})})]}):null,(0,i.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(c.Z,{alignItems:"center",children:[(0,i.jsx)(b.Z,{title:(0,i.jsx)(O,{...n,goalLevel:k,goalBonus:P}),children:(0,i.jsx)(F,{width:48,height:48,level:f,src:"".concat(j.prefix,"data/").concat(g,".png"),alt:""})}),(0,i.jsxs)(o.Z,{variant:"body1",children:["Lv. ",f]})]}),(0,i.jsx)(m.Z,{type:"number",sx:{width:90},defaultValue:k,onChange:n=>nl(n,t),label:"Goal",variant:"outlined",inputProps:{min:f||0}})]}),null==A?void 0:A.map((n,t)=>{var e;let{rawName:l,name:a,materialCost:r,isMaterialCost:d,goldCost:s}=n;return(0,i.jsxs)(c.Z,{gap:1,mt:2,children:[(0,i.jsxs)(c.Z,{gap:2,justifyContent:"center",direction:"row",alignItems:"center",children:[(0,i.jsx)(G,{src:"".concat(j.prefix,"data/SignStar3b.png"),alt:""}),(0,i.jsx)(o.Z,{children:isNaN(P)?0:P}),(0,i.jsx)(b.Z,{title:"Best to craft with ".concat(null!==(e=null==L?void 0:L.character)&&void 0!==e?e:"Nobody"," (Capacity: ").concat(isNaN(null==L?void 0:L.maxCapacity)?0:(0,j.notateNumber)(null==L?void 0:L.maxCapacity,"Big"),")"),children:(0,i.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)(q,{hide:!r||!d,src:"".concat(j.prefix,"data/").concat(l,".png"),alt:""}),r?(0,j.notateNumber)(r,"Big"):null]})})]}),(0,i.jsx)(y.Z,{title:"",money:(0,j.getCoinsArray)(s)})]},"".concat(l,"-").concat(a,"-").concat(t))})]})})},g+""+x+t)})})]})}}},function(n){n.O(0,[7341,9774,2888,179],function(){return n(n.s=84986)}),_N_E=n.O()}]);