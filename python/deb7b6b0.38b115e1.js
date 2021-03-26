(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{295:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=(a(0),a(333)),l=a(336),o=a(337),i={id:"emulation",title:"Emulation"},s={unversionedId:"emulation",id:"version-1.9.0/emulation",isDocsHomePage:!1,title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.9.0/emulation.mdx",slug:"/emulation",permalink:"/python/docs/1.9.0/emulation",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Element selectors",permalink:"/python/docs/1.9.0/selectors"},next:{title:"Extensibility",permalink:"/python/docs/1.9.0/extensibility"}},b=[{value:"Devices",id:"devices",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"User agent",id:"user-agent",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Viewport",id:"viewport",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Geolocation",id:"geolocation",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[{value:"API reference",id:"api-reference-6",children:[]}]}],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(c.b)("li",{parentName:"ul"},"locale, timezone"),Object(c.b)("li",{parentName:"ul"},"color scheme"),Object(c.b)("li",{parentName:"ul"},"geolocation")),Object(c.b)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#devices"}),"Devices")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#viewport"}),"Viewport")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"devices"},"Devices"),Object(c.b)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = playwright.webkit.launch(headless=False)\n    context = browser.new_context(\n        **pixel_2,\n    )\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    pixel_2 = playwright.devices['Pixel 2']\n    browser = await playwright.webkit.launch(headless=False)\n    context = await browser.new_context(\n        **pixel_2,\n    )\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),Object(c.b)("p",null,"All pages created in the context above will share the same device parameters."),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"user-agent"},"User agent"),Object(c.b)("p",null,"All pages created in the context above will share the user agent specified:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context = browser.new_context(\n  user_agent='My user agent'\n)\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context = await browser.new_context(\n  user_agent='My user agent'\n)\n")))),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"viewport"},"Viewport"),Object(c.b)("p",null,"Create a context with custom viewport size:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Create context with given viewport\ncontext = browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\npage.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Create context with given viewport\ncontext = await browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size(width=1600, height=1200)\n\n# Emulate high-DPI\ncontext = await browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n")))),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-page#pageset_viewport_sizeviewport_size"}),"page.set_viewport_size(viewport_size)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Emulate locale and time\ncontext = browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Emulate locale and time\ncontext = await browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n")))),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"permissions"},"Permissions"),Object(c.b)("p",null,"Allow all pages in the context to show system notifications:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context = browser.new_context(\n  permissions=['notifications'],\n)\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context = await browser.new_context(\n  permissions=['notifications'],\n)\n")))),Object(c.b)("p",null,"Grant all pages in the existing context access to current location:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context.grant_permissions(['geolocation'])\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await context.grant_permissions(['geolocation'])\n")))),Object(c.b)("p",null,"Grant notifications access from a specific domain:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context.grant_permissions(['notifications'], origin='https://skype.com')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await context.grant_permissions(['notifications'], origin='https://skype.com')\n")))),Object(c.b)("p",null,"Revoke all permissions:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"context.clear_permissions()\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await context.clear_permissions()\n")))),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextgrant_permissionspermissions-kwargs"}),"browser_context.grant_permissions(permissions, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextclear_permissions"}),"browser_context.clear_permissions()"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"geolocation"},"Geolocation"),Object(c.b)("p",null,"Create a context with ",Object(c.b)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n  geolocation={"longitude": 48.858455, "latitude": 2.294474},\n  permissions=["geolocation"]\n)\n')))),Object(c.b)("p",null,"Change the location later:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await context.set_geolocation({"longitude": 29.979097, "latitude": 31.134256})\n')))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(c.b)("h3",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextset_geolocationgeolocation"}),"browser_context.set_geolocation(geolocation)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),Object(c.b)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Create context with dark mode\ncontext = browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\npage.emulate_media(color_scheme='dark')\n\n# Change media for page\npage.emulate_media(media='print')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Create context with dark mode\ncontext = await browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = await browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\nawait page.emulate_media(color_scheme='dark')\n\n# Change media for page\nawait page.emulate_media(media='print')\n")))),Object(c.b)("h3",{id:"api-reference-6"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-page#pageemulate_mediakwargs"}),"page.emulate_media(**kwargs)"))))}u.isMDXComponent=!0},332:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},333:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},334:function(e,t,a){"use strict";var n=a(0),r=a(335);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},335:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},336:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(334),l=a(332),o=a(55),i=a.n(o),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(c.a)(),y=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(n.useState)(o),g=j[0],w=j[1],h=n.Children.toArray(e.children);if(null!=u){var f=y[u];null!=f&&f!==g&&p.some((function(e){return e.value===f}))&&w(f)}var v=function(e){w(e),null!=u&&O(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},337:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);