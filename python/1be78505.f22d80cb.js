(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{339:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return c})),t.d(n,"a",(function(){return r.a})),t.d(n,"b",(function(){return o})),t.d(n,"f",(function(){return s})),t.d(n,"e",(function(){return i}));t(340);var u=t(346),r=t.n(u),a=["en"],c=!1,o="e666dac7",s=10,i=50},341:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var u=t(338),r=t(342);function a(e,n,t){for(var c,o=[],s=Object(u.a)(n);!(c=s()).done;){var i=c.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&o.push(a(e.substr(0,l),n)),o.push("<mark>"+Object(r.a)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&o.push(a(e.substr(h),n));break}}return 0===o.length?t?"<mark>"+Object(r.a)(e)+"</mark>":Object(r.a)(e):o.join("")}},342:function(e,n,t){"use strict";function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}t.d(n,"a",(function(){return u}))},348:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var u=t(344),r=t.n(u),a=t(338),c=t(345),o=t(340),s=t.n(o),i=t(339);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(n){var t,u,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(n+"search-index.json?_="+i.b);case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,u=t.map((function(e,n){var t=e.documents,u=e.index;return{type:n,documents:t,index:s.a.Index.load(u)}})),c=t.reduce((function(e,n){for(var t,u=Object(a.a)(n.index.invertedIndex);!(t=u()).done;){var r=t.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(r[0][0])&&e.add(r[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},349:function(e,n,t){"use strict";function u(e,n){for(var t=[],u=0,r=Object.values(e);u<r.length;u++){var a=r[u];a[n]&&t.push.apply(t,a[n].position)}return t.sort((function(e,n){return e[0]-n[0]||n[1]-e[1]}))}t.d(n,"a",(function(){return u}))},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var u=t(0),r=t.n(u),a=t(347),c=t(57),o=t.n(c);function s(e){var n=e.className;return r.a.createElement("div",{className:Object(a.a)(o.a.loadingRing,n)},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},351:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var u=t(338),r=t(340),a=t.n(r);var c=t(339);function o(e,n,t){return function(n,r){var o=function(e,n){if(1===n.length&&["ja","jp","th"].includes(n[0]))return a.a[n[0]].tokenizer(e).map((function(e){return e.toString()}));var t=/[^-\s]+/g;return n.includes("zh")&&(t=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(t)||[]}(n,c.c);if(0!==o.length){var s,i=[{tokens:s=o,term:s.map((function(e){return{value:e,presence:a.a.Query.presence.REQUIRED,wildcard:a.a.Query.wildcard.LEADING|a.a.Query.wildcard.TRAILING}}))}],l=[],h=function(){for(var n,r=p.value,a=r.term,c=r.tokens,o=function(){var r=n.value,o=r.documents,s=r.index,i=r.type;if(l.push.apply(l,s.query((function(e){for(var n,t=Object(u.a)(a);!(n=t()).done;){var r=n.value;e.term(r.value,{wildcard:r.wildcard,presence:r.presence})}})).slice(0,t).filter((function(e){return!l.some((function(n){return n.document.i.toString()===e.ref}))})).slice(0,t-l.length).map((function(n){var t=o.find((function(e){return e.i.toString()===n.ref}));return{document:t,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===t.p})),metadata:n.matchData.metadata,tokens:c,score:n.score}}))),l.length>=t)return{v:"break|search"}},s=Object(u.a)(e);!(n=s()).done;){var i=o();if("object"==typeof i)return i.v}};e:for(var p,d=Object(u.a)(i);!(p=d()).done;){if("break|search"===h())break e}var f=l.filter((function(e){return"/docs/api"!==e.document.u}));!function(e){e.forEach((function(e,n){e.index=n})),e.sort((function(n,t){var u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index,r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index;return-1===u&&(u=n.index),-1===r&&(r=t.index),u===r?0===n.type?-1:0===t.type?1:n.index-t.index:u-r}))}(f),function(e){e.forEach((function(n,t){t>0&&n.page&&e.some((function(e){return e.document===n.page}))&&(t<e.length-1&&e[t+1].page===n.page?n.isInterOfTree=!0:n.isLastOfTree=!0)}))}(f),r(f)}else r([])}}},353:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var u=t(342),r=t(341),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var n=[],t=0,u=e;u.length>0;){var r=u.match(a);if(!r){n.push(u);break}r.index>0&&n.push(u.substr(0,r.index)),n.push(r[0]),t+=r.index+r[0].length,u=e.substr(t)}return n}var o=t(339);function s(e,n,t,u){void 0===u&&(u=o.e);for(var r={chunkIndex:-1},a=i(e,n,t,0,0,r),c=a.slice(0,r.chunkIndex),s=a[r.chunkIndex],l=[s.html],h=a.slice(r.chunkIndex+1),p=s.textLength,d=0,f=0,D=!1,v=!1;p<u;)if((d<=f||0===h.length)&&c.length>0){var F=c.pop();p+F.textLength<=u?(l.unshift(F.html),d+=F.textLength,p+=F.textLength):(D=!0,c.length=0)}else{if(!(h.length>0))break;var g=h.shift();p+g.textLength<=u?(l.push(g.html),f+=g.textLength,p+=g.textLength):(v=!0,h.length=0)}return(D||c.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,n,t,a,o,s){var l=[],h=n[a],p=h[0],d=h[1];if(p<o)(a+=1)<n.length&&l.push.apply(l,i(e,n,t,a,o));else{p>o&&l.push.apply(l,c(e.substring(o,p)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}}))),s&&(s.chunkIndex=l.length),l.push({html:Object(r.a)(e.substr(p,d),t,!0),textLength:d});var f=p+d;(a+=1)<n.length?l.push.apply(l,i(e,n,t,a,f)):f<e.length&&l.push.apply(l,c(e.substr(f)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}})))}return l}},358:function(e,n,t){"use strict";var u=t(339),r=t(344),a=t.n(r),c=t(338),o=t(345),s=t(0),i=t.n(s),l=t(347),h=t(22),p=t(10),d=t(354),f=t(348),D=t(351),v=t(341),F=t(353),g=t(349),m=t(56),b=t.n(m);function x(e){var n=e.document,t=e.type,u=e.page,r=e.metadata,a=e.tokens,c=e.isInterOfTree,o=e.isLastOfTree,s=0===t,i=1===t,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),p='<span class="'+b.a.hitIcon+'">'+(s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",d=['<span class="'+b.a.hitTitle+'">'+Object(F.a)(n.t,Object(g.a)(r,"t"),a)+"</span>"];s||d.push('<span class="'+b.a.hitPath+'">'+Object(v.a)(u.t||(n.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>");var f='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[p,'<span class="'+b.a.hitWrapper+'">'],d,["</span>",f]).join("")}function C(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var A=t(350);function k(){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(259),t.e(262)]).then(t.t.bind(null,422,7));case 2:return(n=e.sent).noConflict(),e.abrupt("return",n.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";n.a=function(e){var n,t=e.handleSearchBarToggle,r=Object(h.default)().siteConfig.baseUrl,v=Object(d.useHistory)(),F=Object(d.useLocation)(),g=Object(s.useRef)(null),m=Object(s.useRef)("empty"),j=Object(s.useRef)(!1),w=Object(s.useState)(!1),E=w[0],y=w[1],I=Object(s.useState)(!1),L=I[0],B=I[1],M=Object(s.useCallback)(Object(o.a)(a.a.mark((function e(){var n,t,o,s,i,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===m.current){e.next=2;break}return e.abrupt("return");case 2:return m.current="loading",y(!0),e.next=6,Promise.all([Object(f.a)(r),k()]);case 6:n=e.sent,t=n[0],o=t.wrappedIndexes,s=t.zhDictionary,i=n[1],l=i(g.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(D.a)(o,s,u.f),templates:{suggestion:x,empty:C,footer:function(e){var n=e.query;if(!e.isEmpty){var t=document.createElement("a"),u=r+"search?q="+encodeURIComponent(n);t.href=u,t.textContent="See all results",t.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(u))}));var a=document.createElement("div");return a.className=b.a.hitFooter,a.appendChild(t),a}}}}]).on("autocomplete:selected",(function(e,n){var t=n.document,r=t.u,a=t.h,o=n.tokens,s=r;if(u.a&&o.length>0){for(var i,l=new URLSearchParams,h=Object(c.a)(o);!(i=h()).done;){var p=i.value;l.append(O,p)}s+="?"+l.toString()}a&&(s+=a),v.push(s)})),m.current="done",y(!1),j.current&&((h=g.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[r,v]);Object(s.useEffect)((function(){if(u.a){var e=p.a.canUseDOM?new URLSearchParams(F.search).getAll(O):[];if(0!==e.length){var n=document.querySelector("article");if(n)new u.a(n).mark(e)}}}),[F.search]);var R=Object(s.useCallback)((function(){j.current=!0,M(),t(!0)}),[t,M]),S=Object(s.useCallback)((function(){t(!1)}),[t]),z=Object(s.useCallback)((function(){M()}),[M]),H=Object(s.useCallback)((function(e){e.target.value&&B(!0)}),[]);return i.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(n={},n[b.a.searchIndexLoading]=E&&L,n))},i.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:z,onFocus:R,onBlur:S,onChange:H,ref:g}),i.a.createElement(A.a,{className:b.a.searchBarLoadingRing}))}}}]);