(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{7644:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-2/bubbles",function(){return c(3473)}])},3473:function(h,c,a){"use strict";a.r(c);var i=a(5893),j=a(8396),k=a(5861),l=a(6447),m=a(480),n=a(5071),o=a(1903),p=a(7109),q=a(1703),r=a(44),s=a(6242),t=a(4267),u=a(7294),v=a(819),b=a(5934),w=a(3133),x=a(5231),d=a(7954),y=a.n(d),z=a(896);function A(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function B(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){A(d,a,c[a])})}return d}function C(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function e(){var a=C(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return e=function(){return a},a}function f(){var a=C(["\n  width: 32px;\n  height: 32px;\n"]);return f=function(){return a},a}function g(){var a=C(["\n  opacity: ",";\n"]);return g=function(){return a},a}var D=b.Z.img(e()),E=b.Z.img(f()),F=b.Z.img(g(),function(a){return 0===a.level?.5:1}),G=function(a){var c=a.goalLevel,g=a.bubbleName,h=a.desc,d=a.func,e=a.x1,f=a.x2,b=a.level,j=(0,w.growth)(d,b,e,f,!0),l=(0,w.growth)(d,c,e,f,!0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Z,{fontWeight:"bold",variant:"h6",children:(0,w.cleanUnderscore)(g)}),(0,i.jsx)(k.Z,{variant:"body1",children:(0,w.cleanUnderscore)(h.replace(/{/,j))}),b!==c?(0,i.jsxs)(k.Z,{sx:{color:b>0?"multi":""},variant:"body1",children:["Goal: +",l]}):null]})};c.default=function(){var b,c,d,e,f,g,h,a=(0,u.useContext)(v.I).state,Q=(0,j.Z)(function(a){return a.breakpoints.down("md")},{noSsr:!0}),H=(0,u.useState)(!1),I=H[0],S=H[1],J=(0,u.useState)(0),C=J[0],T=J[1],K=(0,u.useState)(0),L=K[0],U=K[1],M=(0,u.useState)(),N=M[0],V=M[1],O=(0,u.useState)(),R=O[0],W=O[1],X=(0,u.useMemo)(function(){var b,c,d,e;return null===(e=null==a?void 0:null===(b=a.account)|| void 0===b?void 0:null===(c=b.lab)|| void 0===c?void 0:null===(d=c.labBonuses)|| void 0===d?void 0:d.find(function(a){return"My_1st_Chemistry_Set"===a.name}))|| void 0===e?void 0:e.active},[null==a?void 0:null===(b=a.account)|| void 0===b?void 0:b.lab.vials]);(0,u.useEffect)(function(){var b,c,d,e,f,g,h=null===(d=Object.keys(null==a?void 0:null===(b=a.account)|| void 0===b?void 0:null===(c=b.alchemy)|| void 0===c?void 0:c.bubbles))|| void 0===d?void 0:d[L];V(null==a?void 0:null===(e=a.account)|| void 0===e?void 0:null===(f=e.alchemy)|| void 0===f?void 0:null===(g=f.bubbles)|| void 0===g?void 0:g[h])},[]);var Y=function(b){var a;T(null==b?void 0:null===(a=b.target)|| void 0===a?void 0:a.value)},Z=y()(function(b,c){var a=b.target.value;W(B({},R,A({},c,a?parseInt(a):0)))},100),$=function(c){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0,b=arguments.length>3?arguments[3]:void 0,e=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0,g=arguments.length>6?arguments[6]:void 0,h=arguments.length>7?arguments[7]:void 0,i=arguments.length>8?arguments[8]:void 0,j=arguments.length>9?arguments[9]:void 0,k=arguments.length>10?arguments[10]:void 0,l=arguments.length>11?arguments[11]:void 0,m=arguments.length>12?arguments[12]:void 0;if(e)return b+Math.floor(a/20);var n=c<14?b*Math.pow(1.35-.3*a/(50+a),a):b*Math.pow(1.37-.28*a/(60+a),a),o=Math.max(.1,1-Math.round(10*(0,w.growth)("decay",f,90,100,!1))/10/100),p=Math.max(.05,1-((0,w.growth)("decay",g,40,70,!1)+(0,w.growth)("add",h,1,0,!1)*d)/100),q=Math.max(.05,1-(0,w.growth)("decay",i,40,12,!1)/100*(0,w.growth)("decayMulti",j,2,50,!1)*(0,w.growth)("decayMulti",m,1.4,30,!1)),r=Math.max(.1,Math.pow(.75,k)),s=l?.9:1;return Math.round(n*o*q*p*r*s)},_=function(G,H,J,b,K){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,D,E,F,L=(null==a?void 0:null===(c=a.account)|| void 0===c?void 0:null===(d=c.alchemy)|| void 0===d?void 0:null===(e=d.cauldrons)|| void 0===e?void 0:null===(f=e[b])|| void 0===f?void 0:null===(g=f.cost)|| void 0===g?void 0:g.level)||0,M=(null==a?void 0:null===(h=a.account)|| void 0===h?void 0:null===(i=h.alchemy)|| void 0===i?void 0:null===(j=i.bubbles)|| void 0===j?void 0:null===(k=j.kazam)|| void 0===k?void 0:k[6].level)||0,N=(null==a?void 0:null===(l=a.account)|| void 0===l?void 0:null===(m=l.alchemy)|| void 0===m?void 0:null===(n=m.vials)|| void 0===n?void 0:null===(o=n[9])|| void 0===o?void 0:o.level)||0,O="kazam"!==b?(null==a?void 0:null===(p=a.account)|| void 0===p?void 0:null===(q=p.alchemy)|| void 0===q?void 0:null===(r=q.bubbles)|| void 0===r?void 0:null===(s=r[b])|| void 0===s?void 0:null===(t=s[16])|| void 0===t?void 0:t.level)||0:0,P=(null==a?void 0:null===(u=a.account)|| void 0===u?void 0:null===(v=u.alchemy)|| void 0===v?void 0:null===(w=v.bubbles)|| void 0===w?void 0:null===(x=w[b])|| void 0===x?void 0:null===(y=x[14])|| void 0===y?void 0:y.level)||0,Q=I?(null==a?void 0:null===(z=a.account)|| void 0===z?void 0:null===(A=z.alchemy)|| void 0===A?void 0:null===(B=A.bubbles)|| void 0===B?void 0:null===(D=B[b])|| void 0===D?void 0:null===(E=D[1])|| void 0===E?void 0:E.level)||0:0;return $(K,X?2:1,G,H,J,L,M,N,P,Q,C||0,null==a?void 0:null===(F=a.account)|| void 0===F?void 0:F.achievements[108].completed,O)},aa=function(a,b,c,d,e){var f=(null==R?void 0:R[a])-b;return f<=0?_(b,c,d,e,a):new Array(f||0).fill(1).reduce(function(g,h,f){return g+_(b+(0===f?1:f),c,d,e,a)},_(b,c,d,e,a))},ab=(0,u.useCallback)(function(a,b,c,d,e){return aa(a,b,c,d,e)},[R,C,I]),ac=function(a){var b,c,d,e,f,g,h,i,j=3;if(!(null===(d=null==a?void 0:null===(b=a.lab)|| void 0===b?void 0:null===(c=b.labBonuses)|| void 0===c?void 0:c.find(function(a){return"No_Bubble_Left_Behind"===a.name}))|| void 0===d?void 0:d.active))return null;var l=Object.values(null==a?void 0:null===(e=a.alchemy)|| void 0===e?void 0:e.bubbles).flatMap(function(a){return a}).filter(function(a){var b=a.level,c=a.index;return b>=5&&c<15}).sort(function(a,b){return a.level-b.level});(null===(h=null==a?void 0:null===(f=a.lab)|| void 0===f?void 0:null===(g=f.jewels)|| void 0===g?void 0:g.find(function(a){return"Pyrite_Rhinestone"===a.name}))|| void 0===h?void 0:h.active)&&j++;var k=(0,z.YS)(null==a?void 0:null===(i=a.sailing)|| void 0===i?void 0:i.artifacts,"Amberite");return k&&(j+=null==k?void 0:k.baseBonus),l.slice(0,j)},P=(0,u.useMemo)(function(){return ac(null==a?void 0:a.account)},[null==a?void 0:a.account]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Z,{variant:"h2",textAlign:"center",mb:3,children:"Bubbles"}),(0,i.jsxs)(l.Z,{justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(k.Z,{children:"Next Bubble Upgrades:"}),(0,i.jsx)(l.Z,{direction:"row",children:null==P?void 0:P.map(function(a,c){var b=a.rawName,d=a.bubbleName,e=a.level;return(0,i.jsxs)(l.Z,{alignItems:"center",children:[(0,i.jsx)(x.Z,{title:(0,w.pascalCase)((0,w.cleanUnderscore)(d)),children:(0,i.jsx)("img",{src:"".concat(w.prefix,"data/").concat(b,".png"),alt:""})}),(0,i.jsx)(k.Z,{variant:"body1",children:e})]},"".concat(b,"-").concat(c))})})]}),(0,i.jsxs)(l.Z,{direction:"row",justifyContent:"center",mt:2,children:[(null===(e=Object.keys(null==a?void 0:null===(c=a.account)|| void 0===c?void 0:null===(d=c.alchemy)|| void 0===d?void 0:d.bubbles))|| void 0===e?void 0:e[L])!=="kazam"?(0,i.jsx)(m.Z,{control:(0,i.jsx)(n.Z,{checked:I,onChange:function(){return S(!I)}}),name:"classDiscount",label:"Class Discount (II)"}):null,(0,i.jsx)(o.Z,{value:C,type:"number",inputProps:{min:0,max:8},onChange:function(a){return Y(a)},helperText:"".concat(parseFloat((-(25*(Math.pow(.75,C)-1)/.25)).toFixed(1)),"%"),InputProps:{startAdornment:(0,i.jsx)(p.Z,{position:"start",children:(0,i.jsx)("img",{width:36,height:36,src:"".concat(w.prefix,"data/aShopItems10.png"),alt:""})})}})]}),(0,i.jsx)(q.Z,{centered:!0,sx:{marginBottom:3,marginTop:1},variant:Q?"fullWidth":"standard",value:L,onChange:function(j,b){U(b);var c,d,e,f,g,h,i=null===(e=Object.keys(null==a?void 0:null===(c=a.account)|| void 0===c?void 0:null===(d=c.alchemy)|| void 0===d?void 0:d.bubbles))|| void 0===e?void 0:e[b];V(null==a?void 0:null===(f=a.account)|| void 0===f?void 0:null===(g=f.alchemy)|| void 0===g?void 0:null===(h=g.bubbles)|| void 0===h?void 0:h[i]),3===b&&S(!1)},children:null===(h=Object.keys(null==a?void 0:null===(f=a.account)|| void 0===f?void 0:null===(g=f.alchemy)|| void 0===g?void 0:g.bubbles))|| void 0===h?void 0:h.map(function(a,b){return(0,i.jsx)(r.Z,{label:a},"".concat(a,"-").concat(b))})}),(0,i.jsx)(l.Z,{direction:"row",flexWrap:"wrap",gap:3,justifyContent:"center",children:null==N?void 0:N.map(function(b,d){if(d>24)return null;var c=b.level,f=b.itemReq,g=b.rawName,h=b.bubbleName,j=b.func,m=b.x1,n=b.x2,e=(null==R?void 0:R[d])?(null==R?void 0:R[d])<c?c:null==R?void 0:R[d]:c,p=(0,w.growth)(j,e,m,n,!0);return(0,i.jsx)(u.Fragment,{children:(0,i.jsx)(s.Z,{sx:{width:330},children:(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(l.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(l.Z,{alignItems:"center",children:[(0,i.jsx)(x.Z,{title:(0,i.jsx)(G,B({},b,{goalLevel:e})),children:(0,i.jsx)(F,{width:48,height:48,level:c,src:"".concat(w.prefix,"data/").concat(g,".png"),alt:""})}),(0,i.jsxs)(k.Z,{variant:"body1",children:["Lv. ",c]})]}),(0,i.jsx)(o.Z,{type:"number",sx:{width:90},defaultValue:e,onChange:function(a){return Z(a,d)},label:"Goal",variant:"outlined",inputProps:{min:c||0}})]}),(0,i.jsxs)(l.Z,{mt:1.5,direction:"row",justifyContent:"center",gap:3,flexWrap:"wrap",children:[(0,i.jsxs)(l.Z,{gap:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(x.Z,{title:"Bubble's effect",children:(0,i.jsx)(D,{src:"".concat(w.prefix,"data/SignStar3b.png"),alt:""})}),(0,i.jsx)(k.Z,{children:p})]}),null==f?void 0:f.map(function(f,n){var g,h,j,b=f.rawName,e=f.name,o=f.baseCost;if("Blank"===b||"ERROR"===b)return null;var p=null===(j=Object.keys(null==a?void 0:null===(g=a.account)|| void 0===g?void 0:null===(h=g.alchemy)|| void 0===h?void 0:h.bubbles))|| void 0===j?void 0:j[L],m=ab(d,c,o,null==e?void 0:e.includes("Liquid"),p),q=["sail","bits"].find(function(a){return b.toLowerCase().includes(a)})?"".concat(b,"_x1"):b;return(0,i.jsx)(l.Z,{direction:"row",children:(0,i.jsxs)(l.Z,{gap:2,justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(x.Z,{title:(0,w.cleanUnderscore)(e),children:(0,i.jsx)(E,{src:"".concat(w.prefix,"data/").concat(q,".png"),alt:""})}),(0,i.jsx)(x.Z,{title:m,children:(0,i.jsx)(k.Z,{children:(0,w.notateNumber)(m,"Big")})})]})},"".concat(b,"-").concat(e,"-").concat(n))})]})]})})},g+""+h+d)})})]})}}},function(a){a.O(0,[9912,2640,9774,2888,179],function(){return a(a.s=7644)}),_N_E=a.O()}])