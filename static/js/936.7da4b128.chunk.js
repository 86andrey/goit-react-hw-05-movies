"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{742:function(n,e,t){t.d(e,{Bt:function(){return v},Hq:function(){return l},ZS:function(){return i},d5:function(){return f},h_:function(){return p}});var r=t(861),c=t(757),a=t.n(c),u=t(218),o="bb3421bd0819dc82dbf8039d45c8f34c",s="https://api.themoviedb.org/3/",i=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(s,"trending/movie/day?api_key=").concat(o),n.next=4,fetch(e);case 4:return t=n.sent,n.next=7,t.json();case 7:return r=n.sent,n.abrupt("return",r.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0,"fetchPopular");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&include_adult=false"),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,n.abrupt("return",c.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),n.next=4,fetch(t);case 4:return r=n.sent,n.next=7,r.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},126:function(n,e,t){var r=t(871),c=t(501),a=t(184),u=function(n){var e=n.items,t=(0,r.TH)(),u=e.map((function(n){var e=n.id,r=n.title;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{state:{from:t},to:"/movies/".concat(e),children:r})},e)}));return(0,a.jsx)("ul",{children:u})};e.Z=u,u.defaultProps={items:[]}},936:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(982),c=t(413),a=t(861),u=t(885),o=t(757),s=t.n(o),i=t(791),l=t(742),p=t(126),f="Home_container__w+u63",v=t(184),h=function(){var n=(0,i.useState)({items:[],loading:!1,error:null}),e=(0,u.Z)(n,2),t=e[0],o=e[1];(0,i.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o((function(n){return(0,c.Z)((0,c.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,l.ZS)();case 4:e=n.sent,o((function(n){return(0,c.Z)((0,c.Z)({},n),{},{items:[].concat((0,r.Z)(n.items),(0,r.Z)(e))})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o((function(e){return(0,c.Z)((0,c.Z)({},e),{},{error:n.t0})}));case 11:return n.prev=11,o((function(n){return(0,c.Z)((0,c.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[o]);var h=t.items,d=t.loading,m=t.error;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h2",{children:"Trending today"}),h.length>0&&(0,v.jsx)(p.Z,{items:h}),d&&(0,v.jsx)("p",{children:"...load Movie"}),m&&(0,v.jsx)("p",{children:"...Movie load failed"})]})}}}]);
//# sourceMappingURL=936.7da4b128.chunk.js.map