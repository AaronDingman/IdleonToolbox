(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9511],{2404:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/general",function(){return c(521)}])},8211:function(c,b,a){"use strict";var d=a(5893),e=a(7294),f=a(134),g=a(6447),h=a(5861),i=a(7720),j=a(3133);b.Z=function(b){var l=b.libraryTimes,m=b.lastUpdated,a=l||{},n=a.bookCount,c=a.next,k=a.breakpoints;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,d.jsx)("img",{src:"".concat(j.prefix,"data/Libz.png"),alt:""}),(0,d.jsx)("h3",{children:"Library"})]}),(0,d.jsxs)("h4",{children:["Book count: ",n]}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,d.jsx)(h.Z,{sx:{width:100},children:"Next book in: "})," ",c>0?(0,d.jsx)(f.Z,{type:"countdown",lastUpdated:m,date:new Date().getTime()+1e3*c}):(0,d.jsx)(h.Z,{variant:"caption",children:"Wait for game update"})]}),null==k?void 0:k.map(function(b,c){var j=b.breakpoint,a=b.time;return a>0?(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)(i.Z,{sx:{my:1}}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,children:[(0,d.jsxs)(h.Z,{sx:{width:100},children:[j," books in: "]})," ",a>0?(0,d.jsx)(f.Z,{type:"countdown",lastUpdated:m,date:new Date().getTime()+1e3*a}):(0,d.jsx)(h.Z,{variant:"caption",children:"Wait for game update"})]})]},"book-timer"+c):null})]})}},521:function(c,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return I}});var d=a(5893),e=a(6886),f=a(7720),g=a(6447),h=a(9290),i=a(8801),j=a(1820),k=a(5231),l={style:{width:72,height:72,objectFit:"contain"}},m=function(a){var c,e=a.money,h=a.WorldTeleports,m=a.ObolFragments,b=a.ColosseumTickets,n=a.SilverPens,o=a.gems,f=a.KeysAll,p=a.minigamePlays;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Z,{className:"box",money:void 0===e?[]:e}),(0,d.jsxs)(g.Z,{mt:2,flexWrap:"wrap",gap:1,justifyContent:"center",direction:"row",children:[(0,d.jsx)(j.M5,{stat:h,icon:"rtt0",img:l}),(0,d.jsx)(j.M5,{stat:m,icon:"ObolFrag",img:l}),(0,d.jsx)(k.Z,{title:(0,d.jsx)(g.Z,{gap:2,children:null==b?void 0:null===(c=b.allTickets)|| void 0===c?void 0:c.map(function(a,f){var b=a.rawName,c=(a.amount,a.totalAmount),h=a.amountPerDay,e=a.daysSincePickup;return(0,d.jsxs)(g.Z,{direction:"row",gap:1,children:[(0,d.jsx)(g.Z,{children:(0,d.jsx)(j.M5,{stat:"",icon:b,img:l})}),(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(j.uQ,{title:"Tickets per day",value:h}),(0,d.jsx)(j.uQ,{title:"Days since pickup",value:isNaN(e)?0:e}),(0,d.jsx)(j.uQ,{title:"Total Keys",value:isNaN(c)?0:c})]})]},"".concat(b,"-").concat(f))})}),children:(0,d.jsx)(j.M5,{stat:null==b?void 0:b.totalAmount,icon:"TixCol",img:l})}),(0,d.jsx)(j.M5,{stat:n,icon:"SilverPen",img:l}),(0,d.jsx)(j.M5,{stat:o,icon:"PremiumGem",img:l}),(0,d.jsx)(j.M5,{stat:p,img:l,icon:"MGp"}),null==f?void 0:f.map(function(a,f){var b=a.rawName,h=a.amount,c=a.totalAmount,i=a.amountPerDay,e=a.daysSincePickup;return(0,d.jsx)(k.Z,{title:(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(j.uQ,{title:"Keys per day",value:i}),(0,d.jsx)(j.uQ,{title:"Days since pickup",value:isNaN(e)?0:e}),(0,d.jsx)(j.uQ,{title:"Total Keys",value:isNaN(c)?0:c})]}),children:(0,d.jsx)(j.M5,{stat:h,icon:b,img:l})},"".concat(b,"-").concat(f))})]})]})},n=a(5861),o=a(3133),p=a(5862);function q(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var r=function(a){var f=a.name,g=a.description,b=a.shrineLevel,c=a.progress,e=Math.floor(20*(b-1)+6*b*Math.pow(1.63,b-1));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.Z,{fontWeight:"bold",variant:"h5",children:[(0,o.cleanUnderscore)(f)," Lv.",b]}),(0,d.jsx)(n.Z,{variant:"body1",children:g}),(0,d.jsx)(n.Z,{fontWeight:"bold",children:"Progress:"}),(0,d.jsx)(p.Z,{percent:c/e*100,label:!1}),(0,d.jsxs)(n.Z,{variant:"body1",children:[(0,o.numberWithCommas)(parseInt(c))," / ",(0,o.numberWithCommas)(parseInt(e))]})]})},s=function(b){var a=b.shrines;return(0,d.jsx)(g.Z,{justifyContent:"center",direction:"row",flexWrap:"wrap",gap:2,children:null==a?void 0:a.map(function(a,c){var e=a.name,f=a.rawName,g=a.shrineLevel,b=a.desc,h=a.bonus,i=(0,o.cleanUnderscore)(null==b?void 0:b.replace("{",(0,o.kFormatter)(h,2)));return(0,d.jsx)(k.Z,{title:(0,d.jsx)(r,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){q(d,a,c[a])})}return d}({},a,{description:i})),children:(0,d.jsx)(j.M5,{stat:g,icon:f,img:{style:{width:50,height:50}}})},e+c)})})},t=a(8216);function u(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var v=function(a){var c=a.effect,g=a.bonus,h=a.name,b=a.level,e=a.progress,f=Math.round(Math.pow(b,1.17)*Math.pow(1.35,b/10)+1),i=(0,o.cleanUnderscore)((0,o.pascalCase)(null==c?void 0:c.replace(/(%?)(@)/,"$2$1_").replace("@",Math.round(b*g))));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Z,{fontWeight:"bold",variant:"h5",children:(0,t.Z)((0,o.cleanUnderscore)(h.toLowerCase()))}),(0,d.jsx)(n.Z,{variant:"body1",children:i}),(0,d.jsx)(p.Z,{percent:e/f*100,label:!1}),(0,d.jsxs)(n.Z,{variant:"body2",children:[Math.floor(e)," / ",f]})]})},w=function(b){var a=b.statues;return(0,d.jsx)(g.Z,{flexWrap:"wrap",direction:"row",justifyContent:"center",gap:2,children:null==a?void 0:a.map(function(a,b){var c=a.name,e=a.rawName,f=a.level;return(0,d.jsx)("div",{children:(0,d.jsx)(k.Z,{title:(0,d.jsx)(v,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){u(d,a,c[a])})}return d}({},a)),children:(0,d.jsx)(j.M5,{stat:f,icon:e,img:{style:{width:40,height:50,objectFit:"contain"}}})})},c+b)})})},x=a(6242),y=a(4267),z=a(7294),A=function(a){var c=a.title,b=a.highscore;return(0,d.jsxs)(g.Z,{gap:1.5,justifyContent:"center",children:[(0,d.jsx)(n.Z,{variant:"h5",children:c}),(0,d.jsx)(x.Z,{children:(0,d.jsx)(y.Z,{children:null==b?void 0:b.map(function(a,b){var e=(null==a?void 0:a.score)?null==a?void 0:a.score:a,c=(null==a?void 0:a.minigame)||"".concat(b+1);return(0,d.jsxs)("div",{children:[c?(0,d.jsxs)(n.Z,{variant:"body1",component:"span",children:[c.capitalize(),": "]}):null,(0,d.jsx)(n.Z,{variant:"body1",component:"span",children:(0,o.numberWithCommas)(parseInt(e))})]},"".concat(b,"-").concat(b))})})})]})},B=function(a){var e=a.text,f=a.icon,b=a.stat,c=a.formatting,h="k"===(void 0===c?"commas":c)?(0,o.kFormatter)(b):(0,o.numberWithCommas)(b);return(0,d.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1.5,children:[(0,d.jsx)("img",{style:{width:40,height:40},src:"".concat(o.prefix,"data/").concat(f,".png"),alt:""}),(0,d.jsxs)(n.Z,{variant:"body1",component:"span",children:[e," :"]}),(0,d.jsx)(n.Z,{variant:"body1",component:"span",children:h})]})},C=function(t){var b,c,e,f,h,i,j,k,l,m,o,p,q,r,s,a=t.account,y=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(b,a){return b+(null==a?void 0:a.reduce(function(a,b){return a+b.level},0))},0):0},A=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(b,a){return b+(null==a?void 0:a.reduce(function(a,b){return a+b.level},0))},0):0},C=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(a,b){return a+b.level},0):0},D=function(b){var a;return b?null===(a=Object.values(b))|| void 0===a?void 0:a.reduce(function(a,b){return a+b.shrineLevel},0):0},u=(0,z.useMemo)(function(){var b;return y(null==a?void 0:null===(b=a.alchemy)|| void 0===b?void 0:b.bubbles)},[a]),v=(0,z.useMemo)(function(){return A(null==a?void 0:a.stamps)},[a]),w=(0,z.useMemo)(function(){return C(null==a?void 0:a.statues)},[a]),x=(0,z.useMemo)(function(){return D(null==a?void 0:a.shrines)},[a]);return(0,d.jsxs)(g.Z,{children:[(0,d.jsx)(n.Z,{variant:"h5",children:"Totals"}),(0,d.jsx)(B,{text:"Total Bubbles",icon:"aBrewOptionA0",stat:u}),(0,d.jsx)(B,{text:"Total Stamps",icon:"StampA34",stat:v}),(0,d.jsx)(B,{text:"Total Statues",icon:"EquipmentStatues1",stat:w}),(0,d.jsx)(B,{text:"Total Shrines",icon:"UISkillIcon639",stat:x}),(0,d.jsx)(B,{text:"Highest Damage",icon:"StampA8",stat:null==a?void 0:null===(b=a.tasks)|| void 0===b?void 0:null===(c=b[0])|| void 0===c?void 0:null===(e=c[1])|| void 0===e?void 0:e[0],formatting:"k"}),(0,d.jsx)(B,{text:"PO Orders",icon:"DeliveryBox",stat:null==a?void 0:null===(f=a.tasks)|| void 0===f?void 0:null===(h=f[0])|| void 0===h?void 0:null===(i=h[1])|| void 0===i?void 0:i[5]}),(0,d.jsx)(B,{text:"Monsters Killed",icon:"UISkillIcon110",stat:null==a?void 0:null===(j=a.tasks)|| void 0===j?void 0:null===(k=j[0])|| void 0===k?void 0:null===(l=k[0])|| void 0===l?void 0:l[0]}),(0,d.jsx)(B,{text:"Refined Salts",icon:"TaskSc6",stat:null==a?void 0:null===(m=a.tasks)|| void 0===m?void 0:null===(o=m[0])|| void 0===o?void 0:null===(p=o[2])|| void 0===p?void 0:p[0]}),(0,d.jsx)(B,{text:"Total Mats Printed",icon:"PrintSlot",stat:null==a?void 0:null===(q=a.tasks)|| void 0===q?void 0:null===(r=q[0])|| void 0===r?void 0:null===(s=r[2])|| void 0===s?void 0:s[3],formatting:"k"})]})},D=a(6998),E=a(8211),F=a(2962);function G(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var H={marginTop:4,display:{xs:"flex",sm:"none"}},I=function(){var b,c,i,j,k,l,n,o,p,a=(0,z.useContext)(D.I).state;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(F.PB,{title:"Idleon Toolbox | General",description:"General account information"}),(0,d.jsxs)(e.ZP,{container:!0,justifyContent:"center",gap:5,columns:{md:8,lg:12,xl:16},children:[(0,d.jsxs)(e.ZP,{item:!0,xs:12,sm:12,md:5,children:[(0,d.jsx)(h.Z,{obols:null==a?void 0:null===(b=a.account)|| void 0===b?void 0:b.obols,type:"account"}),(0,d.jsx)(f.Z,{sx:H})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(m,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){G(d,a,c[a])})}return d}({},(null==a?void 0:null===(c=a.account)|| void 0===c?void 0:c.currencies)||{})),(0,d.jsx)(f.Z,{sx:H})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(s,{shrines:null==a?void 0:null===(i=a.account)|| void 0===i?void 0:i.shrines}),(0,d.jsx)(f.Z,{sx:H})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(E.Z,{libraryTimes:null==a?void 0:null===(j=a.account)|| void 0===j?void 0:j.libraryTimes,lastUpdated:null==a?void 0:a.lastUpdated}),(0,d.jsx)(f.Z,{sx:H})]}),(0,d.jsxs)(e.ZP,{item:!0,xs:3,children:[(0,d.jsx)(w,{statues:null==a?void 0:null===(k=a.account)|| void 0===k?void 0:k.statues}),(0,d.jsx)(f.Z,{sx:H})]}),(0,d.jsx)(e.ZP,{item:!0,xs:3,children:(0,d.jsxs)(g.Z,{gap:1.5,children:[(0,d.jsx)(A,{title:"Colosseum Highscores",highscore:null==a?void 0:null===(l=a.account)|| void 0===l?void 0:null===(n=l.highscores)|| void 0===n?void 0:n.coloHighscores}),(0,d.jsx)(f.Z,{sx:H}),(0,d.jsx)(A,{title:"Minigames Highscores",highscore:null==a?void 0:null===(o=a.account)|| void 0===o?void 0:null===(p=o.highscores)|| void 0===p?void 0:p.minigameHighscores}),(0,d.jsx)(f.Z,{sx:H})]})}),(0,d.jsx)(e.ZP,{item:!0,xs:3,children:(0,d.jsx)(C,{account:null==a?void 0:a.account})})]})]})}}},function(a){a.O(0,[9030,8410,5625,9774,2888,179],function(){return a(a.s=2404)}),_N_E=a.O()}])