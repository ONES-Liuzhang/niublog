/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "vue"
const external_vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./src/App.jsx

/* harmony default export */ const App = ({
  setup: function setup() {
    return function () {
      return (0,external_vue_namespaceObject.createVNode)("div", null, [(0,external_vue_namespaceObject.createTextVNode)("Hello Vue JSX!")]);
    };
  }
});
;// CONCATENATED MODULE: ./src/entry-client.js



const app = (0,external_vue_namespaceObject.createApp)(App)

app.$mount('#app')
module.exports = __webpack_exports__;
/******/ })()
;