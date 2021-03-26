(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{331:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(823)),o=(r(827),r(828),{id:"class-androidwebview",title:"AndroidWebView"}),c={unversionedId:"api/class-androidwebview",id:"version-1.9.0/api/class-androidwebview",isDocsHomePage:!1,title:"AndroidWebView",description:"AndroidWebView] represents a WebView open on the [AndroidDevice]. WebView is usually obtained using [androidDevice.webView(selector[, options]).",source:"@site/versioned_docs/version-1.9.0/api/class-androidwebview.mdx",slug:"/api/class-androidwebview",permalink:"/docs/1.9.0/api/class-androidwebview",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"AndroidSocket",permalink:"/docs/1.9.0/api/class-androidsocket"},next:{title:"Electron",permalink:"/docs/1.9.0/api/class-electron"}},d=[{value:"androidWebView.on(&#39;close&#39;)",id:"androidwebviewonclose",children:[]},{value:"androidWebView.page()",id:"androidwebviewpage",children:[]},{value:"androidWebView.pid()",id:"androidwebviewpid",children:[]},{value:"androidWebView.pkg()",id:"androidwebviewpkg",children:[]}],b={toc:d};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-androidwebview",title:"AndroidWebView"}),"AndroidWebView")," represents a WebView open on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-androiddevice",title:"AndroidDevice"}),"AndroidDevice"),". WebView is usually obtained using ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-androiddevice#androiddevicewebviewselector-options"}),"androidDevice.webView(selector[, options])"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-androidwebview#androidwebviewonclose"}),"androidWebView.on('close')")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-androidwebview#androidwebviewpage"}),"androidWebView.page()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-androidwebview#androidwebviewpid"}),"androidWebView.pid()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-androidwebview#androidwebviewpkg"}),"androidWebView.pkg()"))),Object(a.b)("h2",{id:"androidwebviewonclose"},"androidWebView.on('close')"),Object(a.b)("p",null,"Emitted when the WebView is closed."),Object(a.b)("h2",{id:"androidwebviewpage"},"androidWebView.page()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page"),">>")),Object(a.b)("p",null,"Connects to the WebView and returns a regular Playwright ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page")," to interact with."),Object(a.b)("h2",{id:"androidwebviewpid"},"androidWebView.pid()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),Object(a.b)("p",null,"WebView process PID."),Object(a.b)("h2",{id:"androidwebviewpkg"},"androidWebView.pkg()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(a.b)("p",null,"WebView package identifier."))}l.isMDXComponent=!0},823:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return w}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),s=l(r),u=n,w=s["".concat(o,".").concat(u)]||s[u]||p[u]||a;return r?i.a.createElement(w,c(c({ref:t},b),{},{components:r})):i.a.createElement(w,c({ref:t},b))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<a;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},824:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},825:function(e,t,r){"use strict";var n=r(0),i=r(826);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},826:function(e,t,r){"use strict";var n=r(0),i=Object(n.createContext)(void 0);t.a=i},827:function(e,t,r){"use strict";r(0),r(825),r(824),r(55)},828:function(e,t,r){"use strict";r(3),r(0)}}]);