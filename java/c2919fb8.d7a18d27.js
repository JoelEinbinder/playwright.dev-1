(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),r=(a(0),a(213)),o=(a(216),a(217),{id:"class-response",title:"Response"}),c={unversionedId:"api/class-response",id:"api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/docs/api/class-response.mdx",slug:"/api/class-response",permalink:"/java/docs/next/api/class-response",version:"current",sidebar:"api",previous:{title:"Request",permalink:"/java/docs/next/api/class-request"},next:{title:"Route",permalink:"/java/docs/next/api/class-route"}},l=[{value:"Response.body()",id:"responsebody",children:[]},{value:"Response.finished()",id:"responsefinished",children:[]},{value:"Response.frame()",id:"responseframe",children:[]},{value:"Response.headers()",id:"responseheaders",children:[]},{value:"Response.ok()",id:"responseok",children:[]},{value:"Response.request()",id:"responserequest",children:[]},{value:"Response.status()",id:"responsestatus",children:[]},{value:"Response.statusText()",id:"responsestatustext",children:[]},{value:"Response.text()",id:"responsetext",children:[]},{value:"Response.url()",id:"responseurl",children:[]}],i={toc:l};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-response",title:"Response"}),"Response")," class represents responses which are received by page."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responsebody"}),"Response.body()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responsefinished"}),"Response.finished()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responseframe"}),"Response.frame()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responseheaders"}),"Response.headers()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responseok"}),"Response.ok()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responserequest"}),"Response.request()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responsestatus"}),"Response.status()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responsestatustext"}),"Response.statusText()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responsetext"}),"Response.text()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-response#responseurl"}),"Response.url()"))),Object(r.b)("h2",{id:"responsebody"},"Response.body()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">")),Object(r.b)("p",null,"Returns the buffer with response body."),Object(r.b)("h2",{id:"responsefinished"},"Response.finished()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(r.b)("p",null,"Waits for this response to finish, returns failure error if request failed."),Object(r.b)("h2",{id:"responseframe"},"Response.frame()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-frame",title:"Frame"}),"Frame"),">")),Object(r.b)("p",null,"Returns the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-frame",title:"Frame"}),"Frame")," that initiated this response."),Object(r.b)("h2",{id:"responseheaders"},"Response.headers()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">>")),Object(r.b)("p",null,"Returns the object with HTTP headers associated with the response. All header names are lower-case."),Object(r.b)("h2",{id:"responseok"},"Response.ok()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">")),Object(r.b)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),Object(r.b)("h2",{id:"responserequest"},"Response.request()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request"),">")),Object(r.b)("p",null,"Returns the matching ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request")," object."),Object(r.b)("h2",{id:"responsestatus"},"Response.status()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">")),Object(r.b)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),Object(r.b)("h2",{id:"responsestatustext"},"Response.statusText()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(r.b)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),Object(r.b)("h2",{id:"responsetext"},"Response.text()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(r.b)("p",null,"Returns the text representation of response body."),Object(r.b)("h2",{id:"responseurl"},"Response.url()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(r.b)("p",null,"Contains the URL of the response."))}p.isMDXComponent=!0},212:function(e,t,a){"use strict";function n(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=s.a.createContext({}),p=function(e){var t=s.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},j=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(a),j=n,d=u["".concat(o,".").concat(j)]||u[j]||b[j]||r;return a?s.a.createElement(d,c(c({ref:t},i),{},{components:a})):s.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<r;i++)o[i]=a[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},214:function(e,t,a){"use strict";var n=a(0),s=a(215);t.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},215:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(void 0);t.a=s},216:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(214),o=a(212),c=a(55),l=a.n(c),i=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,b=e.groupId,j=e.className,d=Object(r.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,O=Object(n.useState)(c),h=O[0],v=O[1],y=n.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==h&&u.some((function(e){return e.value===g}))&&v(g)}var N=function(e){v(e),null!=b&&m(b,e)},x=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},j)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},217:function(e,t,a){"use strict";var n=a(3),s=a(0),r=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:s}),t)}}}]);