(window.webpackJsonp=window.webpackJsonp||[]).push([[720],{790:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(839),c=n(842),s=n(843);t.default=function(){var e=Object(s.useVersions)(),t=Object(s.useLatestVersion)(),n=e.find((function(e){return"current"===e.name})),a=e.filter((function(e){return e!==t&&"current"!==e.name})),o=t,i="https://github.com/microsoft/playwright";return r.a.createElement(c.a,{title:"Versions",permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.a.createElement("main",{className:"container margin-vert--lg"},r.a.createElement("h1",null,"Versions"),o&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Latest version"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,o.name),r.a.createElement("td",null,r.a.createElement(u.a,{to:o.path+"/api/class-playwright"},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i+"/releases/tag/v"+o.name},"Release Notes")))))),n!==t&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Next"),r.a.createElement("td",null,r.a.createElement(u.a,{to:n.path+"/api/class-playwright"},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i},"Source Code")))))),a.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past versions"),r.a.createElement("table",null,r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",null,e.label),r.a.createElement("td",null,r.a.createElement(u.a,{to:e.path+"/api/class-playwright"},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:i+"/releases/tag/v"+e.name},"Release Notes")))})))))))}},826:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i}));n(827);var a=n(833),r=n.n(a),u=["en"],c=!1,s="e666dac7",o=10,i=50},828:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(825),r=n(829);function u(e,t,n){for(var c,s=[],o=Object(a.a)(t);!(c=o()).done;){var i=c.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&s.push(u(e.substr(0,l),t)),s.push("<mark>"+Object(r.a)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&s.push(u(e.substr(h),t));break}}return 0===s.length?n?"<mark>"+Object(r.a)(e)+"</mark>":Object(r.a)(e):s.join("")}},829:function(e,t,n){"use strict";function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return a}))},835:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(831),r=n.n(a),u=n(825),c=n(832),s=n(827),o=n.n(s),i=n(826);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+i.b);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,a=e.index;return{type:t,documents:n,index:o.a.Index.load(a)}})),c=n.reduce((function(e,t){for(var n,a=Object(u.a)(t.index.invertedIndex);!(n=a()).done;){var r=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(r[0][0])&&e.add(r[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},836:function(e,t,n){"use strict";function a(e,t){for(var n=[],a=0,r=Object.values(e);a<r.length;a++){var u=r[a];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,"a",(function(){return a}))},837:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),u=n(834),c=n(57),s=n.n(c);function o(e){var t=e.className;return r.a.createElement("div",{className:Object(u.a)(s.a.loadingRing,t)},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},838:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(825),r=n(827),u=n.n(r);var c=n(826);function s(e,t,n){return function(t,r){var s=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u.a[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(t,c.c);if(0!==s.length){var o,i=[{tokens:o=s,term:o.map((function(e){return{value:e,presence:u.a.Query.presence.REQUIRED,wildcard:u.a.Query.wildcard.LEADING|u.a.Query.wildcard.TRAILING}}))}],l=[],h=function(){for(var t,r=d.value,u=r.term,c=r.tokens,s=function(){var r=t.value,s=r.documents,o=r.index,i=r.type;if(l.push.apply(l,o.query((function(e){for(var t,n=Object(a.a)(u);!(t=n()).done;){var r=t.value;e.term(r.value,{wildcard:r.wildcard,presence:r.presence})}})).slice(0,n).filter((function(e){return!l.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-l.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),l.length>=n)return{v:"break|search"}},o=Object(a.a)(e);!(t=o()).done;){var i=s();if("object"==typeof i)return i.v}};e:for(var d,p=Object(a.a)(i);!(d=p()).done;){if("break|search"===h())break e}var f=l.filter((function(e){return"/docs/api"!==e.document.u}));!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var a=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===a&&(a=t.index),-1===r&&(r=n.index),a===r?0===t.type?-1:0===n.type?1:t.index-n.index:a-r}))}(f),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(f),r(f)}else r([])}}},840:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(829),r=n(828),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var t=[],n=0,a=e;a.length>0;){var r=a.match(u);if(!r){t.push(a);break}r.index>0&&t.push(a.substr(0,r.index)),t.push(r[0]),n+=r.index+r[0].length,a=e.substr(n)}return t}var s=n(826);function o(e,t,n,a){void 0===a&&(a=s.e);for(var r={chunkIndex:-1},u=i(e,t,n,0,0,r),c=u.slice(0,r.chunkIndex),o=u[r.chunkIndex],l=[o.html],h=u.slice(r.chunkIndex+1),d=o.textLength,p=0,f=0,m=!1,D=!1;d<a;)if((p<=f||0===h.length)&&c.length>0){var v=c.pop();d+v.textLength<=a?(l.unshift(v.html),p+=v.textLength,d+=v.textLength):(m=!0,c.length=0)}else{if(!(h.length>0))break;var g=h.shift();d+g.textLength<=a?(l.push(g.html),f+=g.textLength,d+=g.textLength):(D=!0,h.length=0)}return(m||c.length>0)&&l.unshift("\u2026"),(D||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,t,n,u,s,o){var l=[],h=t[u],d=h[0],p=h[1];if(d<s)(u+=1)<t.length&&l.push.apply(l,i(e,t,n,u,s));else{d>s&&l.push.apply(l,c(e.substring(s,d)).map((function(e){return{html:Object(a.a)(e),textLength:e.length}}))),o&&(o.chunkIndex=l.length),l.push({html:Object(r.a)(e.substr(d,p),n,!0),textLength:p});var f=d+p;(u+=1)<t.length?l.push.apply(l,i(e,t,n,u,f)):f<e.length&&l.push.apply(l,c(e.substr(f)).map((function(e){return{html:Object(a.a)(e),textLength:e.length}})))}return l}},845:function(e,t,n){"use strict";var a=n(826),r=n(831),u=n.n(r),c=n(825),s=n(832),o=n(0),i=n.n(o),l=n(834),h=n(22),d=n(10),p=n(841),f=n(835),m=n(838),D=n(828),v=n(840),g=n(836),F=n(56),b=n.n(F);function E(e){var t=e.document,n=e.type,a=e.page,r=e.metadata,u=e.tokens,c=e.isInterOfTree,s=e.isLastOfTree,o=0===n,i=1===n,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),d='<span class="'+b.a.hitIcon+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b.a.hitTitle+'">'+Object(v.a)(t.t,Object(g.a)(r,"t"),u)+"</span>"];o||p.push('<span class="'+b.a.hitPath+'">'+Object(D.a)(a.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>");var f='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[d,'<span class="'+b.a.hitWrapper+'">'],p,["</span>",f]).join("")}function x(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var C=n(837);function k(){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(746),n.e(749)]).then(n.t.bind(null,910,7));case 2:return(t=e.sent).noConflict(),e.abrupt("return",t.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A="_highlight";t.a=function(e){var t,n=e.handleSearchBarToggle,r=Object(h.default)().siteConfig.baseUrl,D=Object(p.useHistory)(),v=Object(p.useLocation)(),g=Object(o.useRef)(null),F=Object(o.useRef)("empty"),j=Object(o.useRef)(!1),y=Object(o.useState)(!1),O=y[0],w=y[1],L=Object(o.useState)(!1),I=L[0],B=L[1],N=Object(o.useCallback)(Object(s.a)(u.a.mark((function e(){var t,n,s,o,i,l,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===F.current){e.next=2;break}return e.abrupt("return");case 2:return F.current="loading",w(!0),e.next=6,Promise.all([Object(f.a)(r),k()]);case 6:t=e.sent,n=t[0],s=n.wrappedIndexes,o=n.zhDictionary,i=t[1],l=i(g.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(m.a)(s,o,a.f),templates:{suggestion:E,empty:x,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=r+"search?q="+encodeURIComponent(t);n.href=a,n.textContent="See all results",n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),D.push(a))}));var u=document.createElement("div");return u.className=b.a.hitFooter,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,r=n.u,u=n.h,s=t.tokens,o=r;if(a.a&&s.length>0){for(var i,l=new URLSearchParams,h=Object(c.a)(s);!(i=h()).done;){var d=i.value;l.append(A,d)}o+="?"+l.toString()}u&&(o+=u),D.push(o)})),F.current="done",w(!1),j.current&&((h=g.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[r,D]);Object(o.useEffect)((function(){if(a.a){var e=d.a.canUseDOM?new URLSearchParams(v.search).getAll(A):[];if(0!==e.length){var t=document.querySelector("article");if(t)new a.a(t).mark(e)}}}),[v.search]);var M=Object(o.useCallback)((function(){j.current=!0,N(),n(!0)}),[n,N]),R=Object(o.useCallback)((function(){n(!1)}),[n]),S=Object(o.useCallback)((function(){N()}),[N]),z=Object(o.useCallback)((function(e){e.target.value&&B(!0)}),[]);return i.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(t={},t[b.a.searchIndexLoading]=O&&I,t))},i.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:S,onFocus:M,onBlur:R,onChange:z,ref:g}),i.a.createElement(C.a,{className:b.a.searchBarLoadingRing}))}}}]);