(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{4152:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/stamps",function(){return c(6878)}])},8801:function(e,b,a){"use strict";var f=a(5893),g=a(7702),c=a(5934),h=a(5861),i=a(6447);function j(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function d(){var a,b,c=(a=["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n\n  .coin-icon {\n    width: 23px;\n    height: 27px;\n    object-fit: contain;\n  }\n\n  .coin-value {\n    position: absolute;\n    text-shadow: ",";\n    bottom: -22px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var k=c.Z.div(d(),function(a){return a.noShadow?"unset":"2px 2px 0 black"});b.Z=function(a){var b=a.style,c=a.money,d=a.title,e=void 0===d?"Total Money":d,l=a.maxCoins,m=void 0===l?5:l,n=a.noShadow;return(0,f.jsxs)("div",{style:void 0===b?{}:b,children:[e?(0,f.jsx)(h.Z,{style:{textAlign:"center"},children:e}):null,(0,f.jsx)(i.Z,{flexWrap:"wrap",justifyContent:"center",direction:"row",gap:2.3,children:null==c?void 0:c.map(function(i,l){var a,b,d=(b=2,function(a){if(Array.isArray(a))return a}(a=i)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return j(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return j(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=d[0],c=d[1];return l<m&&Number(c)>0?(0,f.jsxs)(k,{noShadow:n,children:[(0,f.jsx)("img",{className:"coin-icon",src:"".concat(g.prefix,"data/Coins").concat(e,".png"),alt:""}),(0,f.jsx)(h.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(c)})]},c+""+e):null})})]})}},6878:function(h,c,a){"use strict";a.r(c);var i=a(5893),j=a(8396),k=a(5861),l=a(1703),m=a(44),n=a(6447),o=a(6242),p=a(4267),q=a(1903),r=a(7294),s=a(4897),t=a(7702),b=a(5934),u=a(1680),v=a(8801),w=a(5231),d=a(7954),x=a.n(d);function y(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function z(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){y(d,a,c[a])})}return d}function A(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function e(){var a=A(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return e=function(){return a},a}function f(){var a=A(["\n  opacity: ",";\n"]);return f=function(){return a},a}function g(){var a=A(["\n  width: 32px;\n  height: 32px;\n  opacity: ",";\n"]);return g=function(){return a},a}var B=b.Z.img(e()),C=function(a){var f=a.func,b=a.level,g=a.goalLevel,h=a.x1,j=a.x2,l=a.displayName,d=a.effect,e=a.multiplier,c=void 0===e?1:e,m=a.goalBonus,n=(0,t.growth)(f,b,h,j,!0)*c;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Z,{variant:"h5",children:(0,t.cleanUnderscore)(l)}),(0,i.jsxs)(k.Z,{sx:{color:b>0&&c>1?"multi":""},variant:"body1",children:["+",(0,t.cleanUnderscore)(d.replace(/{}/,n))]}),b!==g?(0,i.jsxs)(k.Z,{sx:{color:b>0&&c>1?"multi":""},variant:"body1",children:["Goal: +",(0,t.cleanUnderscore)(d.replace(/{}/,m))]}):null]})},D=b.Z.img(f(),function(a){return 0===a.level?.5:1}),E=b.Z.img(g(),function(a){return a.hide?.5:1});c.default=function(){var a,b,c=(0,r.useContext)(s.I).state,d=(0,r.useState)(0),h=d[0],G=d[1],e=(0,r.useState)(),f=e[0],H=e[1],g=(0,r.useState)(),A=g[0],I=g[1],F=(0,j.Z)(function(a){return a.breakpoints.down("md")},{noSsr:!0});(0,r.useEffect)(function(){var a,b,d,e,f=null===(b=Object.keys(null==c?void 0:null===(a=c.account)|| void 0===a?void 0:a.stamps))|| void 0===b?void 0:b[h];H(null==c?void 0:null===(d=c.account)|| void 0===d?void 0:null===(e=d.stamps)|| void 0===e?void 0:e[f])},[]);var J=function(h,a,b,c){var d=(null==A?void 0:A[h])-a,e="gold"===b?M:L;if(d<=0){var f=e(a,c);return"material"===b?Math.floor(f):f}var g=Array(d||0).fill(1).map(function(b,a){return a+1}).reduce(function(d,f){return"material"===b&&(a+f)%(null==c?void 0:c.reqItemMultiplicationLevel)==0||"gold"===b?d+e(a+f,c):d},e(a,c));return"material"===b?Math.floor(g):g},K=(0,r.useCallback)(function(a,b,c,d){return J(a,b,c,d)},[A]),L=function(g,a){var b,d,e,f,h=a.reqItemMultiplicationLevel,i=a.baseMatCost,j=a.powMatBase,k=(0,u.YG)(null==c?void 0:null===(b=c.account)|| void 0===b?void 0:null===(d=b.alchemy)|| void 0===d?void 0:d.vials,"material_cost_for_stamps"),l=(0,u.Vq)(null==c?void 0:null===(e=c.account)|| void 0===e?void 0:null===(f=e.alchemy)|| void 0===f?void 0:f.sigils,"ENVELOPE_PILE");return i*(1/(1+l/100))*Math.pow(j,Math.pow(Math.round(g/h)-1,.8))*Math.max(.1,1-k/100)||0},M=function(b,d){var e,f,g,h,i=d.reqItemMultiplicationLevel,j=d.baseCoinCost,k=d.powCoinBase,l=(0,u.YG)(null==c?void 0:null===(e=c.account)|| void 0===e?void 0:null===(f=e.alchemy)|| void 0===f?void 0:f.vials,"material_cost_for_stamps"),a=null==c?void 0:null===(g=c.account)|| void 0===g?void 0:null===(h=g.bribes)|| void 0===h?void 0:h[0],m=(null==a?void 0:a.done)?j*(1-(null==a?void 0:a.value)/100):j;return Math.floor(m*Math.pow(k-b/(b+5*i)*.25,b*(10/i))*Math.max(.1,1-l/100))},N=x()(function(b,c){var a=b.target.value;I(z({},A,y({},c,a?parseInt(a):0)))},100);return(0,i.jsxs)("div",{children:[(0,i.jsx)(k.Z,{variant:"h2",textAlign:"center",mb:3,children:"Stamps"}),(0,i.jsx)(l.Z,{centered:!0,sx:{marginBottom:3},variant:F?"fullWidth":"standard",value:h,onChange:function(h,f){G(f);var a,b,d,e,g=null===(b=Object.keys(null==c?void 0:null===(a=c.account)|| void 0===a?void 0:a.stamps))|| void 0===b?void 0:b[f];H(null==c?void 0:null===(d=c.account)|| void 0===d?void 0:null===(e=d.stamps)|| void 0===e?void 0:e[g])},children:null===(b=Object.keys(null==c?void 0:null===(a=c.account)|| void 0===a?void 0:a.stamps))|| void 0===b?void 0:b.map(function(a,b){return(0,i.jsx)(m.Z,{label:a},"".concat(a,"-").concat(b))})}),(0,i.jsx)(n.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",gap:3,children:null==f?void 0:f.map(function(a,c){var h=a.displayName,e=a.rawName,b=a.level,f=a.itemReq,g=a.multiplier,j=void 0===g?1:g,l=a.func,m=a.x1,s=a.x2,x=a.reqItemMultiplicationLevel,d=(null==A?void 0:A[c])?(null==A?void 0:A[c])<b?b:null==A?void 0:A[c]:b,u=(0,t.growth)(l,d,m,s,!0)*j;return(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(o.Z,{sx:{width:230},children:(0,i.jsxs)(p.Z,{sx:{"&:last-child":{paddingBottom:4}},children:[(0,i.jsxs)(n.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(n.Z,{alignItems:"center",children:[(0,i.jsx)(w.Z,{title:(0,i.jsx)(C,z({},a,{goalLevel:d,goalBonus:u})),children:(0,i.jsx)(D,{width:48,height:48,level:b,src:"".concat(t.prefix,"data/").concat(e,".png"),alt:""})}),(0,i.jsxs)(k.Z,{variant:"body1",children:["Lv. ",b]})]}),(0,i.jsx)(q.Z,{type:"number",sx:{width:90},defaultValue:d,onChange:function(a){return N(a,c)},label:"Goal",variant:"outlined",inputProps:{min:b||0}})]}),null==f?void 0:f.map(function(f,h){var g=f.rawName,j=f.name,e=K(c,b,"material",a),l=K(c,b,"gold",a),m=d%x==0;return(0,i.jsxs)(n.Z,{gap:1,mt:2,children:[(0,i.jsxs)(n.Z,{gap:2,justifyContent:"center",direction:"row",alignItems:"center",children:[(0,i.jsx)(B,{src:"".concat(t.prefix,"data/SignStar3b.png"),alt:""}),(0,i.jsx)(k.Z,{children:u}),(0,i.jsx)(E,{hide:!e||!m,src:"".concat(t.prefix,"data/").concat(g,".png"),alt:""}),e?(0,t.notateNumber)(e,"Big"):null]}),(0,i.jsx)(v.Z,{title:"",money:(0,t.getCoinsArray)(l)})]},"".concat(g,"-").concat(j,"-").concat(h))})]})})},e+""+h+c)})})]})}}},function(a){a.O(0,[9912,502,6864,9774,2888,179],function(){return a(a.s=4152)}),_N_E=a.O()}])