(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(333)),o=n(336),s=n(337),c={id:"events",title:"Events"},l={unversionedId:"events",id:"version-1.10.0/events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.10.0/events.mdx",slug:"/events",permalink:"/python/docs/events",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Emulation",permalink:"/python/docs/emulation"},next:{title:"Extensibility",permalink:"/python/docs/extensibility"}},p=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[]}]}],u={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#waiting-for-event"}),"Waiting for event")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#addingremoving-event-listener"}),"Adding/removing event listener")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#adding-one-off-listeners"}),"Adding one-off listeners"))),Object(i.b)("h2",{id:"waiting-for-event"},"Waiting for event"),Object(i.b)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),Object(i.b)("p",null,"Wait for a request with the specified url:"),Object(i.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_request("**/*logo*.png") as first:\n  page.goto("https://wikipedia.org")\nprint(first.value.url)\n'))),Object(i.b)(s.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_request("**/*logo*.png") as first:\n  await page.goto("https://wikipedia.org")\nfirst_request = await first.value\nprint(first_request.url)\n')))),Object(i.b)("p",null,"Wait for popup window:"),Object(i.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_popup() as popup:\n  page.evaluate("window.open()")\npopup.value.goto("https://wikipedia.org")\n'))),Object(i.b)(s.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_popup() as popup:\n  await page.evaluate("window.open()")\nchild_page = await popup.value\nawait child_page.goto("https://wikipedia.org")\n')))),Object(i.b)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),Object(i.b)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),Object(i.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'def print_request_sent(request):\n  print("Request sent: " + request.url)\n\ndef print_request_finished(request):\n  print("Request finished: " + request.url)\n\npage.on("request", print_request_sent)\npage.on("requestfinished", print_request_finished)\npage.goto("https://wikipedia.org")\n\npage.remove_listener("requestfinished", print_request_finished)\npage.goto("https://www.openstreetmap.org/")\n'))),Object(i.b)(s.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'def print_request_sent(request):\n  print("Request sent: " + request.url)\n\ndef print_request_finished(request):\n  print("Request finished: " + request.url)\n\npage.on("request", print_request_sent)\npage.on("requestfinished", print_request_finished)\nawait page.goto("https://wikipedia.org")\n\npage.remove_listener("requestfinished", print_request_finished)\nawait page.goto("https://www.openstreetmap.org/")\n')))),Object(i.b)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),Object(i.b)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),Object(i.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.once("dialog", lambda dialog: dialog.accept("2021"))\npage.evaluate("prompt(\'Enter a number:\')")\n'))),Object(i.b)(s.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.once("dialog", lambda dialog: dialog.accept("2021"))\nawait page.evaluate("prompt(\'Enter a number:\')")\n')))),Object(i.b)("h3",{id:"api-reference"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browser",title:"Browser"}),"Browser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-worker",title:"Worker"}),"Worker"))))}b.isMDXComponent=!0},332:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},334:function(e,t,n){"use strict";var a=n(0),r=n(335);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},335:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},336:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(334),o=n(332),s=n(55),c=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,b=e.groupId,d=e.className,f=Object(i.a)(),g=f.tabGroupChoices,m=f.setTabGroupChoices,v=Object(a.useState)(s),y=v[0],O=v[1],h=a.Children.toArray(e.children);if(null!=b){var j=g[b];null!=j&&j!==y&&u.some((function(e){return e.value===j}))&&O(j)}var w=function(e){O(e),null!=b&&m(b,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},337:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);