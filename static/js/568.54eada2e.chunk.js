"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568],{742:function(n,e,r){r.d(e,{Bt:function(){return h},Hq:function(){return l},ZS:function(){return i},d5:function(){return f},h_:function(){return p}});var t=r(861),c=r(757),a=r.n(c),u=r(218),o="bb3421bd0819dc82dbf8039d45c8f34c",s="https://api.themoviedb.org/3/",i=function(){var n=(0,t.Z)(a().mark((function n(){var e,r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(s,"trending/movie/day?api_key=").concat(o),n.next=4,fetch(e);case 4:return r=n.sent,n.next=7,r.json();case 7:return t=n.sent,n.abrupt("return",t.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0,"fetchPopular");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&include_adult=false"),n.next=4,fetch(r);case 4:return t=n.sent,n.next=7,t.json();case 7:return c=n.sent,n.abrupt("return",c.results);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(s,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"),n.next=4,fetch(r);case 4:return t=n.sent,n.next=7,t.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(s,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"),n.next=4,fetch(r);case 4:return t=n.sent,n.next=7,t.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),n.next=4,fetch(r);case 4:return t=n.sent,n.next=7,t.json();case 7:return c=n.sent,n.abrupt("return",c);case 11:n.prev=11,n.t0=n.catch(0),u.ZP.error("Something vent wrong:("),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},568:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,c=r(168),a=r(413),u=r(861),o=r(885),s=r(757),i=r.n(s),l=r(871),p=r(791),f=r(742),h=r(444),v=r(243),d=r(184);function g(){return(0,d.jsxs)(b,{children:[(0,d.jsx)(v.W0,{height:100,width:100,radius:5,color:"#3911be",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0}),";"]})}var x,m,Z,w,b=h.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=h.ZP.h2(x||(x=(0,c.Z)(["\n  margin: 0 0 0 30px;\n"]))),y=h.ZP.ul(m||(m=(0,c.Z)(["\n  padding: 10px;\n  margin: 0;\n"]))),j=h.ZP.li(Z||(Z=(0,c.Z)(["\n  list-style: none;\n  margin: 0 30px;\n  & h3 {\n    margin: 10px 0;\n  }\n  & p {\n    margin-bottom: 30px;\n  }\n"]))),_=h.ZP.p(w||(w=(0,c.Z)(["\n  margin-left: 30px;\n  font-size: 20px;\n"]))),S=function(){var n=(0,p.useState)({items:[],loading:!1,error:null}),e=(0,o.Z)(n,2),r=e[0],t=e[1],c=(0,l.UO)().id;(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,f.Bt)(c);case 4:e=n.sent,t((function(n){return(0,a.Z)((0,a.Z)({},n),{},{items:e.results})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:n.t0})}));case 11:return n.prev=11,t((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[c,t]);var s=r.items,h=s.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,d.jsxs)(j,{children:[(0,d.jsx)("h3",{children:r}),(0,d.jsx)("p",{children:t})]},e)}));return(0,d.jsxs)("div",{children:[(0,d.jsx)(k,{children:"Reviews"}),r.loading&&(0,d.jsx)(g,{}),s.length>0?(0,d.jsx)(y,{children:h}):(0,d.jsx)(_,{children:"There is no reviews... yet"})]})}}}]);
//# sourceMappingURL=568.54eada2e.chunk.js.map