(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6169],{5428:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/refinery",function(){return c(7760)}])},5862:function(c,b,a){"use strict";var d=a(5893),e=a(7357),f=a(1458),g=a(5861);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a(7294),b.Z=function(a){var b=a.percent,i=a.bgColor,c=a.label,j=a.sx;return(0,d.jsxs)(e.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(e.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(f.Z,{sx:function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){h(d,a,c[a])})}return d}({width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:i||""}},j),variant:"determinate",value:b>100?100:b})}),void 0===c||c?(0,d.jsx)(e.Z,{children:(0,d.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(b),"%")})}):null]})}},134:function(e,b,a){"use strict";var f=a(5893),g=a(7294),h=a(3277),i=a(3913),j=a(3133),c=a(5934),k=a(5861);function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){l(d,a,c[a])})}return d}function d(){var a,b,c=(a=["\n  .overtime {\n    color: #f91d1d;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var n=c.Z.span(d());b.Z=function(b){var o=b.date,s=b.startDate,p=b.lastUpdated,t=b.type,d=b.pause,q=b.staticTime,e=b.placeholder,r=b.loop,l=(0,g.useState)(),a=l[0],u=l[1];(0,g.useEffect)(function(){if(o){if(q)return u(m({},(0,j.getDuration)(new Date().getTime(),o)));var a=new Date,b=a.getTime()-(null!=p?p:0),c=(0,i.Z)(o);u(m({},(0,j.getDuration)(null==a?void 0:a.getTime(),o+b*("countdown"===t?-1:1)),{overtime:"countdown"===t&&c}))}},[o,p]);var v=function(){var d=a.days,e=a.hours,b=a.minutes,c=a.seconds;60===(c+=1)&&(c=0,60===(b+=1)&&(b=0,24===(e+=1)&&(d+=1))),u(m({},a,{days:d,hours:e,minutes:b,seconds:c}))},w=function(){var e=a.days,b=a.hours,c=a.minutes,d=a.seconds;if(0===e&&0===b&&0===c&&0===d&&r)return u(m({},(0,j.getDuration)(new Date().getTime(),s)));-1==(d-=1)&&(d=59,-1==(c-=1)&&(c=59,-1==(b-=1)&&(b=0,e-=1))),u(m({},a,{days:e,hours:b,minutes:c,seconds:d}))};(0,h.Z)(function(){if(!a)return null;"countdown"!==t||(null==a?void 0:a.overtime)?v():w()},d||q?null:1e3);var c=function(a){var b=String(a);return(null==b?void 0:b.length)===1?"0".concat(a):a};return a?(0,f.jsx)(n,{children:((null==a?void 0:a.overtime)||d)&&e?e:(0,f.jsxs)(k.Z,{className:"".concat((null==a?void 0:a.overtime)&&!r?"overtime":""),component:"span",children:[(null==a?void 0:a.days)?c(null==a?void 0:a.days)+"d:":"",c(null==a?void 0:a.hours)+"h:",c(null==a?void 0:a.minutes)+"m",(null==a?void 0:a.days)?"":":",(null==a?void 0:a.days)?"":c(null==a?void 0:a.seconds)+"s"]})}):null}},7760:function(e,b,a){"use strict";a.r(b);var f=a(5893),g=a(5861),h=a(6447),i=a(6242),j=a(4267),k=a(480),l=a(9368),m=a(7294),n=a(865),o=a(3133),c=a(5934),p=a(134),q=a(1680),r=a(9619),s=a(5862),t=a(1306),u=a(2761),v=a(6977),w=a(7713),x=a(3771),y=a(2962);function z(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function A(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function B(a){return function(a){if(Array.isArray(a))return z(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||C(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(a,c){if(a){if("string"==typeof a)return z(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return z(a,c)}}function d(){var a,b,c=(a=["\n  width: 32px;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var D=["#EF476F","#ff8d00","#00dcff","#cdff68","#d822cb","#9a9ca4"],E={fontWeight:"bold"},F=c.Z.img(d());b.default=function(){var e,z,C,G,H,I,J,K,c=(0,m.useContext)(n.I).state,a=null==c?void 0:c.account,L=a.refinery,d=a.alchemy,b=a.saltLick,M=a.lab,T=a.stamps,W=a.charactersLevels,U=null==d?void 0:d.vials,X=(0,q.YG)(U,"Refinery_Cycle_Speed"),Y=(null==b?void 0:b[2])?(null==b?void 0:null===(e=b[2])|| void 0===e?void 0:e.baseBonus)*(null==b?void 0:null===(z=b[2])|| void 0===z?void 0:z.level):0,Z=(null===(G=null==M?void 0:null===(C=M.labBonuses)|| void 0===C?void 0:C.find(function(a){return"Gilded_Cyclical_Tubing"===a.name}))|| void 0===G?void 0:G.active)?3:1,$=(null===(J=null==d?void 0:null===(H=d.p2w)|| void 0===H?void 0:null===(I=H.sigils)|| void 0===I?void 0:I.find(function(a){return(null==a?void 0:a.name)==="PIPE_GAUGE"}))|| void 0===J?void 0:J.bonus)||0,_=(0,t.mV)(T,"faster_refinery"),N=(0,m.useState)(!1),V=N[0],aa=N[1],O=(0,m.useState)(0),ab=O[0],ac=O[1],P=(0,m.useState)([]),Q=P[0],ad=P[1],R=(0,m.useState)([]),S=R[0],ae=R[1];(0,m.useEffect)(function(){var b,d,h=(0,u.Hx)(W,"Divine_Knight"),e=(0,x.A5)(null==c?void 0:c.characters,3,"Divine_Knight","THE_FAMILY_GUY"),f=(0,v.D)(w.classFamilyBonuses,"Refinery_Speed",h)*(e>0?1+e/100:1),a=(null==c?void 0:null===(b=c.characters)|| void 0===b?void 0:b.filter(function(a){return(null==a?void 0:a.class)==="Squire"||(null==a?void 0:a.class)==="Divine_Knight"})).reduce(function(c,b){var d,i=b.name,f=b.talents,g=b.cooldowns,j=b.postOffice,k=b.afkTime,l=(0,r.x)(j,"Magician_Starterpack",2),a=null==f?void 0:null===(d=f[2])|| void 0===d?void 0:d.orderedTalents.find(function(a){return(null==a?void 0:a.name)==="REFINERY_THROTTLE"}),h=0;(null==a?void 0:a.maxLevel)>0&&(h=(0,o.growth)(null==a?void 0:a.funcX,null==a?void 0:a.maxLevel,null==a?void 0:a.x1,null==a?void 0:a.x2)||0);var m=(new Date().getTime()-k)/1e3,e=(1-Math.max(0,l)/100)*(null==g?void 0:g[130])-m;return{cycles:(null==c?void 0:c.cycles)+h,cooldowns:B(null==c?void 0:c.cooldowns).concat([{name:i,cooldown:e<0?e:new Date().getTime()+1e3*e}])}},{cycles:0,cooldowns:[]});ac(null==a?void 0:a.cycles),ad(null==a?void 0:a.cooldowns);var g=(new Date().getTime()-(null!==(d=null==c?void 0:c.lastUpdated)&& void 0!==d?d:0))/1e3,i={name:"Combustion",time:Math.ceil(900/((1+(X+Y+f+$+_)/100)*Z)),timePast:(null==L?void 0:L.timePastCombustion)+g},j={name:"Synthesis",time:Math.ceil(3600/((1+(X+Y+f+$+_)/100)*Z)),timePast:(null==L?void 0:L.timePastSynthesis)+g};ae([i,j])},[null==c?void 0:c.lastUpdated]);var af=function(b,c,a,d){return Math.floor(Math.pow(b,(null==a?void 0:a.includes("Refinery"))&&d<=(null==L?void 0:L.refinerySaltTaskLevel)?1.3:1.5))*c},ag=function(d,b,e){var a,c=[];return b.forEach(function(a){var b,f=af(d,null==a?void 0:a.quantity,null==a?void 0:a.rawName,e);f>(null==a?void 0:a.totalAmount)&&c.push(0),c.push((null!==(b=null==a?void 0:a.totalAmount)&& void 0!==b?b:0)/f)}),(a=Math).min.apply(a,B(c))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y.PB,{title:"Idleon Toolbox | Refinery",description:"Keep track of your refinery levels, timing, required materials and more"}),(0,f.jsx)(g.Z,{variant:"h2",mb:3,children:"Refinery"}),(0,f.jsxs)(h.Z,{my:3,direction:"row",flexWrap:"wrap",gap:2,children:[null==Q?void 0:Q.map(function(a,d){var b=a.name,e=a.cooldown;return a.talentId,(0,f.jsx)(i.Z,{className:"squire",sx:{width:232},children:(0,f.jsx)(j.Z,{sx:{padding:4},children:(0,f.jsxs)(h.Z,{alignItems:"center",children:[(0,f.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon130.png"),alt:""}),(0,f.jsx)(g.Z,{sx:E,children:b}),(0,f.jsx)(p.Z,{placeholder:(0,f.jsx)(g.Z,{sx:{color:"success.main",fontWeight:"bold"},children:"Ready"}),type:"countdown",date:e,lastUpdated:null==c?void 0:c.lastUpdated})]})})},b+" "+d)}),null==S?void 0:S.map(function(b,e){var h=b.name,a=b.time,k=b.timePast,l=Math.floor(a/60),d=a%60,m=new Date().getTime()+(a-k)*1e3,n=new Date().getTime()+1e3*a;return(0,f.jsx)(i.Z,{sx:{width:232},children:(0,f.jsxs)(j.Z,{children:[(0,f.jsx)(g.Z,{sx:function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){A(d,a,c[a])})}return d}({},E,{color:0===e?"error.light":"success.light"}),mb:1,variant:"h5",children:h}),(0,f.jsx)(g.Z,{sx:E,component:"span",children:"Next Cycle In: "}),(0,f.jsx)(p.Z,{type:"countdown",loop:!0,startDate:n,date:m,lastUpdated:null==c?void 0:c.lastUpdated}),(0,f.jsxs)(g.Z,{sx:E,children:["Max cycle time: ",(0,f.jsxs)("span",{style:{fontWeight:400},children:[l,"m:",d<10?"0".concat(d):d,"s"]})]}),(0,f.jsxs)(g.Z,{sx:E,children:["Cycles: ",(0,f.jsxs)("span",{style:{fontWeight:400},children:[(0,o.kFormatter)(3600/a,2),"/hr"]})]})]})},"".concat(h,"-").concat(e))})]}),(0,f.jsx)(h.Z,{my:2,direction:"row",children:(0,f.jsx)(i.Z,{sx:{width:"fit-content"},children:(0,f.jsx)(j.Z,{children:(0,f.jsx)(k.Z,{control:(0,f.jsx)(l.Z,{checked:V,onChange:function(a){return aa(a.target.checked)}}),label:"Include Squires Cycles"})})})}),(0,f.jsx)(h.Z,{gap:3,justifyContent:"center",children:null==L?void 0:null===(K=L.salts)|| void 0===K?void 0:K.map(function(b,d){var e,k,r,t,u,v,w=b.saltName,l=b.refined,m=b.powerCap,y=b.rawName,n=b.rank,x=b.active,a=b.cost,z=b.autoRefinePercentage,A=l/m*100,q=null==a?void 0:a.every(function(a){var b=a.rawName,c=a.quantity,e=a.totalAmount;return e>=af(n,c,b,d)});return S.length&&(e=ag(n,a,d)*(null===(k=S[Math.floor(d/3)])|| void 0===k?void 0:k.time)),(0,f.jsx)(i.Z,{sx:{width:"fit-content"},children:(0,f.jsx)(j.Z,{children:(0,f.jsxs)(h.Z,{direction:"row",alignItems:"flex-start",gap:3,flexWrap:"wrap",children:[(0,f.jsxs)(h.Z,{alignItems:"center",alignSelf:"center",children:[(0,f.jsx)("img",{src:"".concat(o.prefix,"data/").concat(y,".png"),alt:""}),"Rank: ",n]}),(0,f.jsxs)(h.Z,{alignSelf:"center",sx:{width:{md:200}},gap:.5,children:[(0,f.jsx)(g.Z,{variant:"h6",children:(0,o.cleanUnderscore)(w)}),(0,f.jsxs)(g.Z,{children:["Power: ",(0,o.numberWithCommas)(l)," / ",(0,o.numberWithCommas)(m)]}),(0,f.jsxs)(g.Z,{children:["Auto refine: ",z,"%"]}),(0,f.jsxs)(g.Z,{children:["Rank up: ",x?(0,f.jsx)(p.Z,{type:"countdown",lastUpdated:null==c?void 0:c.lastUpdated,pause:!x||!q,placeholder:(0,f.jsx)(g.Z,{component:"span",color:q?"success.light":"error.light",children:q?"RANK UP":"Missing Mats"}),date:(r=n,t=m,u=l,v=d,new Date().getTime()+36e5*((t-u)/Math.floor(Math.pow(r,1.3))/(86400/((v<=2?900:3600)/(1+(X+Y)/100))+(V&&null!=ab?ab:0))*24/Z))}):(0,f.jsx)(g.Z,{component:"span",color:"error",children:"Inactive"})]}),(0,f.jsxs)(g.Z,{children:["Fuel: ",e?(0,f.jsx)(p.Z,{type:"countdown",date:new Date().getTime()+1e3*e,lastUpdated:null==c?void 0:c.lastUpdated}):"Empty"]}),(0,f.jsx)(s.Z,{percent:A,bgColor:null==D?void 0:D[d]})]}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(g.Z,{fontWeight:"bold",children:"Per cycle"}),(0,f.jsx)(h.Z,{flexWrap:"wrap",direction:"row",sx:{width:{md:140}},gap:1,children:null==a?void 0:a.map(function(a,e){a.name;var b=a.rawName,i=a.quantity,j=a.totalAmount,c=af(n,i,b,d);return(0,f.jsxs)(h.Z,{alignItems:"center",children:[(0,f.jsx)(F,{src:"".concat(o.prefix,"data/").concat(b,".png"),alt:""}),(0,f.jsx)(g.Z,{color:c>j?"error.light":"",children:c})]},"".concat(b,"-").concat(e))})})]}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(g.Z,{fontWeight:"bold",children:"Per hour"}),(0,f.jsx)(h.Z,{flexWrap:"wrap",direction:"row",sx:{width:{md:140}},gap:1,children:null==a?void 0:a.map(function(a,i){a.name;var b,c=a.rawName,j=a.quantity,k=a.totalAmount,l=null===(b=S[Math.floor(d/3)])|| void 0===b?void 0:b.time,e=af(n,j,c,d);return(0,f.jsxs)(h.Z,{alignItems:"center",children:[(0,f.jsx)(F,{src:"".concat(o.prefix,"data/").concat(c,".png"),alt:""}),(0,f.jsx)(g.Z,{color:e>k?"error.light":"",children:(0,o.kFormatter)(3600*e/l,2)})]},"per-hour-".concat(c,"-").concat(i))})})]}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(g.Z,{fontWeight:"bold",children:"Rank up"}),(0,f.jsx)(h.Z,{flexWrap:"wrap",direction:"row",width:160,gap:1,children:null==a?void 0:a.map(function(a,i){a.name;var c=a.rawName,j=a.quantity,e=a.totalAmount,b=af(n,j,c,d);return b=(m-l)/Math.floor(Math.pow(n,1.3))*b,(0,f.jsxs)(h.Z,{alignItems:"center",children:[(0,f.jsx)(F,{src:"".concat(o.prefix,"data/").concat(c,".png"),alt:""}),(0,f.jsx)(g.Z,{children:(0,o.kFormatter)(b)}),(0,f.jsxs)(g.Z,{color:b>e?"error.light":"",variant:"caption",children:["(",(0,o.kFormatter)(e),")"]})]},"".concat(c,"-").concat(i))})})]})]})})},"".concat(w,"-").concat(d))})})]})}}},function(a){a.O(0,[7270,9774,2888,179],function(){return a(a.s=5428)}),_N_E=a.O()}])