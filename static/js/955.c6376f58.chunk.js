"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[955],{742:function(e,n,t){t.d(n,{Bt:function(){return v},Hq:function(){return f},ZS:function(){return i},d5:function(){return l},h_:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u=t(218),o="bb3421bd0819dc82dbf8039d45c8f34c",s="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(s,"trending/movie/day?api_key=").concat(o),e.next=4,fetch(n);case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0,"fetchPopular");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&include_adult=false"),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c.results);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),u.ZP.error("Something vent wrong:("),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),u.ZP.error("Something vent wrong:("),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),u.ZP.error("Something vent wrong:("),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}()},126:function(e,n,t){var r=t(871),c=t(501),a=t(184),u=function(e){var n=e.items,t=(0,r.TH)(),u=n.map((function(e){var n=e.id,r=e.title;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{state:{from:t},to:"/movies/".concat(n),children:r})},n)}));return(0,a.jsx)("ul",{children:u})};n.Z=u,u.defaultProps={items:[]}},955:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(413),c=t(861),a=t(885),u=t(757),o=t.n(u),s=t(791),i=t(501),f=t(942),p=t(184),l=function(e){var n=e.onSubmit,t=(0,s.useState)({search:""}),c=(0,a.Z)(t,2),u=c[0],o=c[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,r.Z)({},u)),o({search:""})},children:[(0,p.jsx)("input",{name:"search",type:"text",value:u.search,onChange:function(e){var n=e.target,t=n.name,c=n.value;o((0,r.Z)((0,r.Z)({},u),{},(0,f.Z)({},t,c)))},placeholder:"\u041f\u043e\u0438\u0441\u043a",required:!0}),(0,p.jsx)("button",{type:"submit",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})},v=t(742),h=t(126),m="Movies_container__+-Cnt",d=function(){var e=(0,s.useState)({items:[],loading:!1,error:null}),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,i.lr)(),d=(0,a.Z)(f,2),g=d[0],x=d[1],Z=g.get("search");(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,(0,v.Hq)(Z);case 4:n=e.sent,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:n})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{error:e.t0})}));case 11:return e.prev=11,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Z&&e()}),[Z]);var w=t.items;return(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)(l,{onSubmit:function(e){var n=e.search;x({search:n})}}),w.length>0&&(0,p.jsx)(h.Z,{items:w})]})}}}]);
//# sourceMappingURL=955.c6376f58.chunk.js.map