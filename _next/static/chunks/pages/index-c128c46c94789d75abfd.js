(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{128:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return N}});var t=r(2209),i=r(5893),a=r(2809),o=r(7294),c=r(9163),s=r(7665),l=r(1267),p=r(6390),d=r(3408),u=r(5996),f=r(6447);function h(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function x(){var n=(0,t.Z)(["\n  & .tooltip {\n    font-size: 16px;\n    background-color: rebeccapurple;\n    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n    max-width: 300px;\n    @media only screen and (max-width: 600px) {\n      max-width: 200px;\n    }\n  }\n\n  & .touch {\n    padding: 8px;\n    max-width: 300px;\n    @media only screen and (max-width: 600px) {\n      max-width: 200px;\n    }\n  }\n\n  .tooltip-body {\n    .tooltip-header {\n      text-align: center;\n      font-weight: bold;\n      padding: 10px 0;\n    }\n\n    .stars {\n      border-top: 1px solid #51325a;\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-around;\n\n      .star-line {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n      }\n\n      .image-wrapper {\n      }\n\n      .stat {\n        margin-top: 3px;\n      }\n    }\n  }\n"]);return x=function(){return n},n}var b=(0,c.ZP)((function(n){return(0,i.jsx)(f.ZP,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){(0,a.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({classes:{popper:n.className,tooltip:"tooltip",touch:"touch"}},n))}))(x()),m=function(n){var e,r=n.header,t=n.base,a=n.children;return(0,i.jsx)(b,{enterTouchDelay:100,placement:"top-start",title:(0,i.jsxs)("div",{className:"tooltip-body",children:[(0,i.jsx)("div",{className:"tooltip-header",children:r}),(0,i.jsx)("div",{className:"stars",children:t?null===(e=[1,2,3,4])||void 0===e?void 0:e.map((function(n,e){return(0,i.jsxs)("div",{className:"star-line",children:[(0,i.jsx)("div",{className:"image-wrapper",children:0===e?(0,i.jsx)("span",{style:{fontWeight:"bold"},children:"Base"}):(0,i.jsx)("img",{src:"".concat(s.O4,"etc/Star").concat(e,".png"),alt:""})}),(0,i.jsx)("div",{className:"stat",children:t*(e+1)})]},t+" "+e)})):null})]}),children:a})},g=r(9009),v=r(163);function j(){var n=(0,t.Z)(["\n  color: white;\n\n  .chips {\n    margin: 20px 0;\n\n    .chip {\n      margin-right: 10px;\n      margin-top: 8px;\n    }\n  }\n\n  .cards {\n    min-height: 600px;\n\n    .card {\n      margin: 5px 10px;\n      @media only screen and (max-width: 600px) {\n        margin: 5px 5px;\n      }\n    }\n\n    .card-banner {\n      margin: 10px;\n      display: block;\n    }\n\n    .not-found {\n      margin: 20px;\n      font-size: 30px;\n    }\n\n    .image-wrapper {\n      display: inline-block;\n    }\n  }\n\n  h1 {\n    color: white;\n  }\n  \n  \n"]);return j=function(){return n},n}function y(){var n=(0,t.Z)(["\n  cursor: pointer;\n"]);return y=function(){return n},n}function O(){var n=(0,t.Z)(["\n  && label.Mui-focused {\n    color: rgba(255, 255, 255, 0.7);\n  }\n\n  & .MuiInput-underline:after {\n    border-bottom-color: green;\n  }\n"]);return O=function(){return n},n}function w(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function P(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,a.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function N(){var n,e=(0,o.useState)(""),r=e[0],t=e[1],c=(0,o.useState)(s.ob),p=c[0],d=c[1];return(0,o.useEffect)((function(){var n=Object.keys(s.ob).reduce((function(n,e){var t=s.ob[e].filter((function(n){var e,t=n.effect,i=n.alsoEffect,a=null===t||void 0===t||null===(e=t.toLowerCase())||void 0===e?void 0:e.includes(r.toLowerCase()),o=null===i||void 0===i?void 0:i.some((function(n){var e;return null===n||void 0===n||null===(e=n.toLowerCase())||void 0===e?void 0:e.includes(r.toLowerCase())}));return a||o}));return P(P({},n),{},(0,a.Z)({},e,t))}),{});d(n)}),[r]),(0,i.jsxs)(v.i,{children:[(0,i.jsx)(g.Z,{}),(0,i.jsxs)(k,{style:{padding:10},children:[(0,i.jsx)("h1",{children:"Search Cards by Stats"}),(0,i.jsx)(Z,{InputProps:{endAdornment:(0,i.jsx)(C,{onClick:function(){return t("")},position:"end",children:(0,i.jsx)(u.Z,{})})},label:"Enter Card stat..",type:"text",value:r,onChange:function(n){var e=n.target;return t(null===e||void 0===e?void 0:e.value)}}),(0,i.jsx)("div",{className:"chips",children:["Show All","Choppin","Mining","Fishing","Catching","Trapping","Accuracy","Card Drop","Monster Exp","Skill Exp","Damage","Drop Rate","STR","AGI","WIS","LUK"].map((function(n,e){return(0,i.jsx)(l.Z,{className:"chip",size:"small",variant:"outlined",label:n,onClick:function(){t("Show All"===n?"":n)}},n+""+e)}))}),(0,i.jsx)("div",{className:"cards",children:(null===(n=Object.keys(p))||void 0===n?void 0:n.length)>0?Object.keys(p).map((function(n,e){var r=p[n];return r&&0!==(null===r||void 0===r?void 0:r.length)?(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)("img",{className:"card-banner",src:"".concat(s.O4,"banners/").concat(n,"_Cardbanner.png"),alt:""}),(0,i.jsx)("div",{children:r.map((function(n,e){var r=n.img,t=n.effect,a=n.base;return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(m,{header:r.replace(/_/g," ").replace(/Card.png/,"")+" - "+t,base:a,children:(0,i.jsx)("div",{className:"image-wrapper",children:(0,i.jsx)("img",{className:"card",src:"".concat(s.O4,"cards/").concat(r),alt:t,height:72,width:52})})}),7===e?(0,i.jsx)("br",{}):null]},t+""+e)}))})]},n+""+e):null})):(0,i.jsx)("div",{className:"not-found",children:"Please try another phrase"})})]})]})}var Z=(0,c.ZP)(p.Z)(O()),C=(0,c.ZP)(d.Z)(y()),k=c.ZP.main(j())},8581:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(128)}])}},function(n){n.O(0,[793,694,472,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);