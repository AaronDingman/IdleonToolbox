(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[961],{75503:function(e,n,s){"use strict";var l=s(64836);n.Z=void 0;var i=l(s(64938)),r=s(85893),t=(0,i.default)((0,r.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=t},90813:function(e,n,s){"use strict";var l=s(64836);n.Z=void 0;var i=l(s(64938)),r=s(85893),t=(0,i.default)((0,r.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");n.Z=t},1849:function(e,n,s){"use strict";var l=s(64836);n.Z=void 0;var i=l(s(64938)),r=s(85893),t=(0,i.default)((0,r.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");n.Z=t},51060:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guilds",function(){return s(16130)}])},16130:function(e,n,s){"use strict";s.r(n);var l=s(85893),i=s(67294),r=s(51575),t=s(15861),d=s(51233),o=s(98456),a=s(72882),u=s(90629),c=s(7906),x=s(53184),h=s(53816),Z=s(53252),j=s(295),m=s(81458),p=s(57922),v=s(2962),g=s(1356),b=s(93946),f=s(75503),w=s(90813),y=s(87357),G=s(40929),S=s(61436),I=s(1849),_=s(70478),C=s(41915);n.default=()=>{let[e,n]=(0,i.useState)({func:null}),[s,L]=(0,i.useState)(null),[N,T]=(0,i.useState)(null),k=(0,g.tryToParse)(sessionStorage.getItem("snapshotDate")),E=(0,i.useCallback)(e=>{var n;return null==e?void 0:null===(n=e.slice(0,100))||void 0===n?void 0:n.map(e=>{var n,s,l,i,r;let t=null==e?void 0:null===(n=e.members)||void 0===n?void 0:n.find(e=>{let{g:n}=e;return 0===n}),d=null==e?void 0:null===(i=e.members)||void 0===i?void 0:null===(l=i.sort((e,n)=>(null==n?void 0:n.e)-(null==e?void 0:e.e)))||void 0===l?void 0:null===(s=l.slice(0,5))||void 0===s?void 0:s.map(e=>{let{a:n,e:s}=e;return{name:n,gpEarned:s}});return{guildIcon:null==e?void 0:e.guildIcon,guildName:null==e?void 0:e.guildName,totalGp:null==e?void 0:e.totalGp,membersCount:null==e?void 0:null===(r=e.members)||void 0===r?void 0:r.length,leader:t,topContributors:d}})},[]),handleGuildsUpdate=e=>{let n=E(e);sessionStorage.setItem("guildsLeaderboard",JSON.stringify(n)),sessionStorage.setItem("snapshotDate",new Date().getTime()),L(n)},subscribe=async()=>{let e=(0,r.n6)(handleGuildsUpdate);n({func:e})};return(0,i.useEffect)(()=>{let n=(0,g.getDuration)(new Date,k);return(null==n?void 0:n.days)>0||(null==n?void 0:n.hours)>0||(null==n?void 0:n.minutes)>=15||!k?setTimeout(()=>subscribe(),3e3):L((0,g.tryToParse)(sessionStorage.getItem("guildsLeaderboard"))),()=>{e&&"function"==typeof(null==e?void 0:e.func)&&(null==e||e.func())}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.PB,{title:"Idleon Toolbox | Guilds",description:"Top guilds in idleon"}),(0,l.jsx)(t.Z,{variant:"h2",children:"Guilds Leaderboard"}),(0,l.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,l.jsxs)(d.Z,{gap:2,direction:"row",children:["Last Updated: ",s?(0,S.Z)(k)?(0,G.Z)(k,"dd/MM/yyyy HH:mm:ss"):null:(0,l.jsx)(o.Z,{size:"22px",disableShrink:!0})]}),(0,l.jsx)(_.Z,{title:"Reload guild data",children:(0,l.jsx)("span",{children:(0,l.jsx)(b.Z,{disabled:!s,onClick:()=>{if(!s)return null;L(null),sessionStorage.removeItem("guildsLeaderboard"),sessionStorage.removeItem("snapshotDate"),subscribe()},children:(0,l.jsx)(I.Z,{})})})})]}),(0,l.jsx)(t.Z,{variant:"caption",component:"div",sx:{mb:2},children:"* Updates every 15 minutes"}),(0,l.jsx)(a.Z,{component:u.Z,children:(0,l.jsxs)(c.Z,{size:"small",children:[(0,l.jsx)(x.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(Z.Z,{sx:{width:"1px"}}),(0,l.jsx)(Z.Z,{sx:{width:30}}),(0,l.jsx)(Z.Z,{children:"Guild Name"}),(0,l.jsx)(Z.Z,{children:"Guild Points"}),(0,l.jsx)(Z.Z,{children:"Guild Leader"}),(0,l.jsx)(Z.Z,{children:"Guild Level"}),(0,l.jsx)(Z.Z,{children:"Members Count"})]})}),(0,l.jsxs)(j.Z,{children:[s?null:(0,l.jsx)(h.Z,{children:(0,l.jsx)(Z.Z,{colSpan:7,align:"center",children:(0,l.jsxs)(d.Z,{alignItems:"center",gap:2,children:[(0,l.jsx)(t.Z,{children:"Gathering guild info"}),(0,l.jsx)(m.Z,{sx:{width:300}})]})})}),null==s?void 0:s.map((e,n)=>{let{totalGp:s,leader:r,membersCount:o,guildIcon:a,guildName:u,topContributors:m}=e,v=(0,C.J2)(s);return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsxs)(h.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,l.jsx)(Z.Z,{sx:{p:"4px"},children:(0,l.jsx)(b.Z,{"aria-label":"expand row",size:"small",onClick:()=>T(N===n?null:n),children:N===n?(0,l.jsx)(w.Z,{}):(0,l.jsx)(f.Z,{})})}),(0,l.jsx)(Z.Z,{sx:{p:1,textAlign:"center"},children:n+1}),(0,l.jsx)(Z.Z,{children:(0,l.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,l.jsx)("img",{src:"".concat(g.prefix,"data/G2icon").concat(a,".png"),style:{width:24},alt:"guild-icon"}),(0,l.jsx)(t.Z,{children:u})]})}),(0,l.jsx)(Z.Z,{children:(0,g.numberWithCommas)(s)}),(0,l.jsx)(Z.Z,{children:null==r?void 0:r.a}),(0,l.jsx)(Z.Z,{children:v}),(0,l.jsxs)(Z.Z,{children:[o," / ",30+4*v]})]}),(0,l.jsx)(h.Z,{sx:{"& > *":{borderBottom:"unset"}},children:(0,l.jsx)(Z.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:7,children:(0,l.jsx)(p.Z,{in:N===n,timeout:"auto",unmountOnExit:!0,children:(0,l.jsxs)(y.Z,{sx:{p:1},children:[(0,l.jsx)(t.Z,{variant:"h6",sx:{mb:1},children:"Top Contributors"}),(0,l.jsxs)(c.Z,{size:"small",sx:{width:300},children:[(0,l.jsx)(x.Z,{children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(Z.Z,{children:"Name"}),(0,l.jsx)(Z.Z,{children:"Gp"})]})}),(0,l.jsx)(j.Z,{children:null==m?void 0:m.map(e=>{let{name:n,gpEarned:s}=e;return(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(Z.Z,{children:n}),(0,l.jsx)(Z.Z,{children:(0,g.numberWithCommas)(s)})]},"top-3-".concat(n))})})]})]})})})})]},"row"+n)})]})]})})]})}}},function(e){e.O(0,[2307,9774,2888,179],function(){return e(e.s=51060)}),_N_E=e.O()}]);