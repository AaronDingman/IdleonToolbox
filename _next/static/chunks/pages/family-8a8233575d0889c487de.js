(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{6583:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Gn}});var i=t(2209),r=t(5893),a=t(7294),s=t(9163),c=t(9009),l=t(163),o=t(7665),d=t(809),u=t.n(d),p=t(266),m=t(282),x=t(5477);function v(){var n=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin-left: 10px;\n"]);return v=function(){return n},n}var h=s.ZP.div(v()),f=function(n){var e=n.handleImport,t=(0,a.useState)(!1),i=t[0],s=t[1],c=function(){var n=(0,p.Z)(u().mark((function n(){var t,i,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,navigator.clipboard.read();case 4:return t=n.sent,n.next=7,t[0].getType("text/plain");case 7:return i=n.sent,n.next=10,i.text();case 10:r=n.sent,a=JSON.parse(r),e(a),s(!1),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),console.log("Failed to load family JSON",n.t0),s(!1);case 20:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(h,{children:[(0,r.jsx)(m.Z,{variant:"contained",color:"primary",onClick:c,children:"Import JSON"}),i?(0,r.jsx)(x.Z,{size:"small",color:"secondary"}):null]})},g=t(5080),j=t(8362),w=t(7812),b=t(1423),y=t(5258),Z=t(2809),O=t(442),N=t(3133);function P(){var n=(0,i.Z)(["\n  width: 85px;\n  height: 85px;\n  border: 1px solid #7b7b7b8c;\n  background: url(",") no-repeat;\n  background-size: contain;\n\n  //@media (max-width: 1440px) {\n  //  width: 85px;\n  //  height: 85px;\n  //}\n  //\n  //@media (max-width: 370px) {\n  //  width: 60px;\n  //  height: 60px;\n  //}\n  //\n  //@media (max-width: 370px) {\n  //  width: 60px;\n  //  height: 60px;\n  //}\n"]);return P=function(){return n},n}function k(){var n=(0,i.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(2, max-content);\n  grid-template-rows: repeat(4, 85px);\n"]);return k=function(){return n},n}var S=s.ZP.div(k()),D=s.ZP.div(P(),(function(n){var e=n.img;return"None"!==e?"".concat(o.O4,"materials/").concat(e,".png"):""})),_=function(n){var e=n.equipment;return(0,r.jsx)(S,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name;return e>7?null:(0,r.jsx)(D,{"aria-label":t,role:"img",title:(0,o.Dq)(t),img:t},t+e)}))})};function C(){var n=(0,i.Z)(["\n  justify-self: center;\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return C=function(){return n},n}var q=s.ZP.div(C()),E=function(n){var e=n.bubbles;return(0,r.jsx)(q,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t="Sanic_Tools"===n?"Bug2":n;return(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"alchemy/").concat(t,".png"),alt:""},n+e)}))})};function I(){var n=(0,i.Z)(["\n  justify-self: center;\n  margin-bottom: 5px;\n  text-align: center;\n\n  > div {\n    font-size: 16px;\n    @media (max-width: 370px) {\n      font-size: 12px;\n    }\n  }\n\n  > img {\n    width: 38px;\n    height: 36px;\n    @media (max-width: 370px) {\n      width: 24px;\n      height: 24px;\n    }\n  }\n"]);return I=function(){return n},n}function J(){var n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(45px, 70px));\n  grid-template-rows: repeat(3, minmax(45px, 70px));\n  grid-auto-flow: column;\n  justify-content: center;  \n"]);return J=function(){return n},n}var L=s.ZP.div(J()),V=s.ZP.div(I()),z=function(n){var e,t=n.skills;return(0,r.jsx)(L,{children:null===(e=Object.keys(t))||void 0===e?void 0:e.map((function(n,e){var i=t[n];return"character"===n?null:(0,r.jsxs)(V,{children:[(0,r.jsx)("img",{title:n.capitalize(),src:"".concat(o.O4,"icons/").concat(n.capitalize(),"_Icon.png"),alt:""}),(0,r.jsxs)("div",{children:["LV ",i]})]},e)}))})};function B(){var n=(0,i.Z)(["\n  filter: ",";\n  opacity: ",";\n  justify-self: center;\n  width: 48px;\n  height: 48px;\n\n  @media (max-width: 370px) {\n    width: 36px;\n    height: 36px;\n  }\n"]);return B=function(){return n},n}function T(){var n=(0,i.Z)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(4, minmax(36px, max-content));\n  justify-self: center;\n"]);return T=function(){return n},n}function U(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){(0,Z.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var F=s.ZP.div(T()),R=s.ZP.img(B(),(function(n){return n.exists?"grayscale(0)":"grayscale(1)"}),(function(n){return n.exists?"1":"0.3"})),A=function(n){var e=n.bags,t=(0,a.useState)(),i=t[0],s=t[1];return(0,a.useEffect)((function(){s(e.reduce((function(n,e){var t=e.name;return W(W({},n),{},(0,Z.Z)({},t,!0))}),{}))}),[]),(0,r.jsx)(F,{children:i&&(null===o.xw||void 0===o.xw?void 0:o.xw.map((function(n,e){return(0,r.jsx)(R,{exists:i[n],title:(0,o.Dq)(n),src:"".concat(o.O4,"checklist/").concat(n,".png"),alt:""},n+e)})))})};function G(){var n=(0,i.Z)(["\n  justify-self: center;\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return G=function(){return n},n}var X=s.ZP.div(G()),Y=function(n){var e=n.products;return(0,r.jsx)(X,{children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,r.jsx)("img",{title:(0,o.Dq)(n),src:"".concat(o.O4,"materials/").concat(n,".png"),alt:""},n+e)}))})};function M(){var n=(0,i.Z)(["\n  justify-self: center;\n\n  .product-container {\n    position: relative;\n    display: inline-block;\n\n    .product-value {\n      position: absolute;\n      right: 0;\n      top: -5px;\n    }\n  }\n\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return M=function(){return n},n}var H=s.ZP.div(M()),K=function(n){var e=n.products;return(0,r.jsx)(H,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.item,i=n.value;return(0,r.jsxs)("div",{className:"product-container",children:[(0,r.jsx)("span",{className:"product-value",children:(0,o.x6)(i)}),(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"materials/").concat(t,".png"),alt:""})]},t+e)}))})};function Q(){var n=(0,i.Z)(["\n  text-align: center;\n\n\n  .title {\n    color: #8181de;\n    font-weight: bold;\n  }\n\n  .star-signs-wrapper {\n    display: flex;\n    justify-content: center;\n\n    > div {\n      text-align: center;\n      max-width: 250px;\n      > span {\n        margin: 0 5px;\n        display: block;\n\n        :nth-child(1) {\n          color: #3d85d0;\n          font-weight: bold;\n        }\n      }\n    }\n  }\n"]);return Q=function(){return n},n}var $=s.ZP.div(Q()),nn=function(n){var e=n.signs;return(0,r.jsxs)($,{children:[(0,r.jsx)("span",{className:"title",children:"Star Signs"}),(0,r.jsx)("div",{className:"star-signs-wrapper",children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name,i=n.description;return"None"!==t?(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:(0,o.Dq)(t)}),(0,r.jsx)("span",{children:(0,o.Dq)(i)})]},t+e):null}))})]})};function en(){var n=(0,i.Z)(["\n  position: relative;\n\n  .border {\n    position: absolute;\n    z-index: 1;\n  }\n\n  .card {\n    width: 58px;\n    height: 72px;\n    justify-self: center;\n    position: absolute;\n    left: 5px;\n    top: 5px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=(0,i.Z)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(4, minmax(36px, 60px));\n  grid-template-rows: repeat(2, minmax(36px, 100px));\n  justify-content: center;\n"]);return tn=function(){return n},n}var rn=s.ZP.div(tn()),an=s.ZP.div(en()),sn=function(n){var e,t=n.cards;return(0,r.jsx)(rn,{children:null===t||void 0===t||null===(e=t.equippedCards)||void 0===e?void 0:e.map((function(n,e){var t=n.cardName,i=n.stars,a=t.split("(",2)[0].trim().replace(/ /,"_");return"None"!==t?(0,r.jsxs)(an,{stars:i,children:[i>0?(0,r.jsx)("img",{className:"border",src:"".concat(o.O4,"cards/Tier").concat(i,"_Border.png"),alt:""}):null,(0,r.jsx)("img",{className:"card",title:t,src:"".concat(o.O4,"cards/").concat(a,"_Card.png"),alt:""})]},a+e):null}))})};function cn(){var n=(0,i.Z)(["\n  .obol-row {\n    text-align: center;\n  }\n\n  @media (max-width: 750px) {\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n\n  @media (max-width: 370px) {\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return cn=function(){return n},n}var ln=s.ZP.div(cn()),on=function(n){var e=n.obols,t=n.type;return(0,r.jsx)(ln,{children:("character"===t?[5,9,12,16,23]:[5,10,14,19,24]).map((function(n,t,i){var a=0===t?0:i[t-1],s=null===e||void 0===e?void 0:e.slice(a,n);return(0,r.jsx)("div",{className:"obol-row",children:null===s||void 0===s?void 0:s.map((function(n,e){var t=n.name,i=function(n,e){switch(n){case"Locked":return"Obol_Locked_".concat(e);case"Empty":return"Obol_Empty_".concat(e);default:return n}}(t,n.shape);return(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"materials/").concat(i,".png"),alt:""},t+e)}))},a+t)}))})};function dn(){var n=(0,i.Z)(["\n  margin-bottom: 15px;\n\n  .character-profile {\n    display: flex;\n    align-items: center;\n    margin: 15px 0;\n    min-height: 110px;\n\n    .list & {\n      justify-content: center;\n    }\n\n    > img {\n      margin-right: 10px;\n    }\n\n    @media (max-width: 750px) {\n      justify-content: center;\n    }\n  }\n\n\n  .name {\n    font-weight: bold;\n    color: ",";\n  }\n\n  .character-information-container {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    justify-content: center;\n\n    .small {\n      display: grid;\n      grid-template-rows: repeat(4, minmax(36px, 72px));\n      row-gap: 30px;\n    }\n\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n  }\n"]);return dn=function(){return n},n}var un=s.ZP.div(dn(),(function(n){return n.classColor||"white"})),pn=function(n){var e=n.name,t=n.level,i=n.class,a=n.equipment,s=n.tools,c=n.equippedBubbles,l=n.skillsInfo,d=n.invBagsUsed,u=n.anvil,p=n.printer,m=n.starSigns,x=n.cards,v=n.stats,h=n.obols,f=v||{},g=f.strength,j=f.agility,w=f.wisdom,b=f.luck;return(0,r.jsxs)(un,{classColor:null===o.JU||void 0===o.JU?void 0:o.JU[i],children:[(0,r.jsxs)("div",{className:"character-profile",children:[(0,r.jsx)("img",{src:"".concat(o.O4,"classes/").concat(i,".png"),alt:""}),(0,r.jsxs)("div",{className:"info",children:[(0,r.jsxs)("div",{className:"name",children:["Name: ",e]}),(0,r.jsxs)("div",{children:["Level: ",t]}),(0,r.jsxs)("div",{children:["Class: ",i]}),(0,r.jsxs)("div",{children:["Str: ",g]}),(0,r.jsxs)("div",{children:["Agi: ",j]}),(0,r.jsxs)("div",{children:["Wis: ",w]}),(0,r.jsxs)("div",{children:["Luk: ",b]})]})]}),(0,r.jsxs)("div",{className:"character-information-container",children:[(0,r.jsx)(_,{equipment:a}),(0,r.jsx)(_,{equipment:s}),(0,r.jsx)(z,{skills:l}),(0,r.jsx)(A,{bags:d}),(0,r.jsx)(on,{obols:h,type:"character"}),(0,r.jsx)(sn,{cards:x}),(0,r.jsxs)("div",{className:"small",children:[(0,r.jsx)(nn,{signs:m}),(0,r.jsx)(Y,{products:null===u||void 0===u?void 0:u.selected}),(0,r.jsx)(K,{products:null===p||void 0===p?void 0:p.selected}),(0,r.jsx)(E,{bubbles:c})]})]})]})};function mn(){var n=(0,i.Z)(["\n  position: relative;\n  margin-top: 15px;\n\n  .view-icons {\n    position: absolute;\n    right: 0;\n    top: -45px;\n  }\n\n  .tab-name {\n    display: flex;\n    align-items: center;\n  }\n\n  .characters {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  .missing-json {\n    display: grid;\n\n    .missing-text {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    > img {\n      place-self: center;\n    }\n  }\n"]);return mn=function(){return n},n}function xn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function vn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?xn(Object(t),!0).forEach((function(e){(0,Z.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):xn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var hn=s.ZP.div(mn()),fn=function(n){var e=n.characters,t=(0,a.useState)(),i=t[0],s=t[1],c=(0,a.useState)(0),d=c[0],u=c[1];(0,a.useEffect)((function(){var n=JSON.parse(localStorage.getItem("display"));s(n&&n.subView?n:{view:"characters",subView:"dashboard"})}),[]);var p=function(n){localStorage.setItem("view",n),s(n)};return(0,r.jsxs)(hn,{children:[(0,r.jsxs)("div",{className:"view-icons",children:[(0,r.jsx)(w.Z,{onClick:function(){return p("dashboard")},"aria-label":"dashboard-view",title:"dashboard-view",children:(0,r.jsx)(O.Z,{})}),(0,r.jsx)(w.Z,{onClick:function(){return p("list")},"aria-label":"list-view",title:"list-view",children:(0,r.jsx)(N.Z,{})})]}),"list"===(null===i||void 0===i?void 0:i.subView)?(0,r.jsx)("div",{className:"characters list",children:null===e||void 0===e?void 0:e.map((function(n,e){return(0,a.createElement)(pn,vn(vn({},n),{},{key:e}))}))}):null,"dashboard"===(null===i||void 0===i?void 0:i.subView)&&e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{position:"static",children:(0,r.jsx)(l.Y,{scrollButtons:"auto",variant:"scrollable",value:d,onChange:function(n,e){u(e)},children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name,i=n.class;return(0,r.jsx)(b.Z,{label:(0,r.jsxs)("div",{className:"tab-name",children:[(0,r.jsx)("img",{src:"".concat(o.O4,"icons/").concat(i,"_Icon.png"),alt:""}),t]})},t+e)}))})}),(0,r.jsx)("div",{className:"characters dashboard",children:null===e||void 0===e?void 0:e.map((function(n,e){return e===d?(0,a.createElement)(pn,vn(vn({},n),{},{key:e})):null}))})]}):null]})},gn=t(743),jn=t(1201),wn=t(9790);function bn(){var n=(0,i.Z)(["\n  img {\n    margin: 0 auto;\n    object-fit: contain;\n    height: 50px;\n    width: 50px;\n  }\n"]);return bn=function(){return n},n}var yn=s.ZP.div(bn()),Zn=function(n){var e=n.items;return(0,r.jsx)(yn,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name,i=n.rawName;return(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"data/").concat(i,".png"),alt:""},i+e)}))})},On=t(4566);function Nn(){var n=(0,i.Z)(["\n  .stamp-group {\n    justify-content: center;\n    display: grid;\n    grid-template-columns: repeat(4, 72px);\n    grid-template-rows: repeat(auto-fit, 72px);\n  }\n\n  .stamp-wrapper {\n    display: inline-block;\n    position: relative;\n\n    .level {\n      position: absolute;\n      top: -10px;\n      right: 0;\n      font-weight: bold;\n    }\n  }\n"]);return Nn=function(){return n},n}var Pn=s.ZP.div(Nn()),kn=function(n){var e=n.stamps;return(0,r.jsx)(Pn,{children:(0,r.jsx)("div",{className:"stamp-group",children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name,i=n.rawName,a=n.level;return"FILLER"!==t&&"Blank"!==t?(0,r.jsxs)("div",{className:"stamp-wrapper",children:[(0,r.jsx)("span",{className:"level",children:a}),(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"data/").concat(i,".png"),alt:""})]},t+e):null}))})})};function Sn(){var n=(0,i.Z)(["\n  margin-top: 15px;\n\n  .row {\n    margin: 15px 0;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 450px));\n\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n  }\n"]);return Sn=function(){return n},n}function Dn(){var n=(0,i.Z)(["\n  && {\n    background-color: #9c3c3c;\n  }\n"]);return Dn=function(){return n},n}var _n=(0,s.ZP)(wn.Z)(Dn()),Cn=s.ZP.div(Sn()),qn=function(n){var e,t,i,s=n.account,c=(0,a.useRef)();return(0,r.jsxs)(Cn,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)(on,{obols:null===s||void 0===s?void 0:s.obols,type:"account"}),(0,r.jsx)(kn,{stamps:null===s||void 0===s||null===(e=s.stamps)||void 0===e?void 0:e.combat}),(0,r.jsx)(kn,{stamps:null===s||void 0===s||null===(t=s.stamps)||void 0===t?void 0:t.skills}),(0,r.jsx)(kn,{stamps:null===s||void 0===s||null===(i=s.stamps)||void 0===i?void 0:i.misc})]}),(0,r.jsxs)(_n,{ref:c,onChange:function(n,e){e&&c.current&&setTimeout((function(){c.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}),300)},children:[(0,r.jsx)(gn.Z,{expandIcon:(0,r.jsx)(On.Z,{}),children:"Looty Shooty Missing Items"}),(0,r.jsx)(jn.Z,{children:(0,r.jsx)(Zn,{items:null===s||void 0===s?void 0:s.missingLootyItems})})]})]})},En=t(2302),In=t(3750),Jn=t(7394),Ln=t(7256),Vn=t(9613),zn=t(8222);function Bn(){var n=(0,i.Z)(["\n  margin-top: 15px;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n\n  .bonuses {\n    display: grid;\n    gap: 55px;\n    grid-template-columns: repeat(4, 50px);\n    grid-template-rows: repeat(auto-fit, 50px);\n    justify-content: center;\n\n    .bonus-wrapper {\n      position: relative;\n\n      .level {\n        position: absolute;\n        font-weight: bold;\n        top: -20px;\n        right: 0;\n\n      }\n    }\n  }\n\n\n  .members {\n    //width: 50%;\n  }\n"]);return Bn=function(){return n},n}function Tn(){var n=(0,i.Z)(["\n  && {\n    background-color: #00000070;\n    color: white;\n    font-weight: bold;\n  }\n"]);return Tn=function(){return n},n}var Un=(0,s.ZP)(zn.Z)(Tn()),Wn=s.ZP.div(Bn()),Fn=function(n){var e=n.guild,t=(0,a.useState)([]),i=t[0],s=t[1],c=(0,a.useState)("guildPoints"),l=c[0],d=c[1],u=(0,a.useState)("desc"),p=u[0],m=u[1];(0,a.useEffect)((function(){s((null===e||void 0===e?void 0:e.members.sort((function(n,e){return e.guildPoints-n.guildPoints})))||[])}),[]);var x=function(n,e){var t=function(n,e,t){return"string"===t?i.sort((function(t,i){var r,a,s=(null===t||void 0===t||null===(r=t[n])||void 0===r?void 0:r.toUpperCase())||"",c=(null===i||void 0===i||null===(a=i[n])||void 0===a?void 0:a.toUpperCase())||"";return"asc"===e?s.localeCompare(c):c.localeCompare(s)})):i.sort((function(t,i){return"desc"===e?t[n]-i[n]:i[n]-t[n]}))}(n,p,e);m("desc"===p?"asc":"desc"),d(n),s(t)};return(0,r.jsxs)(Wn,{children:[(0,r.jsx)("div",{className:"members",children:(0,r.jsxs)(En.Z,{size:"small",children:[(0,r.jsx)(In.Z,{children:(0,r.jsx)(Jn.Z,{children:[{displayName:"Name",value:"name"},{displayName:"Level",value:"level",sort:!0},{displayName:"Guild Points",value:"guildPoints",sort:!0},{displayName:"Wanted Perk",value:"wantedPerk",sort:!0,type:"string"},{displayName:"Class Name",value:"className"},{displayName:"Rank",value:"rank",sort:!0}].map((function(n,e){var t=n.displayName,i=n.value,a=n.sort,s=n.type;return(0,r.jsx)(Un,{children:a?(0,r.jsx)(Ln.Z,{active:l===i,direction:l===i?p:"asc",onClick:function(){return x(i,s)},children:t}):t},i+e)}))})}),(0,r.jsx)(Vn.Z,{children:null===i||void 0===i?void 0:i.map((function(n){return(0,r.jsxs)(Jn.Z,{children:[(0,r.jsx)(zn.Z,{component:"th",scope:"row",children:(0,o.Dq)(n.name)}),(0,r.jsx)(zn.Z,{children:n.level}),(0,r.jsx)(zn.Z,{children:n.guildPoints}),(0,r.jsx)(zn.Z,{children:(0,o.Dq)(n.wantedPerk)||"None"}),(0,r.jsx)(zn.Z,{children:n.className}),(0,r.jsx)(zn.Z,{children:n.rank})]},n.name)}))})]})}),(0,r.jsx)("div",{className:"bonuses",children:null===e||void 0===e?void 0:e.bonuses.map((function(n,e){var t=n.name,i=n.rawName,a=n.level;return(0,r.jsxs)("div",{className:"bonus-wrapper",children:[(0,r.jsx)("span",{className:"level",children:a}),(0,r.jsx)("img",{title:(0,o.Dq)(t),src:"".concat(o.O4,"data/").concat(i,".png"),alt:""})]},t+e)}))})]})};function Rn(){var n=(0,i.Z)(["\n  color: white;\n\n  h1 {\n    color: white;\n    padding: 10px;\n    display: flex;\n\n  }\n\n\n  .missing-json {\n    display: grid;\n\n    .missing-text {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    > img {\n      place-self: center;\n    }\n  }\n"]);return Rn=function(){return n},n}var An=s.ZP.main(Rn()),Gn=function(){var n=(0,a.useState)(null),e=n[0],t=n[1],i=(0,a.useState)({view:0,subView:""}),s=i[0],d=i[1];(0,a.useEffect)((function(){if(d(JSON.parse(localStorage.getItem("display"))||{view:0,subView:""}),!e)try{var n=localStorage.getItem("characterData"),i=JSON.parse(n);t(i)}catch(r){console.log("Failed to import family data from localStorage")}}),[]);return(0,r.jsxs)(l.i,{children:[(0,r.jsx)(c.Z,{}),(0,r.jsxs)(An,{children:[(0,r.jsxs)("h1",{children:["Idleon Progression ",(0,r.jsx)(f,{handleImport:function(n){t(n),localStorage.setItem("characterData",JSON.stringify(n))}})]}),e?(0,r.jsxs)("div",{className:"tab-wrapper",children:[(0,r.jsx)(y.Z,{position:"static",style:{maxWidth:550},children:(0,r.jsxs)(l.Y,{value:null===s||void 0===s?void 0:s.view,onChange:function(n,e){var t={view:e,subView:""};localStorage.setItem("display",JSON.stringify(t)),d(t)},variant:"fullWidth",children:[(0,r.jsx)(b.Z,{label:"Account"}),(0,r.jsx)(b.Z,{label:"Characters"}),(0,r.jsx)(b.Z,{label:"Guild"})]})}),0===(null===s||void 0===s?void 0:s.view)?(0,r.jsx)(qn,{account:null===e||void 0===e?void 0:e.account}):null,1===(null===s||void 0===s?void 0:s.view)?(0,r.jsx)(fn,{characters:null===e||void 0===e?void 0:e.characters}):null,2===(null===s||void 0===s?void 0:s.view)?(0,r.jsx)(Fn,{guild:null===e||void 0===e?void 0:e.guild}):null]}):(0,r.jsxs)("div",{className:"missing-json",children:[(0,r.jsxs)("div",{className:"missing-text",children:[(0,r.jsx)("span",{children:"Please load your family JSON"}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(w.Z,{children:(0,r.jsx)(j.Z,{})})})]}),(0,r.jsx)("img",{src:"".concat(o.O4,"etc/Dr_Defecaus_Walking.gif"),alt:""})]})]})]})}},9294:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/family",function(){return t(6583)}])}},function(n){n.O(0,[0,836,871,774,888,179],(function(){return e=9294,n(n.s=e);var e}));var e=n.O();_N_E=e}]);