(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(149)),c=n(152),l=n(153),i={id:"class-websocket",title:"WebSocket"},s={unversionedId:"api/class-websocket",id:"api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/docs/api/class-websocket.mdx",slug:"/api/class-websocket",permalink:"/python/docs/api/class-websocket",version:"current",sidebar:"api",previous:{title:"Video",permalink:"/python/docs/api/class-video"},next:{title:"Worker",permalink:"/python/docs/api/class-worker"}},b=[{value:"web_socket.on(&quot;close&quot;)",id:"web_socketonclose",children:[]},{value:"web_socket.on(&quot;framereceived&quot;)",id:"web_socketonframereceived",children:[]},{value:"web_socket.on(&quot;framesent&quot;)",id:"web_socketonframesent",children:[]},{value:"web_socket.on(&quot;socketerror&quot;)",id:"web_socketonsocketerror",children:[]},{value:"web_socket.expect_event(event, **options)",id:"web_socketexpect_eventevent-options",children:[]},{value:"web_socket.is_closed()",id:"web_socketis_closed",children:[]},{value:"web_socket.url",id:"web_socketurl",children:[]},{value:"web_socket.wait_for_event(event, **options)",id:"web_socketwait_for_eventevent-options",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonclose"}),'web_socket.on("close")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframereceived"}),'web_socket.on("framereceived")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonframesent"}),'web_socket.on("framesent")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketonsocketerror"}),'web_socket.on("socketerror")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketexpect_eventevent-options"}),"web_socket.expect_event(event, **options)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketis_closed"}),"web_socket.is_closed()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketurl"}),"web_socket.url")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-websocket#web_socketwait_for_eventevent-options"}),"web_socket.wait_for_event(event, **options)"))),Object(o.b)("h2",{id:"web_socketonclose"},'web_socket.on("close")'),Object(o.b)("p",null,"Fired when the websocket closes."),Object(o.b)("h2",{id:"web_socketonframereceived"},'web_socket.on("framereceived")'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"payload")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> frame payload")))),Object(o.b)("p",null,"Fired when the websocket recieves a frame."),Object(o.b)("h2",{id:"web_socketonframesent"},'web_socket.on("framesent")'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"payload")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> frame payload")))),Object(o.b)("p",null,"Fired when the websocket sends a frame."),Object(o.b)("h2",{id:"web_socketonsocketerror"},'web_socket.on("socketerror")'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <","[String]",">")),Object(o.b)("p",null,"Fired when the websocket has an error."),Object(o.b)("h2",{id:"web_socketexpect_eventevent-options"},"web_socket.expect_event(event, **options)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Event name, same one typically passed into ",Object(o.b)("inlineCode",{parentName:"li"},"*.on(event)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),"> Receives the event data and resolves to truthy value when the waiting should resolve."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Maximum time to wait for in milliseconds. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(o.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager"}),"EventContextManager"),">")),Object(o.b)("p",null,"Performs action and waits for given ",Object(o.b)("inlineCode",{parentName:"p"},"event")," to fire. If predicate is provided, it passes event's value into the ",Object(o.b)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",Object(o.b)("inlineCode",{parentName:"p"},"predicate(event)")," to return a truthy value. Will throw an error if the socket is closed before the ",Object(o.b)("inlineCode",{parentName:"p"},"event")," is fired."),Object(o.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'with ws.expect_event(event_name) as event_info:\n    ws.click("button")\nvalue = event_info.value\n'))),Object(o.b)(l.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'async with ws.expect_event(event_name) as event_info:\n    await ws.click("button")\nvalue = await event_info.value\n')))),Object(o.b)("h2",{id:"web_socketis_closed"},"web_socket.is_closed()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">")),Object(o.b)("p",null,"Indicates that the web socket has been closed."),Object(o.b)("h2",{id:"web_socketurl"},"web_socket.url"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")),Object(o.b)("p",null,"Contains the URL of the WebSocket."),Object(o.b)("h2",{id:"web_socketwait_for_eventevent-options"},"web_socket.wait_for_event(event, **options)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"event")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Event name, same one would pass into ",Object(o.b)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"}),"Callable"),"> Receives the event data and resolves to truthy value when the waiting should resolve."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Maximum time to wait for in milliseconds. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(o.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"}),"Any"),">")),Object(o.b)("p",null,"Returns the event data value."),Object(o.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired."))}u.isMDXComponent=!0},148:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";var a=n(0),r=n(151);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},152:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(150),c=n(148),l=n(55),i=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(a.useState)(l),j=O[0],y=O[1],v=a.Children.toArray(e.children);if(null!=u){var w=f[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&y(w)}var k=function(e){y(e),null!=u&&h(u,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},153:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);