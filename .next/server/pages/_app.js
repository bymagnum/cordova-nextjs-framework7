(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framework7_react__WEBPACK_IMPORTED_MODULE_1__]);
framework7_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function PanelLeft() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framework7_react__WEBPACK_IMPORTED_MODULE_1__.Panel, {
            left: true,
            push: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framework7_react__WEBPACK_IMPORTED_MODULE_1__.Page, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framework7_react__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
                        title: "Awesome App"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framework7_react__WEBPACK_IMPORTED_MODULE_1__.Block, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Here comes main view page text"
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelLeft);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framework7_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(735);
/* harmony import */ var _node_modules_framework7_framework7_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(844);
/* harmony import */ var _node_modules_framework7_framework7_bundle_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_framework7_framework7_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PanelLeft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(343);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framework7_bundle__WEBPACK_IMPORTED_MODULE_1__, framework7_react__WEBPACK_IMPORTED_MODULE_2__, _components_PanelLeft_js__WEBPACK_IMPORTED_MODULE_4__]);
([framework7_bundle__WEBPACK_IMPORTED_MODULE_1__, framework7_react__WEBPACK_IMPORTED_MODULE_2__, _components_PanelLeft_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



framework7_bundle__WEBPACK_IMPORTED_MODULE_1__["default"].use(framework7_react__WEBPACK_IMPORTED_MODULE_2__["default"]);



const routes = [
    {
        path: "/",
        asyncComponent: ()=>__webpack_require__.e(/* import() */ 369).then(__webpack_require__.bind(__webpack_require__, 369))
    }
];
function CordovaApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framework7_react__WEBPACK_IMPORTED_MODULE_2__.App, {
            theme: "ios",
            url: "https://localhost" + router.asPath,
            routes: routes,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PanelLeft_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framework7_react__WEBPACK_IMPORTED_MODULE_2__.View, {
                    url: "/",
                    className: "view-main view-init",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        initialPage: true,
                        ...pageProps
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CordovaApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 844:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 735:
/***/ ((module) => {

"use strict";
module.exports = import("framework7-react");;

/***/ }),

/***/ 140:
/***/ ((module) => {

"use strict";
module.exports = import("framework7/bundle");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(484));
module.exports = __webpack_exports__;

})();