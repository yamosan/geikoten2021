(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{4846:function(r,e,t){"use strict";t.d(e,{$_:function(){return m},or:function(){return u},SG:function(){return b}});var s=t(1664),a=t(7973),n=[{id:"shutter",title:"\u30b7\u30e3\u30c3\u30bf\u30fc\u306e\u90e8\u5c4b",href:"/project/exhibition/shutter"},{id:"film",title:"\u30d5\u30a3\u30eb\u30e0\u306e\u90e8\u5c4b",href:"/project/exhibition/film"},{id:"lens",title:"\u30ec\u30f3\u30ba\u306e\u90e8\u5c4b",href:"/project/exhibition/lens"}],i=t(3966),o=t(5893),l=function(r){return n.find((function(e){return e.id===r})).title},m=function(r){var e=function(r){var e=n.findIndex((function(e){return e.id===r})),t=n.length,s=e+1<t?e+1:0;return{prev:n[e-1>=0?e-1:t-1],next:n[s]}}(r.currentTheme),t=e.prev,a=e.next,m=(0,i.Z)("(min-width: 768px)");return(0,o.jsx)(o.Fragment,{children:m?(0,o.jsx)("div",{className:"w-full md:pl-shead h-[165px] md:h-[245px]",children:(0,o.jsxs)("div",{className:"h-full flex items-center justify-between max-w-[810px] mx-auto px-4",children:[(0,o.jsx)(c,{href:t.href,text:l(t.id)}),(0,o.jsx)(s.default,{href:"/#project",children:(0,o.jsx)("a",{className:"text-text border-b border-brown",children:"\u90e8\u5c4b\u9078\u629e\u306b\u623b\u308b"})}),(0,o.jsx)(x,{href:a.href,text:l(a.id)})]})}):(0,o.jsxs)("div",{className:"flex flex-col space-y-6 justify-center items-center w-full md:pl-shead h-[196px]",children:[(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)(s.default,{href:"/project/exhibition",children:(0,o.jsx)("a",{className:"text-text border-b border-brown",children:"\u90e8\u5c4b\u9078\u629e\u306b\u623b\u308b"})})}),(0,o.jsxs)("div",{className:"flex items-center justify-between w-full mx-auto px-4",children:[(0,o.jsx)(c,{href:t.href,text:l(t.id)}),(0,o.jsx)(x,{href:a.href,text:l(a.id)})]})]})})},c=function(r){var e=r.href,t=r.text;return(0,o.jsx)(s.default,{href:e,children:(0,o.jsx)("a",{children:(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)(a.Eh,{round:!0,direction:"left",stroke:"black",className:"w-[15px] mt-1.5"}),(0,o.jsx)("div",{className:"text-text border-b border-brown",children:t})]})})})},x=function(r){var e=r.href,t=r.text;return(0,o.jsx)(s.default,{href:e,children:(0,o.jsx)("a",{children:(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)("div",{className:"text-text border-b border-brown",children:t}),(0,o.jsx)(a.Eh,{round:!0,direction:"right",stroke:"black",className:"w-[15px] mt-1.5"})]})})})},d=t(7294),f=t(4836),h=t(7924),j=t(3639),u=function(r){var e=r.works,t=r.themeColor,s=(0,i.Z)("(min-width: 768px)"),a=(0,j.E)(),n=a.votedIds,l=a.vote,m=(0,d.useMemo)((function(){return new Set(n)}),[n]);return(0,o.jsx)(f.$0,{heading:"WORKS",subHeading:"\u4f5c\u54c1",headerColor:t,className:"relative z-10 mt-[-80px] bg-white",children:(0,o.jsx)("div",{className:"md:pl-shead pt-3",children:(0,o.jsx)("div",{className:"w-11/12 mx-auto lg:max-w-app ",children:(0,o.jsx)("div",{className:"grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full",children:e.map((function(r){return(0,o.jsx)(h.C,{work:r,dialogLayout:s?"row":"column",voted:m.has(r.id),handleClick:function(){return l(r.id)}},r.id)}))})})})})},w=t(5988),p=t(6010),v=t(9896),b=function(r){var e=r.rooms,t=(0,i.Z)("(min-width: 1024px)"),s=(0,i.Z)("(min-width: 640px)");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("main",{className:"jsx-1198594563 bg-white md:pl-shead pt-14 pb-20",children:[(0,o.jsxs)("div",{className:"jsx-1198594563 flex flex-col space-y-2 items-center px-10 w-max max-w-full mx-auto",children:[(0,o.jsxs)("div",{className:"jsx-1198594563 "+((0,p.Z)("flex items-start md:items-center space-x-1.5 pb-2 md:px-3 border-b border-lightBrown border-dashed","hachinoji")||""),children:[(0,o.jsx)(f.tT,{disabled:!0,className:"flex-shrink-0"}),(0,o.jsxs)("h4",{className:"jsx-1198594563 font-bold text-base pt-1 md:pt-0 sm",children:["\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001",!s&&(0,o.jsx)("br",{className:"jsx-1198594563"}),"\u597d\u304d\u306a\u4f5c\u54c1\u306b\u6295\u7968\u3057\u3088\u3046\uff01"]})]}),(0,o.jsx)("p",{className:"jsx-1198594563 self-end",children:(0,o.jsxs)("time",{className:"jsx-1198594563",children:["\u3010\u671f\u9593:",(0,o.jsx)("time",{dateTime:"2021-10-23",className:"jsx-1198594563",children:"2021/10/23"}),"~",(0,o.jsx)("time",{dateTime:"2021-10-24",className:"jsx-1198594563",children:"24"}),"\u3011"]})})]}),(0,o.jsx)("div",{className:"jsx-1198594563 mt-12 w-11/12 lg:px-4 lg:max-w-[845px] mx-auto",children:(0,o.jsx)("div",{className:"jsx-1198594563 "+((0,p.Z)("flex flex-col space-y-16 justify-center pb-24")||""),children:e.map((function(r,e){return(0,o.jsx)("div",{className:"jsx-1198594563",children:(0,o.jsx)(f.ie,{room:r,layout:t?e%2===0?"row":"row-reverse":"column",showLink:!0,className:"min-h-[265px]"})},r.id)}))})}),(0,o.jsx)("hr",{className:"jsx-1198594563 border-none bg-gray h-px my-8 lg:mt-30 lg:mb-16"}),(0,o.jsx)("div",{className:"jsx-1198594563 w-11/12 lg:px-4 lg:max-w-[845px] mx-auto",children:(0,o.jsx)(g,{})})]}),(0,o.jsx)(w.default,{id:"1198594563",children:[".hachinoji.jsx-1198594563{position:relative;}",".hachinoji.jsx-1198594563::before{position:absolute;bottom:50%;left:0px;height:80%;-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;--tw-translate-y:50%;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-translate-x:-1rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-rotate:-30deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);border-left-width:3px;}","@media (min-width:640px){.hachinoji.jsx-1198594563::before{--tw-rotate:-45deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}}",'.hachinoji.jsx-1198594563::before{content:"";}',".hachinoji.jsx-1198594563::after{position:absolute;bottom:50%;right:0px;height:80%;-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;--tw-translate-y:50%;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-translate-x:1rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-rotate:30deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);border-right-width:3px;}","@media (min-width:640px){.hachinoji.jsx-1198594563::after{--tw-rotate:45deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}}",'.hachinoji.jsx-1198594563::after{content:"";}']})]})},g=function(){return(0,o.jsxs)("div",{className:(0,p.Z)("flex flex-col space-y-2 lg:flex-row lg:space-x-6 items-center"),children:[(0,o.jsx)("div",{className:"flex-[5.8] h-full w-full relative rounded-2xl overflow-hidden",children:(0,o.jsx)(v.Ee,{src:"/images/cluster_thumbnail.png",layout:"responsive",width:475,height:163,alt:"cluster",objectFit:"cover"})}),(0,o.jsxs)("div",{className:"flex-[4.2] pt-1 text-text",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("h3",{className:"font-bold text-[23px]",children:"\u3010\u304a\u77e5\u3089\u305b\u3011cluster\u3067\u3082\u5c55\u793a\u4e2d"}),(0,o.jsxs)("p",{className:"leading-relaxed mt-2",children:["\u30d0\u30fc\u30c1\u30e3\u30eb\u82b8\u5de5\u68df\u306b\u5c55\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff01",(0,o.jsx)("br",{}),"\u662f\u975e\u898b\u306b\u884c\u3063\u3066\u307f\u3066\u306d"]})]}),(0,o.jsx)("div",{className:"mt-6 lg:mt-4 flex justify-center lg:justify-end",children:(0,o.jsx)(f.Qj,{direction:"right",href:"/about",children:"\u30d0\u30fc\u30c1\u30e3\u30eb\u4f1a\u5834\u306b\u3064\u3044\u3066"})})]})]})}},1064:function(r,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return d},default:function(){return f}});var s=t(583),a=t(4846),n=t(6409),i=t(9896),o=t(4836),l=t(3966),m=t(5893),c=function(r){var e=r.room,t=(0,l.Z)("(min-width: 1024px)");return(0,m.jsx)("div",{className:"relative",children:(0,m.jsxs)(n.ZP,{className:"relative",children:[(0,m.jsx)(i.Ee,{src:"/images/work_bg.png",alt:"\u80cc\u666f",layout:"fill",objectFit:"cover",priority:!0}),(0,m.jsx)("div",{className:"flex justify-center md:pl-shead h-full relative pt-thead md:pt-0 pb-[80px]",children:(0,m.jsx)("div",{className:"w-11/12 lg:w-5/6 h-full flex justify-center items-center lg:max-w-app lg:mx-auto",children:(0,m.jsx)(o.ie,{room:e,layout:t?"row":"column",card:!0})})})]})})},x=t(9837),d=!0,f=function(r){var e=r.room,t=r.works;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.A,{children:[(0,m.jsx)(c,{room:e}),(0,m.jsx)(a.or,{works:t,themeColor:e.theme}),(0,m.jsx)(a.$_,{currentTheme:e.theme})]}),(0,m.jsx)(x.I,{path:"/project/exhibition/".concat(e.theme),subtitle:e.title})]})}},3513:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/exhibition/[theme]",function(){return t(1064)}])}},function(r){r.O(0,[370,534,774,888,179],(function(){return e=3513,r(r.s=e);var e}));var e=r.O();_N_E=e}]);