(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(152)),o=(r(155),r(156),{id:"class-video",title:"Video"}),c={unversionedId:"api/class-video",id:"api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/docs/api/class-video.mdx",slug:"/api/class-video",permalink:"/csharp/docs/api/class-video",version:"current",sidebar:"api",previous:{title:"Touchscreen",permalink:"/csharp/docs/api/class-touchscreen"},next:{title:"WebSocket",permalink:"/csharp/docs/api/class-websocket"}},s=[{value:"Video.Delete()",id:"videodelete",children:[]},{value:"Video.Path()",id:"videopath",children:[]},{value:"Video.SaveAs(path)",id:"videosaveaspath",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When browser context is created with the ",Object(a.b)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/csharp/docs/api/class-video#videodelete"}),"Video.Delete()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/csharp/docs/api/class-video#videopath"}),"Video.Path()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/csharp/docs/api/class-video#videosaveaspath"}),"Video.SaveAs(path)"))),Object(a.b)("h2",{id:"videodelete"},"Video.Delete()"),Object(a.b)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),Object(a.b)("h2",{id:"videopath"},"Video.Path()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(a.b)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),Object(a.b)("h2",{id:"videosaveaspath"},"Video.SaveAs(path)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path")," <",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Path where the video should be saved.")),Object(a.b)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}p.isMDXComponent=!0},151:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||a;return r?i.a.createElement(h,c(c({ref:t},l),{},{components:r})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";var n=r(0),i=r(154);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var n=r(0),i=Object(n.createContext)(void 0);t.a=i},155:function(e,t,r){"use strict";r(0),r(153),r(151),r(53)},156:function(e,t,r){"use strict";r(3),r(0)}}]);