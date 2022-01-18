"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/[id]",{

/***/ "./lib/const.ts":
/*!**********************!*\
  !*** ./lib/const.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": function() { return /* binding */ url; },\n/* harmony export */   \"handleAddList\": function() { return /* binding */ handleAddList; },\n/* harmony export */   \"handleAddCard\": function() { return /* binding */ handleAddCard; },\n/* harmony export */   \"handleEditDescription\": function() { return /* binding */ handleEditDescription; },\n/* harmony export */   \"handleEditVisibility\": function() { return /* binding */ handleEditVisibility; },\n/* harmony export */   \"handleRename\": function() { return /* binding */ handleRename; },\n/* harmony export */   \"handleDeleteList\": function() { return /* binding */ handleDeleteList; },\n/* harmony export */   \"handleEditCardDescription\": function() { return /* binding */ handleEditCardDescription; },\n/* harmony export */   \"handleAddComment\": function() { return /* binding */ handleAddComment; },\n/* harmony export */   \"handleAddLabels\": function() { return /* binding */ handleAddLabels; }\n/* harmony export */ });\n/* harmony import */ var _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n// import { connectToDatabase } from \"../lib/mongodb\";\n// import { ObjectId } from \"mongodb\";\nvar url =  true ? process.env.DEV_URL : 0;\nvar handleAddList = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(listTitle, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(\"http://localhost:3000/api/boards/\".concat(id));\n                _ctx.next = 3;\n                return fetch(\"/api/boards/\".concat(id), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: listTitle\n                    })\n                });\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id) },\n//     { $push: { lists: { name: listTitle } } }\n//   );\n}));\nvar handleAddCard = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, cardTitle, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title,\n                        cardTitle: cardTitle\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id), \"lists.name\": title },\n//     { $addToSet: { \"lists.$.cards\": { title: cardTitle } } }\n//   );\n}));\nvar handleEditDescription = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, id, description, setEditDescription, editDescription) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                e.preventDefault();\n                _ctx.next = 3;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        description: description\n                    })\n                });\n            case 3:\n                // const { db } = await connectToDatabase();\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       menu: { madeBy: \"Kaixin Huang\", description: description },\n                //     },\n                //   }\n                // );\n                setEditDescription(!editDescription);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleEditVisibility = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(value, id, setOpenVisibility, openVisibility) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/setting\"), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        visibility: value\n                    })\n                });\n            case 2:\n                // const { db } = await connectToDatabase();\n                // console.log(value);\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       visibility: value,\n                //     },\n                //   }\n                // );\n                setOpenVisibility(!openVisibility);\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleRename = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, id, listTitle) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title,\n                        newTitle: listTitle\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id), \"lists.name\": title },\n//     { $set: { \"lists.$.name\": listTitle } }\n//   );\n}));\nvar handleDeleteList = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"DELETE\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title\n                    })\n                });\n            case 2:\n                // const { db } = await connectToDatabase();\n                // await db\n                //   .collection(\"boards\")\n                //   .updateOne(\n                //     { _id: new ObjectId(id) },\n                //     { $pull: { lists: { name: title } } }\n                //   );\n                window.location.reload();\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleEditCardDescription = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, listIndex, i, id, cardDescription, setEditDescription, editDescription) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                e.preventDefault();\n                _ctx.next = 3;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(i), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: i,\n                        cardDescription: cardDescription\n                    })\n                });\n            case 3:\n                // const { db } = await connectToDatabase();\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       [`lists.${listIndex}.cards.${i}.description`]: cardDescription,\n                //     },\n                //   }\n                // );\n                setEditDescription(!editDescription);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleAddComment = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, listIndex, cardIndex, id, comment) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(cardIndex), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: cardIndex,\n                        comment: comment\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db.collection(\"boards\").updateOne(\n//   { _id: new ObjectId(id) },\n//   {\n//     $addToSet: {\n//       [`lists.${listIndex}.cards.${cardIndex}.comments`]: {\n//         name: \"Kaixin Huang\",\n//         description: comment,\n//       },\n//     },\n//   }\n// );\n}));\nvar handleAddLabels = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(currentLabels, label, listIndex, cardIndex, setLabels, labels, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!currentLabels || !currentLabels.includes(label)) setLabels(_toConsumableArray(labels).concat([\n                    label\n                ]));\n                _ctx.next = 3;\n                return fetch(\"http://localhost:3000/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(cardIndex), {\n                    method: \"DELETE\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: cardIndex,\n                        label: label\n                    })\n                });\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db.collection(\"boards\").updateOne(\n//   { _id: new ObjectId(id) },\n//   {\n//     $addToSet: {\n//       [`lists.${listIndex}.cards.${cardIndex}.labels`]: label,\n//     },\n//   }\n// );\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixDQUFDO29CQUFXRixLQUFLO2dCQUFBLENBQUM7O3VCQUN4Qm5DLEtBQUssQ0FDUixDQUFpQyxtQ0FBYzJCLE1BQVMsQ0FBckI5QixFQUFFLEVBQUMsQ0FBTyxVQUFxQmlDLE1BQVMsQ0FBNUJILFNBQVMsRUFBQyxDQUFPLFVBQVksT0FBVkcsU0FBUyxHQUM1RSxDQUFDO29CQUNDN0IsTUFBTSxFQUFFLENBQVE7b0JBQ2hCQyxPQUFPLEVBQUUsQ0FBQzt3QkFDUixDQUFjLGVBQUUsQ0FBa0I7b0JBQ3BDLENBQUM7b0JBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQzt3QkFDcEJzQixTQUFTLEVBQUVBLFNBQVM7d0JBQ3BCRyxTQUFTLEVBQUVBLFNBQVM7d0JBQ3BCSyxLQUFLLEVBQUVBLEtBQUs7b0JBQ2QsQ0FBQztnQkFDSCxDQUFDOzs7Ozs7QUFHSCxFQUE0QztBQUM1QyxFQUEyQztBQUMzQyxFQUErQjtBQUMvQixFQUFNO0FBQ04sRUFBbUI7QUFDbkIsRUFBaUU7QUFDakUsRUFBUztBQUNULEVBQU07QUFDTixFQUFLO0FBQ1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY29uc3QudHM/NmJmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi9saWIvbW9uZ29kYlwiO1xuLy8gaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgY29uc3QgdXJsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgID8gcHJvY2Vzcy5lbnYuREVWX1VSTFxuICAgIDogcHJvY2Vzcy5lbnYuUFJPRF9VUkw7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRMaXN0ID0gYXN5bmMgKGxpc3RUaXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JvYXJkcy8ke2lkfWApO1xuICBhd2FpdCBmZXRjaChgL2FwaS9ib2FyZHMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHRpdGxlOiBsaXN0VGl0bGUsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIC8vIGF3YWl0IGRiXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJib2FyZHNcIilcbiAgLy8gICAudXBkYXRlT25lKFxuICAvLyAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcbiAgLy8gICAgIHsgJHB1c2g6IHsgbGlzdHM6IHsgbmFtZTogbGlzdFRpdGxlIH0gfSB9XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRDYXJkID0gYXN5bmMgKFxuICB0aXRsZTogc3RyaW5nLFxuICBjYXJkVGl0bGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke3RpdGxlfWAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY2FyZFRpdGxlOiBjYXJkVGl0bGUsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIC8vIGF3YWl0IGRiXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJib2FyZHNcIilcbiAgLy8gICAudXBkYXRlT25lKFxuICAvLyAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCksIFwibGlzdHMubmFtZVwiOiB0aXRsZSB9LFxuICAvLyAgICAgeyAkYWRkVG9TZXQ6IHsgXCJsaXN0cy4kLmNhcmRzXCI6IHsgdGl0bGU6IGNhcmRUaXRsZSB9IH0gfVxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRWRpdERlc2NyaXB0aW9uID0gYXN5bmMgKFxuICBlOiBhbnksXG4gIGlkOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHNldEVkaXREZXNjcmlwdGlvbjogRnVuY3Rpb24sXG4gIGVkaXREZXNjcmlwdGlvbjogYm9vbGVhblxuKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYm9hcmRzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGIuY29sbGVjdGlvbihcImJvYXJkc1wiKS51cGRhdGVPbmUoXG4gIC8vICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcbiAgLy8gICB7XG4gIC8vICAgICAkc2V0OiB7XG4gIC8vICAgICAgIG1lbnU6IHsgbWFkZUJ5OiBcIkthaXhpbiBIdWFuZ1wiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyApO1xuICBzZXRFZGl0RGVzY3JpcHRpb24oIWVkaXREZXNjcmlwdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRWRpdFZpc2liaWxpdHkgPSBhc3luYyAoXG4gIHZhbHVlOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHNldE9wZW5WaXNpYmlsaXR5OiBGdW5jdGlvbixcbiAgb3BlblZpc2liaWxpdHk6IGJvb2xlYW5cbikgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib2FyZHMvJHtpZH0vc2V0dGluZ2AsIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2aXNpYmlsaXR5OiB2YWx1ZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLnVwZGF0ZU9uZShcbiAgLy8gICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgIHtcbiAgLy8gICAgICRzZXQ6IHtcbiAgLy8gICAgICAgdmlzaWJpbGl0eTogdmFsdWUsXG4gIC8vICAgICB9LFxuICAvLyAgIH1cbiAgLy8gKTtcblxuICBzZXRPcGVuVmlzaWJpbGl0eSghb3BlblZpc2liaWxpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlbmFtZSA9IGFzeW5jIChcbiAgdGl0bGU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgbGlzdFRpdGxlOiBzdHJpbmdcbikgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib2FyZHMvJHtpZH0vbGlzdHMvJHt0aXRsZX1gLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbmV3VGl0bGU6IGxpc3RUaXRsZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGJcbiAgLy8gICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAvLyAgIC51cGRhdGVPbmUoXG4gIC8vICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSwgXCJsaXN0cy5uYW1lXCI6IHRpdGxlIH0sXG4gIC8vICAgICB7ICRzZXQ6IHsgXCJsaXN0cy4kLm5hbWVcIjogbGlzdFRpdGxlIH0gfVxuICAvLyAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGVsZXRlTGlzdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke3RpdGxlfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgfSksXG4gIH0pO1xuXG4gIC8vIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIC8vIGF3YWl0IGRiXG4gIC8vICAgLmNvbGxlY3Rpb24oXCJib2FyZHNcIilcbiAgLy8gICAudXBkYXRlT25lKFxuICAvLyAgICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcbiAgLy8gICAgIHsgJHB1bGw6IHsgbGlzdHM6IHsgbmFtZTogdGl0bGUgfSB9IH1cbiAgLy8gICApO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFZGl0Q2FyZERlc2NyaXB0aW9uID0gYXN5bmMgKFxuICBlOiBhbnksXG4gIGxpc3RJbmRleDogbnVtYmVyLFxuICBpOiBudW1iZXIsXG4gIGlkOiBzdHJpbmcsXG4gIGNhcmREZXNjcmlwdGlvbjogc3RyaW5nLFxuICBzZXRFZGl0RGVzY3JpcHRpb246IEZ1bmN0aW9uLFxuICBlZGl0RGVzY3JpcHRpb246IGJvb2xlYW5cbikgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke2xpc3RJbmRleH0vY2FyZHMvJHtpfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxpc3RJbmRleDogbGlzdEluZGV4LFxuICAgICAgICBjYXJkSW5kZXg6IGksXG4gICAgICAgIGNhcmREZXNjcmlwdGlvbjogY2FyZERlc2NyaXB0aW9uLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLnVwZGF0ZU9uZShcbiAgLy8gICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgIHtcbiAgLy8gICAgICRzZXQ6IHtcbiAgLy8gICAgICAgW2BsaXN0cy4ke2xpc3RJbmRleH0uY2FyZHMuJHtpfS5kZXNjcmlwdGlvbmBdOiBjYXJkRGVzY3JpcHRpb24sXG4gIC8vICAgICB9LFxuICAvLyAgIH1cbiAgLy8gKTtcblxuICBzZXRFZGl0RGVzY3JpcHRpb24oIWVkaXREZXNjcmlwdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkQ29tbWVudCA9IGFzeW5jIChcbiAgZTogYW55LFxuICBsaXN0SW5kZXg6IG51bWJlcixcbiAgY2FyZEluZGV4OiBudW1iZXIsXG4gIGlkOiBzdHJpbmcsXG4gIGNvbW1lbnQ6IHN0cmluZ1xuKSA9PiB7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke2xpc3RJbmRleH0vY2FyZHMvJHtjYXJkSW5kZXh9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxpc3RJbmRleDogbGlzdEluZGV4LFxuICAgICAgICBjYXJkSW5kZXg6IGNhcmRJbmRleCxcbiAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgIH0pLFxuICAgIH1cbiAgKTtcblxuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLnVwZGF0ZU9uZShcbiAgLy8gICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgIHtcbiAgLy8gICAgICRhZGRUb1NldDoge1xuICAvLyAgICAgICBbYGxpc3RzLiR7bGlzdEluZGV4fS5jYXJkcy4ke2NhcmRJbmRleH0uY29tbWVudHNgXToge1xuICAvLyAgICAgICAgIG5hbWU6IFwiS2FpeGluIEh1YW5nXCIsXG4gIC8vICAgICAgICAgZGVzY3JpcHRpb246IGNvbW1lbnQsXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9LFxuICAvLyAgIH1cbiAgLy8gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRMYWJlbHMgPSBhc3luYyAoXG4gIGN1cnJlbnRMYWJlbHM6IHN0cmluZ1tdLFxuICBsYWJlbDogc3RyaW5nLFxuICBsaXN0SW5kZXg6IG51bWJlcixcbiAgY2FyZEluZGV4OiBudW1iZXIsXG4gIHNldExhYmVsczogRnVuY3Rpb24sXG4gIGxhYmVsczogc3RyaW5nW10sXG4gIGlkOiBzdHJpbmdcbikgPT4ge1xuICBpZiAoIWN1cnJlbnRMYWJlbHMgfHwgIWN1cnJlbnRMYWJlbHMuaW5jbHVkZXMobGFiZWwpKVxuICAgIHNldExhYmVscyhbLi4ubGFiZWxzLCBsYWJlbF0pO1xuICBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ib2FyZHMvJHtpZH0vbGlzdHMvJHtsaXN0SW5kZXh9L2NhcmRzLyR7Y2FyZEluZGV4fWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxpc3RJbmRleDogbGlzdEluZGV4LFxuICAgICAgICBjYXJkSW5kZXg6IGNhcmRJbmRleCxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgfSksXG4gICAgfVxuICApO1xuXG4gIC8vIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIC8vIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJib2FyZHNcIikudXBkYXRlT25lKFxuICAvLyAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXG4gIC8vICAge1xuICAvLyAgICAgJGFkZFRvU2V0OiB7XG4gIC8vICAgICAgIFtgbGlzdHMuJHtsaXN0SW5kZXh9LmNhcmRzLiR7Y2FyZEluZGV4fS5sYWJlbHNgXTogbGFiZWwsXG4gIC8vICAgICB9LFxuICAvLyAgIH1cbiAgLy8gKTtcbn07XG4iXSwibmFtZXMiOlsidXJsIiwicHJvY2VzcyIsImVudiIsIkRFVl9VUkwiLCJQUk9EX1VSTCIsImhhbmRsZUFkZExpc3QiLCJsaXN0VGl0bGUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwiaGFuZGxlQWRkQ2FyZCIsImNhcmRUaXRsZSIsImhhbmRsZUVkaXREZXNjcmlwdGlvbiIsImUiLCJkZXNjcmlwdGlvbiIsInNldEVkaXREZXNjcmlwdGlvbiIsImVkaXREZXNjcmlwdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlRWRpdFZpc2liaWxpdHkiLCJ2YWx1ZSIsInNldE9wZW5WaXNpYmlsaXR5Iiwib3BlblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiaGFuZGxlUmVuYW1lIiwibmV3VGl0bGUiLCJoYW5kbGVEZWxldGVMaXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVFZGl0Q2FyZERlc2NyaXB0aW9uIiwibGlzdEluZGV4IiwiaSIsImNhcmREZXNjcmlwdGlvbiIsImNhcmRJbmRleCIsImhhbmRsZUFkZENvbW1lbnQiLCJjb21tZW50IiwiaGFuZGxlQWRkTGFiZWxzIiwiY3VycmVudExhYmVscyIsImxhYmVsIiwic2V0TGFiZWxzIiwibGFiZWxzIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/const.ts\n");

/***/ })

});