(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{472:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(823)),c=(n(827),n(828),{id:"class-androidsocket",title:"AndroidSocket"}),i={unversionedId:"api/class-androidsocket",id:"version-1.10.0/api/class-androidsocket",isDocsHomePage:!1,title:"AndroidSocket",description:"AndroidSocket] is a way to communicate with a process launched on the [AndroidDevice]. Use [androidDevice.open(command) to open a socket.",source:"@site/versioned_docs/version-1.10.0/api/class-androidsocket.mdx",slug:"/api/class-androidsocket",permalink:"/docs/api/class-androidsocket",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"AndroidInput",permalink:"/docs/api/class-androidinput"},next:{title:"AndroidWebView",permalink:"/docs/api/class-androidwebview"}},d=[{value:"androidSocket.on(&#39;close&#39;)",id:"androidsocketonclose",children:[]},{value:"androidSocket.on(&#39;data&#39;)",id:"androidsocketondata",children:[]},{value:"androidSocket.close()",id:"androidsocketclose",children:[]},{value:"androidSocket.write(data)",id:"androidsocketwritedata",children:[]}],s={toc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-androidsocket",title:"AndroidSocket"}),"AndroidSocket")," is a way to communicate with a process launched on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-androiddevice",title:"AndroidDevice"}),"AndroidDevice"),". Use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/class-androiddevice#androiddeviceopencommand"}),"androidDevice.open(command)")," to open a socket."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-androidsocket#androidsocketonclose"}),"androidSocket.on('close')")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-androidsocket#androidsocketondata"}),"androidSocket.on('data')")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-androidsocket#androidsocketclose"}),"androidSocket.close()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/class-androidsocket#androidsocketwritedata"}),"androidSocket.write(data)"))),Object(a.b)("h2",{id:"androidsocketonclose"},"androidSocket.on('close')"),Object(a.b)("p",null,"Emitted when the socket is closed."),Object(a.b)("h2",{id:"androidsocketondata"},"androidSocket.on('data')"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: <",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">")),Object(a.b)("p",null,"Emitted when data is available to read from the socket."),Object(a.b)("h2",{id:"androidsocketclose"},"androidSocket.close()"),Object(a.b)("p",null,"Closes the socket."),Object(a.b)("h2",{id:"androidsocketwritedata"},"androidSocket.write(data)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"data")," <",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> Data to write.")),Object(a.b)("p",null,"Writes some ",Object(a.b)("inlineCode",{parentName:"p"},"data")," to the socket."))}l.isMDXComponent=!0},823:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},824:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},825:function(e,t,n){"use strict";var r=n(0),o=n(826);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},827:function(e,t,n){"use strict";n(0),n(825),n(824),n(55)},828:function(e,t,n){"use strict";n(3),n(0)}}]);