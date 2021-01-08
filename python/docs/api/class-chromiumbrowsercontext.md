---
id: class-chromiumbrowsercontext
title: "ChromiumBrowserContext"
---

* extends: [BrowserContext]

Chromium-specific features including background pages, service worker support, etc.


- [chromium_browser_context.on("backgroundpage")](./api/class-chromiumbrowsercontext.md#chromiumbrowsercontextonbackgroundpage)
- [chromium_browser_context.on("serviceworker")](./api/class-chromiumbrowsercontext.md#chromiumbrowsercontextonserviceworker)
- [chromium_browser_context.background_pages()](./api/class-chromiumbrowsercontext.md#chromiumbrowsercontextbackgroundpages)
- [chromium_browser_context.new_cdp_session(page)](./api/class-chromiumbrowsercontext.md#chromiumbrowsercontextnewcdpsessionpage)
- [chromium_browser_context.service_workers()](./api/class-chromiumbrowsercontext.md#chromiumbrowsercontextserviceworkers)
- [browser_context.on("close")](./api/class-browsercontext.md#browsercontextonclose)
- [browser_context.on("page")](./api/class-browsercontext.md#browsercontextonpage)
- [browser_context.add_cookies(cookies)](./api/class-browsercontext.md#browsercontextaddcookiescookies)
- [browser_context.add_init_script(**options)](./api/class-browsercontext.md#browsercontextaddinitscriptoptions)
- [browser_context.browser()](./api/class-browsercontext.md#browsercontextbrowser)
- [browser_context.clear_cookies()](./api/class-browsercontext.md#browsercontextclearcookies)
- [browser_context.clear_permissions()](./api/class-browsercontext.md#browsercontextclearpermissions)
- [browser_context.close()](./api/class-browsercontext.md#browsercontextclose)
- [browser_context.cookies(**options)](./api/class-browsercontext.md#browsercontextcookiesoptions)
- [browser_context.expose_binding(name, callback, **options)](./api/class-browsercontext.md#browsercontextexposebindingname-callback-options)
- [browser_context.expose_function(name, callback)](./api/class-browsercontext.md#browsercontextexposefunctionname-callback)
- [browser_context.grant_permissions(permissions, **options)](./api/class-browsercontext.md#browsercontextgrantpermissionspermissions-options)
- [browser_context.new_page()](./api/class-browsercontext.md#browsercontextnewpage)
- [browser_context.pages()](./api/class-browsercontext.md#browsercontextpages)
- [browser_context.route(url, handler)](./api/class-browsercontext.md#browsercontextrouteurl-handler)
- [browser_context.set_default_navigation_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaultnavigationtimeouttimeout)
- [browser_context.set_default_timeout(timeout)](./api/class-browsercontext.md#browsercontextsetdefaulttimeouttimeout)
- [browser_context.set_extra_http_headers(headers)](./api/class-browsercontext.md#browsercontextsetextrahttpheadersheaders)
- [browser_context.set_geolocation(latitude, longitude, **options)](./api/class-browsercontext.md#browsercontextsetgeolocationlatitude-longitude-options)
- [browser_context.set_http_credentials(http_credentials)](./api/class-browsercontext.md#browsercontextsethttpcredentialshttpcredentials)
- [browser_context.set_offline(offline)](./api/class-browsercontext.md#browsercontextsetofflineoffline)
- [browser_context.storage_state(**options)](./api/class-browsercontext.md#browsercontextstoragestateoptions)
- [browser_context.unroute(url, **options)](./api/class-browsercontext.md#browsercontextunrouteurl-options)
- [browser_context.wait_for_event(event, predicate, **options)](./api/class-browsercontext.md#browsercontextwaitforeventevent-predicate-options)
- [browser_context.reset_geolocation()](./api/class-browsercontext.md#browsercontextresetgeolocation)

## chromium_browser_context.on("backgroundpage")
- type: <[Page]>

Emitted when new background page is created in the context.

> **NOTE** Only works with persistent context.

## chromium_browser_context.on("serviceworker")
- type: <[Worker]>

Emitted when new service worker is created in the context.

## chromium_browser_context.background_pages()
- returns: <[List]\[[Page]\]>

All existing background pages in the context.

## chromium_browser_context.new_cdp_session(page)
- `page` <[Page]> Page to create new session for.
- returns: <[CDPSession]>

Returns the newly created session.

## chromium_browser_context.service_workers()
- returns: <[List]\[[Worker]\]>

All existing service workers in the context.

[Accessibility]: ./api/class-accessibility.md "Accessibility"
[Browser]: ./api/class-browser.md "Browser"
[BrowserContext]: ./api/class-browsercontext.md "BrowserContext"
[BrowserType]: ./api/class-browsertype.md "BrowserType"
[CDPSession]: ./api/class-cdpsession.md "CDPSession"
[ChromiumBrowserContext]: ./api/class-chromiumbrowsercontext.md "ChromiumBrowserContext"
[ConsoleMessage]: ./api/class-consolemessage.md "ConsoleMessage"
[Dialog]: ./api/class-dialog.md "Dialog"
[Download]: ./api/class-download.md "Download"
[ElementHandle]: ./api/class-elementhandle.md "ElementHandle"
[FileChooser]: ./api/class-filechooser.md "FileChooser"
[FirefoxBrowser]: ./api/class-firefoxbrowser.md "FirefoxBrowser"
[Frame]: ./api/class-frame.md "Frame"
[JSHandle]: ./api/class-jshandle.md "JSHandle"
[Keyboard]: ./api/class-keyboard.md "Keyboard"
[Mouse]: ./api/class-mouse.md "Mouse"
[Page]: ./api/class-page.md "Page"
[Playwright]: ./api/class-playwright.md "Playwright"
[Request]: ./api/class-request.md "Request"
[Response]: ./api/class-response.md "Response"
[Route]: ./api/class-route.md "Route"
[Selectors]: ./api/class-selectors.md "Selectors"
[TimeoutError]: ./api/class-timeouterror.md "TimeoutError"
[Touchscreen]: ./api/class-touchscreen.md "Touchscreen"
[Video]: ./api/class-video.md "Video"
[WebKitBrowser]: ./api/class-webkitbrowser.md "WebKitBrowser"
[WebSocket]: ./api/class-websocket.md "WebSocket"
[Worker]: ./api/class-worker.md "Worker"
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/element "Element"
[Evaluation Argument]: ./core-concepts.md#evaluationargument "Evaluation Argument"
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols "Iterator"
[origin]: https://developer.mozilla.org/en-US/docs/Glossary/Origin "Origin"
[selector]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors "selector"
[Serializable]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description "Serializable"
[UIEvent.detail]: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail "UIEvent.detail"
[UnixTime]: https://en.wikipedia.org/wiki/Unix_time "Unix Time"
[xpath]: https://developer.mozilla.org/en-US/docs/Web/XPath "xpath"

[Any]: https://docs.python.org/3/library/typing.html#typing.Any "Any"
[bool]: https://docs.python.org/3/library/stdtypes.html "bool"
[Callable]: https://docs.python.org/3/library/typing.html#typing.Callable "Callable"
[Dict]: https://docs.python.org/3/library/typing.html#typing.Dict "Dict"
[float]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "float"
[int]: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex "int"
[List]: https://docs.python.org/3/library/typing.html#typing.List "List"
[NoneType]: https://docs.python.org/3/library/constants.html#None "None"
[pathlib.Path]: https://realpython.com/python-pathlib/ "pathlib.Path"
[str]: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str "str"
[Union]: https://docs.python.org/3/library/typing.html#typing.Union "Union"