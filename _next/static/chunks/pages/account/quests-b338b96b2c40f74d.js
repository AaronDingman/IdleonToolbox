(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8735],{86007:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/quests",function(){return t(9162)}])},10372:function(n,e,t){"use strict";var l=t(82729),r=t(85893),i=t(39574),s=t(61599),a=t(15861),o=t(51233);function c(){let n=(0,l._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return c=function(){return n},n}let u=s.Z.img(c());e.Z=n=>{let{centered:e=!0,style:t={},money:l,title:s="Total Money",maxCoins:c=5}=n;return(0,r.jsxs)("div",{style:t,children:[s?(0,r.jsx)(a.Z,{style:{textAlign:"center"},children:s}):null,(0,r.jsx)(o.Z,{flexWrap:"wrap",justifyContent:e?"center":"flex-start",direction:"row",gap:2.3,children:null==l?void 0:l.map((n,e)=>{let[t,l]=n;return e<c&&Number(l)>0?(0,r.jsxs)(o.Z,{justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(u,{src:"".concat(i.prefix,"data/Coins").concat(t,".png"),alt:""}),(0,r.jsx)(a.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(l)})]},l+""+t):null})})]})}},9162:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var l=t(85893),r=t(67294),i=t(16704),s=t(51233),a=t(33454),o=t(96420),c=t(82729),u=t(23508),d=t(8857),h=t(60888),x=t(27028),p=t(87357),m=t(38895),v=t(15861),g=t(49425),f=t(69661),j=t(67358),Z=t(22797),w=t(61599),b=t(36599),y=t(36270),C=t(54123),N=t(9601),_=t(17494),q=t(51221),I=t(72162),W=t(51053),O=t(10372),S=t(39574);function k(){let n=(0,c._)(["\n  width: 40px;\n  height: 40px;\n"]);return k=function(){return n},n}function E(){let n=(0,c._)(["\n  width: 12px;\n  height: 12px;\n  background-color: ",";\n  border-radius: 50%;\n  border: 1px solid white;\n"]);return E=function(){return n},n}function T(){let n=(0,c._)(['\n  & .MuiCollapse-root .MuiList-root:not(:last-child):after {\n    content: "";\n    position: absolute;\n    bottom: -30px;\n    left: 20px;\n    height: 100%;\n    width: 2px;\n    background-color: #e6d1d1;\n  }\n\n  .MuiAccordionSummary-content {\n    display: flex;\n    align-items: center;\n\n    .npc-name {\n      margin-left: 10px;\n    }\n\n    & > img {\n      object-fit: contain;\n    }\n  }\n']);return T=function(){return n},n}function P(){let n=(0,c._)(["\n  && {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .quest-name-wrapper {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .characters {\n    display: flex;\n    align-items: center;\n  }\n\n  .npc-quests-wrapper {\n    .quest-name {\n    }\n  }\n"]);return P=function(){return n},n}function A(){let n=(0,c._)(["\n  width: 100%;\n  height: 53px;\n  object-fit: cover;\n  object-position: -20px;\n"]);return A=function(){return n},n}let R=n=>{let{rewards:e,itemReq:t,customArray:r}=n;return(0,l.jsxs)(s.Z,{gap:2,children:[(null==r?void 0:r.length)>0?(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(v.Z,{variant:"h6",fontWeight:"bold",children:"Requirements"}),(0,l.jsx)(s.Z,{children:null==r?void 0:r.map((n,e)=>{let{desc:t,value:r}=n;return(0,l.jsxs)("div",{children:[(0,S.cleanUnderscore)(t)," ",r]},t+""+e)})})]}):null,(null==t?void 0:t.length)>0?(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(v.Z,{variant:"h6",fontWeight:"bold",children:"Item Requirements"}),(0,l.jsx)(s.Z,{direction:"row",gap:2,children:null==t?void 0:t.map((n,e)=>{let{name:t,rawName:r,amount:i}=n;return(0,l.jsxs)(s.Z,{alignItems:"center",justifyContent:"center",children:[(0,l.jsx)(U,{className:"item-img",src:"".concat(S.prefix,"data/").concat(r,".png"),alt:""}),(0,l.jsx)(v.Z,{className:"amount",children:(0,S.numberWithCommas)(i)})]},t+""+e)})})]}):null,(null==e?void 0:e.length)>0?(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(v.Z,{variant:"h6",fontWeight:"bold",children:"Rewards"}),(0,l.jsx)(s.Z,{direction:"row",alignItems:"center",gap:2,children:null==e?void 0:e.map((n,e)=>{let t,{name:r,rawName:i,amount:a}=n;return t=i.includes("Experience")?"XP":i.includes("Talent")?"TalentBook1":i.includes("Recipes")?"SmithingRecipes".concat(i[i.length-1]):i,(0,l.jsx)("div",{className:"item-wrapper",title:(0,S.cleanUnderscore)(r),children:"COIN"!==i?(0,l.jsxs)(s.Z,{justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(U,{title:(0,S.cleanUnderscore)(r||i),src:"".concat(S.prefix,"data/").concat(t,".png"),alt:""}),(0,l.jsx)(v.Z,{className:"amount",children:(0,S.numberWithCommas)(a)})]}):(0,l.jsx)("div",{className:"coins",children:(0,l.jsx)(O.Z,{title:"",noShadow:!0,money:(0,S.getCoinsArray)(a)})})},r+""+e)})})]}):null]})},U=w.Z.img(k()),z=w.Z.div(E(),n=>{let{color:e}=n;return e}),L=(0,w.Z)(j.Z)(T()),M=(0,w.Z)(Z.Z)(P()),Q=w.Z.img(A());var B=n=>{let{quests:e,characters:t,totalCharacters:r,worldName:i}=n,a=n=>{switch(n){case 1:return(0,l.jsx)(h.Z,{style:{marginLeft:"auto",fontSize:24,color:"#23bb23"}});case 0:return(0,l.jsx)(d.Z,{alt:"",style:{marginLeft:"auto",width:24,height:24,fill:"#ff8d00"}});case -1:return(0,l.jsx)(x.Z,{style:{marginLeft:"auto",color:"#868484"}});default:return null}};return(0,l.jsxs)(p.Z,{sx:{width:{xs:350,sm:400}},children:[(0,l.jsx)(Q,{src:"".concat(S.prefix,"npcs/").concat(i,".png"),onError:n=>{n.target.src="".concat(S.prefix,"data/Wb5.png"),n.target.style.width="auto"},alt:""}),null==e?void 0:e[i].map((n,e)=>{var i;return(0,l.jsxs)(L,{TransitionProps:{unmountOnExit:!0},children:[(0,l.jsxs)(m.Z,{expandIcon:(0,l.jsx)(u.Z,{}),children:[(0,l.jsx)("img",{width:50,height:50,src:"".concat(S.prefix,"npcs/").concat(null==n?void 0:n.name,".gif"),alt:""}),(0,l.jsx)("span",{className:"npc-name",children:(0,S.cleanUnderscore)(null==n?void 0:n.name)}),a(null==n?void 0:n.questsStatus)]}),(0,l.jsx)(M,{children:(0,l.jsx)(b.Z,{sx:{m:0,p:0},children:null==n?void 0:null===(i=n.npcQuests)||void 0===i?void 0:i.map((i,a)=>{var o;let{Name:c,completed:u=[],progress:d=[]}=i;return(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(C.Z,{sx:{display:"none"}}),(0,l.jsxs)(N.Z,{children:[(0,l.jsx)(W.Z,{title:(0,l.jsx)(R,{...i,npcName:null==n?void 0:n.name}),children:(0,l.jsx)(_.Z,{sx:{width:15,height:15},color:(null==u?void 0:u.length)===r?"success":(null==u?void 0:u.length)===0&&0===d.length?"grey":"warning"})}),a<(null==n?void 0:null===(o=n.npcQuests)||void 0===o?void 0:o.length)-1?(0,l.jsx)(q.Z,{}):null]}),(0,l.jsxs)(I.Z,{children:[(0,l.jsx)(v.Z,{children:(0,S.cleanUnderscore)(c)}),(null==d?void 0:d.length)>0?(0,l.jsx)(s.Z,{direction:"row",flexWrap:"wrap",children:(0,l.jsx)(p.Z,{icons:1,...(null==d||d.length,{}),children:null==d?void 0:d.map(n=>{var e,r;let{charIndex:i,status:s}=n;return(0,l.jsx)(g.Z,{overlap:"circular",title:1===s?"Completed":-1===s?"Not started":"In progress",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,l.jsx)(z,{color:1===s?"#23bb23":-1===s?"#868484":"#ff8d00"}),children:(0,l.jsx)(f.Z,{title:null==t?void 0:null===(e=t[i])||void 0===e?void 0:e.name,alt:"",src:"".concat(S.prefix,"data/ClassIcons").concat(null===(r=t[i])||void 0===r?void 0:r.classIndex,".png")})},i+""+a)})})}):null]})]},(null==n?void 0:n.name)+""+e+a)})})})]},(null==n?void 0:n.name)+e)})]})},F=t(79597),X=t(2962),H=()=>{var n;let{state:e}=(0,r.useContext)(F.I),[t,c]=(0,r.useState)(),[u,d]=(0,r.useState)([0]);(0,r.useEffect)(()=>{var n;if(!u)return;let t={};for(let[l,r]of Object.entries(null==e?void 0:null===(n=e.account)||void 0===n?void 0:n.quests))t[l]=r.map(n=>{let e,{npcQuests:t,...l}=n,r=JSON.parse(JSON.stringify(t)),i=0,s=0;for(let[n,e]of Object.entries(r)){let t=h(null==e?void 0:e.completed)||[],l=h(null==e?void 0:e.progress)||[];r[n]={...e,completed:t,progress:l},t.length===(null==u?void 0:u.length)?i++:t.length>0&&(i+=.5),l.some(n=>{let{charIndex:e,status:t}=n;return(null==u?void 0:u.indexOf(e))!==-1&&-1!==t})&&s++}return e=0===i?s>0?0:-1:i===(null==t?void 0:t.length)?1:0,{...l,npcQuests:r,questsStatus:e}});c(t)},[u]);let h=n=>null==n?void 0:n.filter(n=>{let{charIndex:e}=n;return(null==u?void 0:u.indexOf(e))!==-1});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(X.PB,{title:"Idleon Toolbox | Quests",description:"Keep track of your characters' quests progression"}),u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.Z,{direction:"row",my:2,justifyContent:"center",flexWrap:"wrap",children:[(0,l.jsx)(a.Z,{size:"small",sx:{display:"flex",flexWrap:"wrap"},value:u,onChange:(n,e)=>{e.length&&d(e)},children:null==e?void 0:null===(n=e.characters)||void 0===n?void 0:n.map((n,e)=>(0,l.jsx)(o.Z,{title:null==n?void 0:n.name,value:e,children:(0,l.jsx)("img",{src:"".concat(S.prefix,"data/ClassIcons").concat(null==n?void 0:n.classIndex,".png"),alt:""})},(null==n?void 0:n.name)+""+e))}),(0,l.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap"},size:"small",children:(0,l.jsx)(o.Z,{onClick:()=>{var n,t;let l=(null==u?void 0:u.length)===(null==e?void 0:null===(n=e.characters)||void 0===n?void 0:n.length),r=Array.from(Array(l?1:null==e?void 0:null===(t=e.characters)||void 0===t?void 0:t.length).keys());d(r)},title:"Select all",value:"all",children:(0,l.jsx)(i.Z,{})})})]}),(0,l.jsxs)(s.Z,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:4,children:[(0,l.jsx)(B,{quests:t,totalCharacters:null==u?void 0:u.length,characters:null==e?void 0:e.characters,worldName:"Blunder_Hills"}),(0,l.jsx)(B,{quests:t,totalCharacters:null==u?void 0:u.length,characters:null==e?void 0:e.characters,worldName:"Yum-Yum_Desert"}),(0,l.jsx)(B,{quests:t,totalCharacters:null==u?void 0:u.length,characters:null==e?void 0:e.characters,worldName:"Frostbite_Tundra"}),(0,l.jsx)(B,{quests:t,totalCharacters:null==u?void 0:u.length,characters:null==e?void 0:e.characters,worldName:"Hyperion_Nebula"}),(0,l.jsx)(B,{quests:t,totalCharacters:null==u?void 0:u.length,characters:null==e?void 0:e.characters,worldName:"Smolderin'_Plateau"})]})]}):null]})}}},function(n){n.O(0,[294,9774,2888,179],function(){return n(n.s=86007)}),_N_E=n.O()}]);